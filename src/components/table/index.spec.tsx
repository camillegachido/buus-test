import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import Table from './'
import { options } from './options'

interface ITest {
  driver: string
  car: string
}

const createData = (driver: string, car: string) => {
  return { driver, car }
}

const data: ITest[] = [
  createData('John', 'LBP-4531'),
  createData('John', 'LBP-4532'),
  createData('John', 'LBP-4533'),
  createData('John', 'LBP-4534'),
  createData('John', 'LBP-4535'),
  createData('John', 'LBP-4536'),
  createData('John', 'LBP-4537'),
  createData('John', 'LBP-4538'),
  createData('John', 'LBP-4539'),
  createData('John', 'LBP-4540'),
  createData('John', 'LBP-4541'),
  createData('John', 'LBP-4542'),
  createData('John', 'LBP-4543'),
]

const generateRow = (row: ITest) => {
  return <tr key={`${row.driver}-${row.car}`}>
    <td>{row.driver}</td>
    <td>{row.car}</td>
  </tr>

}

describe('table', () => {
  it('should render table', async () => {
    render(<Table
      data={data}
      generateRow={generateRow}
      header={['Driver', 'Car']}
    />
    );

    const component = await screen.findByTestId(options.table)
    expect(component).toBeTruthy()
  });
  it('should render correct header', () => {
    render(<Table
      data={data}
      generateRow={generateRow}
      header={['Driver', 'Car']}
    />
    );

    const header1 = screen.queryByText(/Driver/);
    const header2 = screen.queryByText(/Car/);

    expect(header1).toBeVisible();
    expect(header2).toBeVisible();
  })
  it('should render correct rows', () => {
    render(<Table
      data={data}
      generateRow={generateRow}
      header={['Driver', 'Car']}
    />);

    const td1 = screen.queryAllByText(/John/);
    const td2 = screen.queryAllByText(/LBP-45/);

    expect(td1.length).toBe(5);
    expect(td2.length).toBe(5);
  })
  it('should move to next page', async () => {
    render(<Table
      data={data}
      generateRow={generateRow}
      header={['Driver', 'Car']}
    />);

    const nextButton = screen.getByTitle('Go to next page')
    expect(nextButton).toBeInTheDocument()

    await user.click(nextButton)

    const td1 = screen.queryByText(/LBP-4536/);
    const td2 = screen.queryByText(/LBP-4537/);
    const td3 = screen.queryByText(/LBP-4538/);
    const td4 = screen.queryByText(/LBP-4539/);
    const td5 = screen.queryByText(/LBP-4540/);

    expect(td1).toBeVisible()
    expect(td2).toBeVisible()
    expect(td3).toBeVisible()
    expect(td4).toBeVisible()
    expect(td5).toBeVisible()
  })
  it('should move to before page', async () => {
    render(<Table
      data={data}
      generateRow={generateRow}
      header={['Driver', 'Car']}
    />);

    const nextButton = screen.getByTitle('Go to next page')
    await user.click(nextButton)

    const previousButton = screen.getByTitle('Go to previous page')
    await user.click(previousButton)

    const td1 = screen.queryByText(/LBP-4531/);
    const td2 = screen.queryByText(/LBP-4532/);
    const td3 = screen.queryByText(/LBP-4533/);
    const td4 = screen.queryByText(/LBP-4534/);
    const td5 = screen.queryByText(/LBP-4535/);

    expect(td1).toBeVisible()
    expect(td2).toBeVisible()
    expect(td3).toBeVisible()
    expect(td4).toBeVisible()
    expect(td5).toBeVisible()
  })
  it('should change rows per page', async () => {
    render(<Table
      data={data}
      generateRow={generateRow}
      header={['Driver', 'Car']}
    />);

    const select = screen.getByTitle('rows per page')
    expect(select).toBeInTheDocument()

    await user.selectOptions(select, '10')

    const td = screen.queryAllByText(/John/);

    expect(td.length).toBe(10)
  })

})