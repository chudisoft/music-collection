import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MusicList from './MusicList';
import musiclistReducer, { setMusicList } from '../../redux/musiclist/musiclistSlice'; // Import your action creators

const mockStore = configureStore([thunk]);

describe('Test musiclist component', () => {
  const mockMusicListData = {
    'A': [
      { id: 1, category: { name: 'A' }, name: 'Item 1' },
      { id: 3, category: { name: 'A' }, name: 'Item 3' },
    ],
    'B': [
      { id: 2, category: { name: 'B' }, name: 'Item 2' },
    ],
    'C': [
      { id: 4, category: { name: 'C' }, name: 'Item 4' },
    ],
  };

  // Mock store with initial musiclist state and action creators
  const store = mockStore({
    musiclist: {
      musiclist: mockMusicListData,
      error: '',
      loading: 'idle', // 'idle' | 'pending' | 'succeeded' | 'failed'
    },
  });
  // Dispatch setMusicList action with mock data
  store.dispatch(setMusicList(mockMusicListData));
  let musiclistAvailable = store.getState().musiclist.musiclist;

  test('renders musiclist after fetching data', async () => {
    const { getAllByText } = render(
      <Provider store={store}>
        <MusicList />
      </Provider>
    );
    expect(screen.getByText(/Item 2/)).toBeInTheDocument();;
  });
});
