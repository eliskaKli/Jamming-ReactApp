import { render, screen } from '@testing-library/react';
import App from './App';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

test('renders whole page App', () => {
  render(<App />);
});

test('renders SearchBar', () => {
  render(<SearchBar />);

});

test('renders the search results in the result section', () => {
  render(<SearchResults />);
  const headline = screen.getByText(/Results/);
  expect(headline).toBeInTheDocument();
});

test('renders the playlist section', () => {
  render(<Playlist />);

});
