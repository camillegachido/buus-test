import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import SignIn from '.';
import { options } from './options'

describe('Page: Sign in', () => {
  it.skip('should render form', async () => {
    const { container } = render(<SignIn />);
    const form = container.querySelector('form');

    expect(form).toBeInTheDocument();
  });
  it('should display error if fields are empty', async () => {
    render(<SignIn />);
    const button = await screen.findByText(/Sign In/)
    await user.click(button)

    const errorsLabel = await screen.queryAllByText(/Empty field!/)

    expect(errorsLabel.length).toBe(2)
  });
  it('should change page if username and password are filled', async () => {
    render(<SignIn />);

    const usernameContainer = await screen.getByTestId(options.username)
    const usernameInput = usernameContainer.querySelector(`#${options.username}`) as HTMLElement;
    await user.type(usernameInput, 'User')

    expect(usernameInput).toHaveValue('User')

    const passwordContainer = await screen.getByTestId(options.password)
    const passwordInput = passwordContainer.querySelector(`#${options.password}`) as HTMLElement;
    await user.type(passwordInput, 'User')

    expect(passwordInput).toHaveValue('User')

    const button = await screen.findByText(/Sign In/)
    await user.click(button)

    const dashboard = await screen.findByText(/Welcome/)
    expect(dashboard).toBeInTheDocument()
  });
})