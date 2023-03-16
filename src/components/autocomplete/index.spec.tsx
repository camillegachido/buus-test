import { screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Autocomplete } from '..';
import { options } from './options';

import { render } from '~/common/utils/test'

describe('autocomplete', () => {
  it('should render autocomplete', async () => {
    render(<Autocomplete
      options={[]}
      value={''}
      onChange={() => { }}
      label='Label'
    />
    );

    const component = await screen.findByTestId(options.autocomplete)
    const autocomplete = screen.getByRole("combobox");

    expect(component).toBeTruthy()
    expect(autocomplete).toBeVisible();
  });
  it('should render option "All"', async () => {
    render(<Autocomplete
      options={["option 1", "option 2"]}
      value={''}
      onChange={() => { }}
      label='Label'
    />
    );

    const autocompleteDropdown = screen.getByRole("button");
    expect(autocompleteDropdown).toBeVisible();
    await user.click(autocompleteDropdown);

    expect(screen.getByRole("presentation")).toBeVisible();
    expect(screen.getByText("All")).toBeVisible();
  });
})