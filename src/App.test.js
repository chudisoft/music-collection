import configureStore from 'redux-mock-store';
// eslint-disable-next-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { setCategories } from './redux/categories/categoriesSlice';

const mockStore = configureStore([thunk]);

describe('Test missions component', () => {
  const mockCategoryData = [
    {
      title: 'Classical',
      description: 'Compositions typically characterized by complex arrangements, orchestration, and a focus on instrumentation.',
      class: 'Classical',
    },
    {
      title: 'Pop',
      description: 'Emphasizes catchy melodies, often with simple song structures and lyrics.',
      class: 'Pop',
    },
  ];

  const store = mockStore({
    categories: {
      categories: mockCategoryData,
    },
  });
  store.dispatch(setCategories(mockCategoryData));
  test('renders the Navbar and Outlet components', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    const navbarElement = screen.getByText(/Music Collections/i);
    expect(navbarElement).toBeInTheDocument();
  });
});
