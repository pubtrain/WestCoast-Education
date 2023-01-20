import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';

describe('Course list component', () => {
  const setup = () => render(<CourseList />);

  describe('course list button ', () => {
    test('says "Lägg till ny kurs', () => {
      setup();

      const button = screen.getByRole('button', { name: 'Lägg till ny kurs' });

      expect(button).toBeInTheDocument();
    });
  });
});
