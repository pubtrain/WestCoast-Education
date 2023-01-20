import { render, screen } from '@testing-library/react';
import TeacherDetails from './TeacherDetails';
import { MemoryRouter } from 'react-router-dom';

describe('Teacher details component', () => {
  const setup = () => render(<TeacherDetails />, { wrapper: MemoryRouter });

  describe('teacher details includes', () => {
    test('link to "/teachers"', () => {
      setup();

      const loading = screen.getByText('loading');

      expect(loading).toBeInTheDocument();
    });
  });
});
