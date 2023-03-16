import { act, screen, within } from "@testing-library/react";
import user from '@testing-library/user-event';

import { render } from '~/common/utils/test'

import Embarks from "."
import { options } from "./options";

function tick() {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  })
}

describe('Page: Embarks', () => {
  it('should render embarks', () => {
    render(<Embarks />);

    const rows = screen.queryAllByTestId(options.embarksRow)
    expect(rows.length).toBe(5)
  })
  it('should filter embarks when click on "Apply button"', async () => {
    render(<Embarks />);

    const selectLabel = /Routes/;
    const selectEl = screen.queryByLabelText(selectLabel) as HTMLElement;
    expect(selectEl).toBeInTheDocument();

    await user.click(selectEl);

    const optionsPopupEl = await screen.findByRole("listbox", {
      name: selectLabel
    });

    await user.click(within(optionsPopupEl).getByText(/L04 Margarida x Ferrovia/));

    const button = screen.getByText(/Apply/)
    await act(async () => await user.click(button));
    await tick()

    const row = await screen.findAllByText(/L04 Margarida x Ferrovia/)
    expect(row.length).toBe(1)
  })
})