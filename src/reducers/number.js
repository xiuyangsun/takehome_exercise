import { NEXT_GIF, PREV_GIF, SET_INDEX } from '../actionTypes';

export default (state = 0, action) => {
    switch (action.type) {
        case NEXT_GIF:
            return state + 1;
        case PREV_GIF:
            return state - 1;
        case SET_INDEX:
            return action.payload
        default:
            return state;
    }
};