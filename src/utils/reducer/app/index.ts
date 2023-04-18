import {createSlice, configureStore} from '@reduxjs/toolkit';

import {AppStateType, AppReducersType} from './types';

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
