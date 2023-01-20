import React from 'react';
import { render, screen } from '@testing-library/react';
import AddCourse from './AddCourse';
import { MemoryRouter } from 'react-router-dom';

describe('AddCourse form', () => {
  const setup = () => render(<AddCourse />);
  test('course form renders correctly', () => {
    setup();
    const utils = render(<AddCourse />, { wrapper: MemoryRouter });
    expect(utils).toMatchSnapshot();
    expect(utils).toBeTruthy();
  });
});
