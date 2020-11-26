import { render } from '@testing-library/react';
import MonitoringSystemBlock from './MonitoringSystemBlock';

let state = {
  data: 354,
  error: "",
};

test('renders air Pressure monitoring system', () => {
  const { getByText } = render(<MonitoringSystemBlock title="Air pressure" data={state} />);
  expect(getByText('Air pressure')).toBeInTheDocument();
  expect(getByText('354')).toBeInTheDocument();
});

let errorState = {
  data: 354,
  error: "error",
};

test('renders air Pressure monitoring system with N/A', () => {
  const { getByText } = render(<MonitoringSystemBlock title="Air pressure" data={errorState} />);
  expect(getByText("Air pressure")).toBeInTheDocument();
  expect(getByText("N/A")).toBeInTheDocument();
});