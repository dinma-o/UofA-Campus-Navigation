import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home Page', () => {
  it('renders the homepage correctly', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { name: /welcome to uofa campus nav/i });
    expect(heading).toBeInTheDocument();
  });
});