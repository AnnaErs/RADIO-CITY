import {configureStore, createSlice} from '@reduxjs/toolkit';

import {AppReducersType, AppStateType} from './types';

const appSlice = createSlice<AppStateType, AppReducersType>({
  name: 'AppStore',
  initialState: {},
  reducers: {}
});

// Раскоментируй когда появятся action's
// export const {} = appSlice.actions;

export default configureStore({
  reducer: appSlice.reducer
});
