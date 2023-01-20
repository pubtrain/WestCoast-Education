import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { MemoryRouter } from 'react-router-dom';

describe('Navbar component', () => {
  const setup = () => render(<Navbar />, { wrapper: MemoryRouter });

  describe('navbar ', () => {
    test('renders properly', () => {
      setup();
      const utils = render(<Navbar />, { wrapper: MemoryRouter });
      expect(utils).toMatchSnapshot();
      expect(utils).toBeTruthy();
    });

    test('includes list items', () => {
      setup();
      const homepage = screen.getByText('Startsida');

      expect(homepage).toBeVisible();
    });
  });
});
