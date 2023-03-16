import { TableCell, TableRow, Skeleton } from "@mui/material"
import { options } from "./options"

interface ILoadingProps {
  rowsPerPage: number
  headerLength: number
}

export const Loading = ({ rowsPerPage, headerLength }: ILoadingProps) => {
  return <>
    {[...Array.from({ length: rowsPerPage })].map((e, i) =>
    (<TableRow key={'sk-' + i}>
      {
        [...Array.from({ length: headerLength })].map((f, ind) =>
          <TableCell key={`sk-${i}-${ind}`}>
            <Skeleton variant="rectangular" />
          </TableCell>)
      }
    </TableRow>))}
  </>
}