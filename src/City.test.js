import React from 'react'
import {render} from '@testing-library/react'
import {City} from './pages/'

test('renders Get 5 days of Weather Forecast', () => {
    const { getByText } = render(<City />);
    const element = getByText(/Get 5 days of Weather Forecast/);
    expect(element).toBeInTheDocument();
  });

test('renders Select city', () => {
    const { getByText } = render(<City />);
    const element = getByText(/Select City/);
    expect(element).toBeInTheDocument();
  });
