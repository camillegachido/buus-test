import { render, screen, within } from "@testing-library/react";
import user from '@testing-library/user-event';

import { localizationProvider } from "~/common/hocs";

import Embarks from "."
import { options } from "./options";

describe('Page: Embarks', () => {
  it('should render embarks', () => {
    render(localizationProvider(<Embarks />));

    const rows = screen.queryAllByTestId(options.embarksRow)
    expect(rows.length).toBe(5)
  })
  it('should filter embarks when click on "Apply button"', async () => {
    render(localizationProvider(<Embarks />));

    const selectLabel = /Routes/;
    const selectEl = await screen.findByLabelText(selectLabel);
    expect(selectEl).toBeInTheDocument();

    await user.click(selectEl);

    const optionsPopupEl = await screen.findByRole("listbox", {
      name: selectLabel
    });

    await user.click(within(optionsPopupEl).getByText(/L04 Margarida x Ferrovia/));

    const button = screen.getByText(/Apply/)
    await user.click(button);

    const row = screen.getAllByText(/L04 Margarida x Ferrovia/)
    expect(row.length).toBe(1)
  })
})