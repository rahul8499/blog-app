import { render, screen } from '@testing-library/react';
import BlogPostList from '../components/BlogPostList';

test('renders blog post list', () => {
  render(<BlogPostList />);
  const linkElement = screen.getByText(/Blog Posts/i);
  expect(linkElement).toBeInTheDocument();
});
