import { render, screen } from '@testing-library/react';
import App from '../App';  // Adjust the import if necessary

test('renders School dashboard', () => {
  render(<App />);
  const linkElement = screen.getByText(/School dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
