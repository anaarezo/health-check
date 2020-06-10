import React from 'react';
import { render } from '@testing-library/react';
import HealthList from './HealthList';

test('renders learn react link', () => {
  const { getByText } = render(<HealthList />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
