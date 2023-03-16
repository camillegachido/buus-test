import { TableCell, TableRow } from "@mui/material";
import { IEmbark } from "~/common/types/embarks";
import Table from "~/components/table";
import { options } from "../../options";

const generateRow = (row: IEmbark) => {
  return <TableRow key={`${row.date}-${row.car}`} data-testid={options.embarksRow}>
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

interface IProps {
  data: IEmbark[]
}

function EmbarksTable({ data }: IProps) {
  return <Table
    data={data}
    loading={false}
    generateRow={generateRow}
    header={['Date', 'Route', 'Driver', 'Car', 'Started at', 'Ended at', 'Embarks', '']}
  />
}

export default EmbarksTable