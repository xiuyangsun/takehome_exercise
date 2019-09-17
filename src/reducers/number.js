import { NEXT_GIF, PREV_GIF } from '../actionTypes';

export default (state = 0, action) => {
    switch (action.type) {
    case NEXT_GIF:
        return state + 1;
    case PREV_GIF:
        return  state - 1;
    default:
        return state;
    }
};