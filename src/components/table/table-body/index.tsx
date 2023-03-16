import { TableBody, TableRow, TableCell } from "@mui/material"
import { options } from "../options"
import { Loading } from "../style"

interface IProps {
  children: any
  rowsLength: number
  rowsPerPage: number
  headerLength: number
  loading: boolean
}

function StyledTableBody({ children, rowsLength, headerLength, loading, rowsPerPage }: IProps) {
  if (loading)
    return <TableBody data-testid={options.tableBody}>
      <Loading
        rowsPerPage={rowsPerPage}
        headerLength={headerLength}
      />
    </TableBody>

  const emptyRows = rowsPerPage - rowsLength

  if (rowsLength === 0)
    return <TableBody data-testid={options.tableBody} style={{ height: 53 * emptyRows }}>
      <TableCell colSpan={headerLength}>No data was found</TableCell>
    </TableBody>

  return (<TableBody data-testid={options.tableBody}>
    {children}
    {emptyRows > 0 && (
      <TableRow style={{ height: 53 * emptyRows }} data-testid={options.fakeBody}>
        <TableCell colSpan={headerLength} />
      </TableRow>
    )}
  </TableBody>)
}

export default StyledTableBody