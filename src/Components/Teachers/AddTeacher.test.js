import { render, screen } from '@testing-library/react';
import AddTeacher from './AddTeacher';
import { MemoryRouter } from 'react-router-dom';

describe('Add Teacher component', () => {
  const setup = () => render(<AddTeacher />, { wrapper: MemoryRouter });

  describe('form includes', () => {
    test('title', () => {
      setup();

      const title = screen.getByRole('heading', {
        name: 'Lägg till ny lärare',
      });

      expect(title).toBeInTheDocument();
    });
  });
});
