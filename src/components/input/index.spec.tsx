import { screen } from '@testing-library/react';

import { render } from '~/common/utils/test'

import Input from './'

describe('input', () => {
  it('should render input', async () => {
    render(<Input
      id="id-test"
      name="name-test"
      label="label-test"

      value=''
      onChange={() => { }}
    />);

    const component = await screen.getByTestId('name-test')

    expect(component).toBeTruthy()
  });
  it('should display error message if error is true', async () => {
    render(<Input
      id="id-test"
      name="name-test"
      label="label-test"

      value=''
      onChange={() => { }}
      error={true}
    />);

    const component = await screen.queryByText(/Empty field!/)
    expect(component).toBeInTheDocument()
  });
})