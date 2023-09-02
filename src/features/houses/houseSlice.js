import { createSlice } from '@reduxjs/toolkit';
import { HOUSES } from '../../app/shared/HOUSES';


const initialState = {
    housesArray: HOUSES
};

const houseSlice = createSlice({
    name: 'houses',
    initialState
});

export const housesReducer = houseSlice.reducer;

export const selectAllHouses = (state) => {
    return state.houses.housesArray;
};

export const selectAvailableHouses = (state) => {
    return state.houses.housesArray.find((house) => house.available);
};

export const selectHouseById = (id) => (state) => {
    return state.houses.housesArray.find(
        (house) => house.id === parseInt(id)
    );
};
