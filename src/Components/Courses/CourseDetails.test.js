import { render, screen } from '@testing-library/react';
import CourseDetails from './CourseDetails';
import { MemoryRouter } from 'react-router-dom';

describe('Course details component', () => {
  const setup = () => render(<CourseDetails />, { wrapper: MemoryRouter });

  describe('course details includes', () => {
    test('a loading message', () => {
      setup();

      const loading = screen.getByText('loading');

      expect(loading).toBeInTheDocument();
    });
  });
});
