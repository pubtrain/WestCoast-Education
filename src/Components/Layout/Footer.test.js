import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  const setup = () => render(<Footer />);

  describe('footer includes', () => {
    test('copyright message', () => {
      setup();

      const span = screen.getByText('Copyright 2023');

      expect(span).toBeInTheDocument();
    });
  });
});
