import { Dayjs } from "dayjs"

export interface IEmbark {
  date: string
  route: string
  street: string
  driver: string
  car: string
  start: string
  end: string
  embarks: string
}

export interface IEmbarkFilters{
  car: string;
  route: string;
  from: Dayjs;
  to: Dayjs;
  driver: string;
  tripDuration: number
}