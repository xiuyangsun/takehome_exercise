import { FETCH_GIF } from '../actionTypes';

export default (state = [], action) => {
    switch (action.type) {
    case FETCH_GIF:
        return action.payload;
    default:
        return state;
    }
};