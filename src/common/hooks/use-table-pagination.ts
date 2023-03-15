import { useEffect, useState } from "react";



const useTablePagination = <T>(data: T[]) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [rows, setRows] = useState<T[]>([])

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    setRows(rowsPerPage > 0 ? 
        data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) 
        : data)
  },[rowsPerPage, page, data])


  return { page, rows, rowsPerPage, handleChangePage, handleChangeRowsPerPage }
}

export default useTablePagination