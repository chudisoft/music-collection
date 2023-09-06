import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
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
    {
      title: 'Rock',
      description: 'Known for its use of electric guitars, strong rhythms, and a wide range of vocal styles.',
      class: 'Rock',
    },
    {
      title: 'Jazz',
      description: 'Known for improvisation, syncopation, and a wide range of instrumental combinations.',
      class: 'Jazz',
    },
    {
      title: 'Hip-Hop/Rap',
      description: 'Features spoken word poetry and a strong rhythmic element, often with electronic beats.',
      class: 'Rap',
    },
    {
      title: 'Country',
      description: 'Originated in rural America, often featuring acoustic instruments and storytelling lyrics.',
      class: 'Country',
    },
    {
      title: 'Electronic',
      description: 'Primarily created with synthesizers and electronic equipment, includes various subgenres like techno, house, and dubstep.',
      class: 'Electronic',
    },
    {
      title: 'R&B (Rhythm and Blues)',
      description: 'Often characterized by soulful vocals and a focus on rhythm.',
      class: 'R&B',
    },
    {
      title: 'Reggae',
      description: 'Originated in Jamaica, known for its offbeat rhythm and socially conscious lyrics.',
      class: 'Reggae',
    },
    {
      title: 'Blues',
      description: 'Known for its 12-bar chord progression and emotive, often melancholic lyrics.',
      class: 'Blues',
    },
    {
      title: 'Metal',
      description: 'Features distorted guitars, powerful vocals, and often explores dark themes.',
      class: 'Metal',
    },
    {
      title: 'Punk',
      description: 'Known for its simplicity, raw sound, and often rebellious attitude.',
      class: 'Punk',
    },
    {
      title: 'Folk',
      description: 'Often acoustic and characterized by storytelling lyrics, rooted in cultural traditions.',
      class: 'Folk',
    },
  ],
};

// 'Classical', 'Pop', 'Rock', 'Jazz', 'Hip-Hop/Rap', 'Country', 'Electronic',
// 'R&B (Rhythm and Blues)', 'Reggae', 'Blues', 'Metal', 'Punk', 'Folk',

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
  extraReducers: () => {},
});

export const categories = (state) => state.categories;

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
