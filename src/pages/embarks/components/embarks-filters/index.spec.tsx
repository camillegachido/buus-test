import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import EmbarksFilters from '.'
import { options } from '../../options';

describe('Embarks filters', () => {
  it('should render filters', () => {
    render(<EmbarksFilters onApply={() => { }} />)

    const filterContainer = screen.queryByTestId(options.filter)
    expect(filterContainer).toBeInTheDocument();
  });
  it('should not display extend filters by default', () => {
    render(<EmbarksFilters onApply={() => { }} />)

    const filterContainer = screen.queryByTestId(options.expandedFilter)
    expect(filterContainer).not.toBeInTheDocument();
  });
  it('should display extend filters after click', async () => {
    render(<EmbarksFilters onApply={() => { }} />)

    const button = screen.getByText(/More filters/)
    await user.click(button)

    const filterContainer = screen.queryByTestId(options.expandedFilter)
    expect(filterContainer).toBeInTheDocument();
  });
  it('should change button "More filters" text to "Hide filters"', async () => {
    render(<EmbarksFilters onApply={() => { }} />)

    const button = screen.getByText(/More filters/)
    await user.click(button)

    const changedButton = screen.getByText(/Hide filters/)
    expect(changedButton).toBeInTheDocument();
  });
  it('should hide extend filters after two clicks', async () => {
    render(<EmbarksFilters onApply={() => { }} />)

    const button = await screen.getByText(/More filters/)
    await user.click(button)

    const filterContainer = screen.queryByTestId(options.expandedFilter)
    expect(filterContainer).toBeInTheDocument();

    await user.click(button)
    expect(filterContainer).not.toBeInTheDocument();
  });
  it('should call function when click on "Apply" button', async () => {
    const mock = jest.fn(() => { })
    render(<EmbarksFilters onApply={mock} />)

    const button = screen.getByText(/Apply/)
    await user.click(button)

    expect(mock.mock.calls).toHaveLength(1);
  });
})