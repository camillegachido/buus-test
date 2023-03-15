import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import Header from '.'
import { options } from './options';

describe('Embarks filters', () => {
  it('should render filters', async () => {
    render(<Header />)

    const filterContainer = await screen.getByTestId(options.filter)
    expect(filterContainer).toBeInTheDocument();
  });
  it('should not display extend filters by default', async () => {
    render(<Header />)

    const filterContainer = await screen.getByTestId(options.expandedFilter)
    expect(filterContainer).not.toBeInTheDocument();
  });
  it('should display extend filters after click', async () => {
    render(<Header />)

    const button = await screen.getByText(/More filters/)
    await user.click(button)

    const filterContainer = await screen.getByTestId(options.expandedFilter)
    expect(filterContainer).toBeInTheDocument();
  });
  it('should hide extend filters after two clicks', async () => {
    render(<Header />)

    const button = await screen.getByText(/More filters/)
    await user.click(button)

    const filterContainer = await screen.getByTestId(options.expandedFilter)
    expect(filterContainer).toBeInTheDocument();

    await user.click(button)
    expect(filterContainer).not.toBeInTheDocument();
  });
})