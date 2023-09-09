import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const baseApiUrl = 'https://ws.audioscrobbler.com/2.0/?api_key=a27815b8805aae44827987b05654cc3c&format=json&';

// First, create the thunk
const fetchMusicList = createAsyncThunk(
  'musiclist/fetchMusicList',
  async (category) => {
    try {
      // Retrieve state from localStorage
      const response = await fetch(`${baseApiUrl}&method=track.search&limit=50&track=${category}`);
      const result = await response.json();
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
      return groupedData;
    } catch (error) {
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
      state.loading = 'loading';
    }).addCase(fetchMusicList.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      if (action.payload !== '') {
        state.musiclist = action.payload;
        if (state.musiclist.length === 0) state.error = 'No result was found!';
      } else {
        state.error = 'No result was found!';
      }
    }).addCase(fetchMusicList.rejected, (state, action) => {
      state.loading = 'failed';
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
