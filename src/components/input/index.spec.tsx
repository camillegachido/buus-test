import { render, screen } from '@testing-library/react';
import Input from './'

describe('input', () => {
  it('should render input', async () => {
    render(<Input
      id="id-test"
      name="name-test"
      label="label-test" />);

    const component = await screen.getByTestId('input')

    expect(component).toBeTruthy()
  })
})