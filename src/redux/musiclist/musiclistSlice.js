import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
// import axios from 'axios';

const baseApiUrl = 'http://ws.audioscrobbler.com/2.0/?api_key=aa5707fcdf87f9267f083a38c593bfd5&format=json&';
// const response = await fetch('http://ws.audioscrobbler.com/2.0/?method=track.search&track=Rap&api_key=aa5707fcdf87f9267f083a38c593bfd5&format=json');
// const response = await fetch('https://theaudiodb.com/api/v1/json/2/mvid.php?i=112024');
// const response = await fetch('http://ws.audioscrobbler.com/2.0/?method=artist.gettoptags&artist=rap&api_key=aa5707fcdf87f9267f083a38c593bfd5&format=json');

// First, create the thunk
const fetchMusicList = createAsyncThunk(
  'musiclist/fetchMusicList',
  async (category) => {
    try {
      // Retrieve state from localStorage
      console.log(category);

      const response = await fetch(`${baseApiUrl}&method=track.search&limit=30&track=${category}`);
      const result = await response.json();

      console.log('result:');
      console.log(result.results.trackmatches.track);
      const groupedData = result.results.trackmatches.track.reduce((groups, item) => {
        const artistName = item.artist;

        // If the artist name is not already a key in the groups object,
        // create an empty array for it.
        if (!groups[artistName]) {
          groups[artistName] = [];
        }

        // Push the current item into the corresponding artist's array.
        groups[artistName].push(item);

        return groups;
      }, {});

      // Now, 'groupedData' will be an object with artist names as keys and
      // arrays of objects as values.
      console.log(groupedData);
      Object.keys(groupedData).forEach((g) => {
        console.log(g);
        groupedData[g].forEach((m) => {
          console.log(m);
        });
      });
      return groupedData;
    } catch (error) {
      console.log(error.message);
      return [...error.message];
    }
  },
);

const initialState = {
  musiclist: [],
  error: '',
  loading: 'idle', // 'idle' | 'pending' | 'succeeded' | 'failed'
};

export const musiclistSlice = createSlice({
  name: 'musiclist',
  initialState,
  reducers: {
    setMusicList: (state, action) => {
      state.musiclist = [...action.payload];
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchMusicList.pending, (state) => {
      state.status = 'loading';
    }).addCase(fetchMusicList.fulfilled, (state, action) => {
      state.status = 'succeeded';
      if (action.payload !== '') {
        state.musiclist = action.payload;
        if (state.musiclist.length === 0) state.error = 'No result was found!';
      } else {
        state.error = 'No result was found!';
      }
    }).addCase(fetchMusicList.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

// Action creators are generated for each case reducer function
export const {
  setError,
  setMusicList,
} = musiclistSlice.actions;
export { fetchMusicList };

export default musiclistSlice.reducer;
