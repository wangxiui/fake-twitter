import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Register from '@/pages/register';

// mock API function
const mockRegister = jest.fn((values) => {
  const {username, firstname, password} = values
  if (username === 'test' && firstname === 'test' && password === '1234') {
    return Promise.resolve({ message: 'Register successful' });
  } else {
    return Promise.reject({ message: 'Invalid credentials' });
  }
});

describe('Home', () => {
  it('register form works correctly', async () => {
    // render register component
    const { getByText, getByPlaceholderText, findByText } = render(<Register />);

    // get input elements
    const usernameInput = getByPlaceholderText('Username');
    const firstnameInput = getByPlaceholderText('Firstname');
    const passwordInput = getByPlaceholderText('Password');
    const submitButton = getByText('注册');

    // enter valid credentials
    fireEvent.change(usernameInput, { target: { value: 'test' } });
    fireEvent.change(firstnameInput, { target: { value: 'test' } });
    fireEvent.change(passwordInput, { target: { value: '1234' } });
    // click submit button
    fireEvent.click(submitButton);
    // expect mock login function to be called with correct arguments
    expect(mockRegister).toHaveBeenCalledWith({username: 'test', firstname: 'test', password: '1234'});
    // expect success message to be displayed
    const successMessage = await findByText(/login successful/i);
    expect(successMessage).toBeInTheDocument();

  })
})
