import { configureStore } from '@reduxjs/toolkit';
import { housesReducer} from '../features/houses/houseSlice';
import logger from 'redux-logger';

export const store = configureStore({
    reducer: {
        houses: housesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
