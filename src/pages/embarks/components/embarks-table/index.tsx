import { TableCell, TableRow } from "@mui/material";
import { IEmbark } from "~/common/types/embarks";
import Table from "~/components/table";

const createData = (date: string,
  route: string, street: string,
  driver: string, car: string, start: string, end: string, embarks: string) => {
  return { date, route, street, driver, car, start, end, embarks }
}

const data: IEmbark[] = [
  createData('2022-08-30', 'L01 Zona Sul x Refinaria',
    'Via Linha Amarela', 'João Mendes', 'LBP-4531', '08:00:00', '09:00:00', '20'),
  createData('2022-08-30', 'L01 Zona Sul x Refinaria',
    'Via Linha Amarela', 'João Mendes', 'LBP-4532', '08:00:00', '09:00:00', '20'),
  createData('2022-08-30', 'L01 Zona Sul x Refinaria',
    'Via Linha Amarela', 'João Mendes', 'LBP-4533', '08:00:00', '09:00:00', '20'),
  createData('2022-08-30', 'L01 Zona Sul x Refinaria',
    'Via Linha Amarela', 'João Mendes', 'LBP-4534', '08:00:00', '09:00:00', '20'),
  createData('2022-08-30', 'L01 Zona Sul x Refinaria',
    'Via Linha Amarela', 'João Mendes', 'LBP-4535', '08:00:00', '09:00:00', '20'),
  createData('2022-08-30', 'L01 Zona Sul x Refinaria',
    'Via Linha Amarela', 'João Mendes', 'LBP-4536', '08:00:00', '09:00:00', '20'),
  createData('2022-08-30', 'L01 Zona Sul x Refinaria',
    'Via Linha Amarela', 'João Mendes', 'LBP-4537', '08:00:00', '09:00:00', '20'),
  createData('2022-08-30', 'L01 Zona Sul x Refinaria',
    'Via Linha Amarela', 'João Mendes', 'LBP-4538', '08:00:00', '09:00:00', '20'),
  createData('2022-08-30', 'L01 Zona Sul x Refinaria',
    'Via Linha Amarela', 'João Mendes', 'LBP-4539', '08:00:00', '09:00:00', '20'),
  createData('2022-08-30', 'L01 Zona Sul x Refinaria',
    'Via Linha Amarela', 'João Mendes', 'LBP-4540', '08:00:00', '09:00:00', '20'),
  createData('2022-08-30', 'L01 Zona Sul x Refinaria',
    'Via Linha Amarela', 'João Mendes', 'LBP-4541', '08:00:00', '09:00:00', '20'),
  createData('2022-08-30', 'L01 Zona Sul x Refinaria',
    'Via Linha Amarela', 'João Mendes', 'LBP-4542', '08:00:00', '09:00:00', '20'),
  createData('2022-08-30', 'L01 Zona Sul x Refinaria',
    'Via Linha Amarela', 'João Mendes', 'LBP-4543', '08:00:00', '09:00:00', '20'),
]

const generateRow = (row: IEmbark) => {
  return <TableRow key={`${row.date}-${row.car}`}>
    <TableCell component="th" scope="row">
      {row.date}
    </TableCell>
    <TableCell>
      {row.route} - {row.street}
    </TableCell>
    <TableCell>
      {row.driver}
    </TableCell>
    <TableCell>
      {row.car}
    </TableCell>
    <TableCell>
      {row.start}
    </TableCell>
    <TableCell>
      {row.end}
    </TableCell>
    <TableCell>
      {row.embarks}
    </TableCell>
    <TableCell>
      download
    </TableCell>
  </TableRow>

}

function EmbarksTable() {
  return <Table
    data={data}
    loading={false}
    generateRow={generateRow}
    header={['Date', 'Route', 'Driver', 'Car', 'Started at', 'Ended at', 'Embarks', '']}
  />
}

export default EmbarksTable