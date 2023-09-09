import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    {
      title: 'Classical',
      description: 'Compositions typically characterized by complex arrangements, orchestration, and a focus on instrumentation.',
      img: 'Classical',
      class: '',
    },
    {
      title: 'Pop',
      description: 'Emphasizes catchy melodies, often with simple song structures and lyrics.',
      img: 'Pop',
      class: 'c-dim',
    },
    {
      title: 'Rock',
      description: 'Known for its use of electric guitars, strong rhythms, and a wide range of vocal styles.',
      img: 'Rock',
      class: 'c-dim',
    },
    {
      title: 'Jazz',
      description: 'Known for improvisation, syncopation, and a wide range of instrumental combinations.',
      img: 'Jazz',
      class: '',
    },
    {
      title: 'Hip-Hop',
      description: 'Features spoken word poetry and a strong rhythmic element, often with electronic beats.',
      img: 'Rap',
      class: '',
    },
    {
      title: 'Country',
      description: 'Originated in rural America, often featuring acoustic instruments and storytelling lyrics.',
      img: 'Country',
      class: 'c-dim',
    },
    {
      title: 'Electronic',
      description: 'Primarily created with synthesizers and electronic equipment, includes various subgenres like techno, house, and dubstep.',
      img: 'Electronic',
      class: 'c-dim',
    },
    {
      title: 'R&B (Rhythm and Blues)',
      description: 'Often characterized by soulful vocals and a focus on rhythm.',
      img: 'R&B',
      class: '',
    },
    {
      title: 'Reggae',
      description: 'Originated in Jamaica, known for its offbeat rhythm and socially conscious lyrics.',
      img: 'Reggae',
      class: '',
    },
    {
      title: 'Blues',
      description: 'Known for its 12-bar chord progression and emotive, often melancholic lyrics.',
      img: 'Blues',
      class: 'c-dim',
    },
    {
      title: 'Metal',
      description: 'Features distorted guitars, powerful vocals, and often explores dark themes.',
      img: 'Metal',
      class: 'c-dim',
    },
    {
      title: 'Punk',
      description: 'Known for its simplicity, raw sound, and often rebellious attitude.',
      img: 'Punk',
      class: '',
    },
    {
      title: 'Folk',
      description: 'Often acoustic and characterized by storytelling lyrics, rooted in cultural traditions.',
      img: 'Folk',
      class: '',
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
