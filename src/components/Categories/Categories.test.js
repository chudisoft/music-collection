import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import missionsReducer, { setCategories } from '../../redux/categories/categoriesSlice'; // Import your action creators
import Categories from './Categories';

const mockStore = configureStore([thunk]);

describe('Test missions component', () => {
  const mockMissionsData = [
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

  // Mock store with initial missions state and action creators
  const store = mockStore({
    categories: {
      categories: mockMissionsData,
      error: null,
    },
  });
  // Dispatch setMissions action with mock data
  store.dispatch(setCategories(mockMissionsData));
  let missionsAvailable = store.getState().categories.categories;

  test('renders categories after fetching data', async () => {
    const { getAllByText } = render(
      <Provider store={store}>
        <Categories />
      </Provider>
    );

    await waitFor(() => {
      const missionTitles = getAllByText(/Classical/);
      expect(missionTitles.length).toBe(1);
    });
  });
});
