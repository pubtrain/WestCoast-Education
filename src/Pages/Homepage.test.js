import { render, screen } from '@testing-library/react';
import Homepage from './Homepage';

describe('Homepage component', () => {
  const setup = () => render(<Homepage />);

  describe('Homepage', () => {
    test("should have a title 'Välkommen till framtiden'", () => {
      setup();
      const title = screen.getByRole('heading');

      expect(title).toHaveTextContent(/välkommen till framtiden/i);
    });
  });
});
