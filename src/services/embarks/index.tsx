import { IEmbark } from "~/common/types/embarks"

const createData = (date: string,
  route: string, street: string,
  driver: string, car: string, start: string, end: string, embarks: string) => {
  return { date, route, street, driver, car, start, end, embarks }
}

const createEmbarks: IEmbark[] = [
  createData('2022-03-30', 'L01 Zona Sul x Refinaria',
    'Via Linha Amarela', 'João Mendes', 'LBP-4531', '08:00:00', '09:00:00', '20'),
  createData('2022-03-30', 'L01 Zona Sul x Refinaria',
    'Via Linha Amarela', 'João Mendes', 'LBP-4532', '08:00:00', '09:00:00', '20'),
  createData('2022-03-30', 'L01 Zona Sul x Refinaria',
    'Via Linha Amarela', 'João Mendes', 'LBP-4533', '08:00:00', '09:00:00', '20'),
  createData('2022-03-30', 'L01 Zona Sul x Refinaria',
    'Via Linha Amarela', 'João Mendes', 'LBP-4534', '08:00:00', '09:00:00', '20'),
  createData('2022-04-30', 'L01 Zona Sul x Refinaria',
    'Via Linha Amarela', 'Paula Ferreira', 'LBP-4535', '08:00:00', '09:00:00', '20'),
  createData('2022-07-30', 'L02 Zona Sul x Zona Norte',
    'Via Linha Amarela', 'Paula Ferreira', 'LBP-4536', '07:00:00', '09:00:00', '20'),
  createData('2022-06-30', 'L02 Zona Sul x Zona Norte',
    'Via Linha Amarela', 'Paula Ferreira', 'LBP-4537', '07:00:00', '09:00:00', '20'),
  createData('2022-05-30', 'L02 Zona Sul x Zona Norte',
    'Via Linha Amarela', 'Paula Ferreira', 'LBP-4538', '07:00:00', '09:00:00', '20'),
  createData('2022-08-30', 'L02 Zona Sul x Zona Norte',
    'Via Linha Amarela', 'Lucas Ponto', 'LBP-4539', '07:00:00', '09:00:00', '20'),
  createData('2022-08-30', 'L03 Zona Norte x Empresa',
    'Via Linha Amarela', 'Lucas Ponto', 'LBP-4540', '08:30:00', '09:00:00', '20'),
  createData('2022-08-30', 'L03 Zona Norte x Empresa',
    'Via Linha Amarela', 'Lucas Ponto', 'LBP-4541', '08:30:00', '09:00:00', '20'),
  createData('2022-09-30', 'L03 Zona Norte x Empresa',
    'Via Linha Amarela', 'Lucas Ponto', 'LBP-4542', '08:30:00', '09:00:00', '20'),
  createData('2022-07-30', 'L03 Zona Norte x Empresa',
    'Via Linha Amarela', 'Lucas Ponto', 'LBP-4543', '08:30:00', '09:00:00', '20'),
]

export const GetEmbarks = () => {
  return createEmbarks;
}

export const GetCars = () => {
  return createEmbarks.map(embark => embark.car);
}

export const GetRoutes = () => {
  return createEmbarks.map(embark => embark.route);
}

export const GetDrivers = () => {
  return createEmbarks.map(embark => embark.driver);
}