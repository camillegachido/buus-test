import dayjs from "dayjs"
import { GetEmbarks } from "~/services/embarks"
import filterEmbarks from './'

const embarks = GetEmbarks()

describe('Filter embarks', () => {
  it('should return all embarks', () => {
    const filters = {
      car: 'All',
      route: 'All',
      from: dayjs('2022-01-01'),
      to: dayjs('2022-12-31'),
      driver: 'All',
      tripDuration: 0
    }
    const filtered = filterEmbarks(embarks, filters)

    expect(filtered.length).toBe(13)
  })
  it('should return all embarks with car LBP-4531', () => {
    const filters = {
      car: 'LBP-4531',
      route: 'All',
      from: dayjs('2022-01-01'),
      to: dayjs('2022-12-31'),
      driver: 'All',
      tripDuration: 0
    }
    const filtered = filterEmbarks(embarks, filters)

    expect(filtered.length).toBe(1)
  })
  it('should return all embarks with driver João Mendes', () => {
    const filters = {
      car: 'All',
      route: 'All',
      from: dayjs('2022-01-01'),
      to: dayjs('2022-12-31'),
      driver: 'João Mendes',
      tripDuration: 0
    }
    const filtered = filterEmbarks(embarks, filters)

    expect(filtered.length).toBe(4)
  })
  it('should return all embarks with route L02 Zona Sul x Zona Norte', () => {
    const filters = {
      car: 'All',
      route: 'L02 Zona Sul x Zona Norte',
      from: dayjs('2022-01-01'),
      to: dayjs('2022-12-31'),
      driver: 'All',
      tripDuration: 0
    }
    const filtered = filterEmbarks(embarks, filters)

    expect(filtered.length).toBe(4)
  })
  it('should return all embarks with duration bigger than 1 hour', () => {
    const filters = {
      car: 'All',
      route: 'All',
      from: dayjs('2022-01-01'),
      to: dayjs('2022-12-31'),
      driver: 'All',
      tripDuration: 61
    }
    const filtered = filterEmbarks(embarks, filters)

    expect(filtered.length).toBe(4)
  })
  it('should return all embarks between march and april', () => {
    const filters = {
      car: 'All',
      route: 'All',
      from: dayjs('2022-03-01'),
      to: dayjs('2022-04-30'),
      driver: 'All',
      tripDuration: 0
    }
    const filtered = filterEmbarks(embarks, filters)

    expect(filtered.length).toBe(5)
  })
})