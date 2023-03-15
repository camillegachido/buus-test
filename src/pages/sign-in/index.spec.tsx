import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import SignIn from '.';
import { options } from './options'

describe('Page: Sign in', () => {
  it('should render form', async () => {
    const { container } = render(<SignIn />);
    const form = container.querySelector('form');

    expect(form).toBeInTheDocument();
  });
  it('should start with button disabled', async () => {
    render(<SignIn />);

    const button = await screen.findByText(/Sign In/)
    expect(button).toBeDisabled();
  })
  it('should disable button if username field is empty', async () => {
    render(<SignIn />);

    const usernameContainer = await screen.getByTestId(options.username)
    const usernameInput = usernameContainer.querySelector(`#${options.username}`) as HTMLElement;
    await user.type(usernameInput, 'Text')
    await user.clear(usernameInput)


    const button = await screen.findByText(/Sign In/)
    expect(button).toBeDisabled();
  });
  it('should disable button if password field is empty', async () => {
    render(<SignIn />);

    const passwordContainer = await screen.getByTestId(options.password)
    const passwordInput = passwordContainer.querySelector(`#${options.password}`) as HTMLElement;
    await user.type(passwordInput, 'Text')
    await user.clear(passwordInput)

    const button = await screen.findByText(/Sign In/)
    expect(button).toBeDisabled();
  });
  it('should enable button if fields are filled', async () => {
    render(<SignIn />);
    const usernameContainer = await screen.getByTestId(options.username)
    const usernameInput = usernameContainer.querySelector(`#${options.username}`) as HTMLElement;
    await user.type(usernameInput, 'Text')

    const passwordContainer = await screen.getByTestId(options.password)
    const passwordInput = passwordContainer.querySelector(`#${options.password}`) as HTMLElement;
    await user.type(passwordInput, 'Text')

    const button = await screen.findByText(/Sign In/)
    expect(button).toBeEnabled();
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

    const dashboard = await screen.findByText(/Embarks/)
    expect(dashboard).toBeInTheDocument()
  });
})