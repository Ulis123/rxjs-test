import { render, screen } from '@testing-library/react';
import App from './App';

test('renders all systems', () => {
  render(<App />);
  const temperature = screen.getByText("Temperature");
  const aiPressure = screen.getByText("Air pressure");
  const humidity = screen.getByText("Humidity");
  expect(temperature).toBeInTheDocument();
  expect(aiPressure).toBeInTheDocument();
  expect(humidity).toBeInTheDocument();
});
