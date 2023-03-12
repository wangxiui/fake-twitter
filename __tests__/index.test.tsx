import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Index from '@/pages/index';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import NextLink from 'next/link';

jest.mock('next/router', () => require('next-router-mock'));

describe('Home', () => {
  it('renders correctly', () => {
    render(<Index />)
    const heading = screen.getByText(/Welcome to Twitter Lite!/i)
    expect(heading).toBeInTheDocument()
  })

  it('button login router to correct path', () => {
    render(
      <NextLink href="/login">Login</NextLink>,
      { wrapper: MemoryRouterProvider }
    );

    // Click the button:
    fireEvent.click(screen.getByText('Login'));
    // Ensure the router was updated:
    expect(mockRouter.asPath).toEqual('/login')
  })

  it('button Register router to correct path', () => {
    render(
      <NextLink href="/register">Register</NextLink>,
      { wrapper: MemoryRouterProvider }
    );

    // Click the button:
    fireEvent.click(screen.getByText('Register'));
    // Ensure the router was updated:
    expect(mockRouter.asPath).toEqual('/register')
  })
})
