import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home greeting', () => {
  render(<App />);
  const greeting = screen.getByText(/hi, i'm tushti/i);
  expect(greeting).toBeInTheDocument();
});
