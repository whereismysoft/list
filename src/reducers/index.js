import * as constants from '../constants';
import data from './data.json';

const initialState = {
    ...data
}  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case constants.ADD_CARD: {
        return {
          ...state,
          [new Date().getTime()]: action.payload
        }
      };
      case constants.DELETE_CARD: {
        delete state[action.payload]
        return {
          ...state
        }
      };
    }
    return state
  }