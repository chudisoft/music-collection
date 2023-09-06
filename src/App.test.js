import configureStore from 'redux-mock-store';
// eslint-disable-next-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { setMissions } from './redux/mission/missionsSlice'; // Import your action creators
import App from './App';

const mockStore = configureStore([thunk]);

describe('Test missions component', () => {
  const mockMissionsData = [
    {
      mission_name: 'Thaicom',
      mission_id: '9D1B7E0',
      manufacturers: ['Orbital ATK'],
      payload_ids: ['Thaicom 6', 'Thaicom 8'],
      wikipedia: 'https://en.wikipedia.org/wiki/Thaicom',
      website: 'http://www.thaicom.net/en/satellites/overview',
      twitter: 'https://twitter.com/thaicomplc',
      description:
        'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
      reserved: false,
    },
  ];

  const store = mockStore({
    missions: {
      missions: mockMissionsData,
      error: null,
    },
  });
  store.dispatch(setMissions(mockMissionsData));
  test('renders the Navbar and Outlet components', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    const navbarElement = screen.getByText(/Space Travelers' Hub/i);
    expect(navbarElement).toBeInTheDocument();
  });
});
