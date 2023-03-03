import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IBug } from '../interfaces';

interface IBugsFilter {
  sortOrder: number;
  showSolved: boolean;
  active: boolean;
}
interface IBugsState {
  value: IBug[];
  searchQuery: string;
  isSearch: boolean;
  bugsFilter: IBugsFilter;
}

const initialState: IBugsState = {
  value: [],
  searchQuery: '',
  isSearch: false,
  bugsFilter: { sortOrder: 1, showSolved: true, active: false },
};

export const bugsSlice = createSlice({
  name: 'bugs',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      if (action.payload) {
        state.isSearch = true;
      } else {
        state.isSearch = false;
      }
    },
    setBugsFilter: (state, action: PayloadAction<IBugsFilter>) => {
      state.bugsFilter = { ...state.bugsFilter, ...action.payload };
    },
    addBug: (state, action: PayloadAction<IBug>) => {
      state.value.unshift(action.payload);
    },
    deleteBug: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((bug) => bug.id !== action.payload);
    },
    updateBug: (state, action: PayloadAction<IBug>) => {
      state.value = state.value.map((bug) => (bug.id === action.payload.id ? { ...bug, ...action.payload } : bug));
    },
    populateBugs: (state, action: PayloadAction<IBug[]>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { populateBugs, addBug, deleteBug, updateBug, setSearchQuery, setBugsFilter } = bugsSlice.actions;

export default bugsSlice.reducer;
