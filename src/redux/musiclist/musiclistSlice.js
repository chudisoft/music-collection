import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
// import axios from 'axios';

const baseApiUrl = 'https://api.deezer.com/search';

// First, create the thunk
const fetchMusicList = createAsyncThunk(
  'musiclist/fetchMusicList',
  async (category) => {
    try {
      // Retrieve state from localStorage
      console.log(category);

      const response = await fetch(`${baseApiUrl}?q=${category}`);
      const result = await response.json();

      console.log('result:');
      console.log(result);
      const groupedData = result.reduce((groups, item) => {
        const { artist } = item.artist.name;

        // If the category is not already a key in the groups object,
        // create an empty array for it.
        if (!groups[artist]) {
          groups[artist] = [];
        }

        // Push the current item into the corresponding category array.
        groups[artist].push(item);

        return groups;
      }, {});

      // Now, 'groupedData' will be an object with categories as keys and
      // arrays of objects as values.
      console.log(groupedData);

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
