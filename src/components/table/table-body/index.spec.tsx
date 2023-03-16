import { render, screen } from "@testing-library/react"
import TableBody from "."
import { options } from "../options"

describe('table body', () => {
  it('should render table body', () => {
    render(<table>
      <TableBody
        rowsLength={0}
        rowsPerPage={5}
        loading={false}
        headerLength={4}
      >
        <tr><td>Test</td></tr>
      </TableBody>
    </table>
    )

    const table = screen.queryByTestId(options.tableBody)
    expect(table).toBeInTheDocument()
  })
  it('should render skeleton if is loading', () => {
    render(<table>
      <TableBody
        rowsLength={4}
        rowsPerPage={5}
        loading={true}
        headerLength={4}
      >
        <tr><td>Test</td></tr>
      </TableBody>
    </table>
    )

    const skeleton = screen.queryByTestId(options.skeleton)
    expect(skeleton).toBeInTheDocument()
  })
  it('should render No data message if row length is 0', () => {
    render(<table>
      <TableBody
        rowsLength={0}
        rowsPerPage={5}
        loading={false}
        headerLength={4}
      >
        <tr><td>Test</td></tr>
      </TableBody>
    </table>
    )

    const noData = screen.queryByText(/No data was found/)
    expect(noData).toBeInTheDocument()
  })
  it('should render children if rows length is bigger than 0 and loading is false', () => {
    render(<table>
      <TableBody
        rowsLength={4}
        rowsPerPage={5}
        loading={false}
        headerLength={4}
      >
        <tr><td>Test</td></tr>
      </TableBody>
    </table>
    )

    const children = screen.queryByText(/Test/)
    expect(children).toBeInTheDocument()
  })
  it('should render EmptyRows if rowsPerPage is bigger than rows length', () => {
    render(<table>
      <TableBody
        rowsLength={3}
        rowsPerPage={5}
        loading={false}
        headerLength={4}
      >
        <tr><td>Test</td></tr>
      </TableBody>
    </table>
    )
  })
})