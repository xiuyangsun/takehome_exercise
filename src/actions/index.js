import axios from 'axios';
import { FETCH_GIF, NEXT_GIF, PREV_GIF, SET_INDEX } from '../actionTypes';

const api_key = process.env.REACT_APP_GIPHY_API_KEY;
const limit = process.env.REACT_APP_LIMIT;

export const fetchGif = () => async dispatch => {
  const URL = `http://api.giphy.com/v1/gifs/search?q=cat&api_key=${api_key}&limit=${limit}`;
  const result = await axios.get(URL);

  if (result.error) {
    throw new Error(`[Error Fetching GIFs from GIPHY API]: ${result.error}`);
  }

  dispatch({ type: FETCH_GIF, payload: result.data.data });
}

export const nextGif = () => dispatch => {
  dispatch({ type: NEXT_GIF })
}

export const prevGif = () => dispatch => {
  dispatch({ type: PREV_GIF })
}

export const setIndex = (index) => dispatch => {
  dispatch({ type: SET_INDEX, payload: index })
}
