import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import Select from './'
import { options } from './options'

describe('select', () => {
  it('should render select', async () => {
    render(<Select
      options={[]}
      value={0}
      onChange={() => { }}
      label='Label'
    />
    );

    const component = await screen.findByTestId(options.select)
    expect(component).toBeTruthy()
  });
  it('should render correct options', async () => {
    render(<Select
      options={[
        { label: 'Option 1', value: 1 },
        { label: 'option 2', value: 2 }]}
      value={0}
      onChange={() => { }}
      label='Label'
    />
    );

    const dropdown = screen.getByRole("button");
    expect(dropdown).toBeVisible();
    await user.click(dropdown);

    expect(screen.getByRole("presentation")).toBeVisible();
    expect(screen.getByText("All")).toBeVisible();
  })

})