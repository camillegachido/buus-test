import {
  Table, TableCell,
  TableContainer, TableFooter, TablePagination, TableRow,
  TableHead
} from '@mui/material';

import useTablePagination from '~/common/hooks/use-table-pagination';
import { options } from './options';
import TableBody from './table-body'


interface IProps {
  data: any
  loading: boolean
  header: string[]
  generateRow: (data: any) => JSX.Element
}

function StyledTable({ data, generateRow, header, loading }: IProps) {
  const { page, handleChangePage,
    rowsPerPage, handleChangeRowsPerPage, rows } = useTablePagination<typeof data>(data)

  return (
    <TableContainer data-testid={options.table}>
      <Table sx={{ minWidth: 500 }} aria-label="embarks table">

        <TableHead sx={{ backgroundColor: '#e8e8e8' }}>
          <TableRow>
            {
              header.map(title => <TableCell
                key={title} sx={{ fontWeight: 'bold' }}>
                {title}
              </TableCell>)
            }
          </TableRow>
        </TableHead>
        <TableBody
          rows={rows}
          rowsPerPage={rowsPerPage}
          headerLength={header.length}
          loading={loading}
        >
          {rows.map((row) => generateRow(row))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                  'title': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default StyledTable