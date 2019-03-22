import * as constants from '../constants';
import data from './data.json';

import {deepCopy} from 'utils/copy';

const initialState = {
    ...data
}

  export default function reducer(state = initialState, action) {
    const copy = deepCopy(state.data);

    switch (action.type) {

      case constants.UNSHIFT_LAST_CARD: {
        const lastElement = copy.pop(); 
        copy.unshift(lastElement)

        return { ...state, data: copy}
      };

      case constants.PUSH_FIRST_CARD: {
        const firstElement = copy.shift(); 
        copy.push(firstElement)

        return { ...state, data: copy }
      };

      case constants.DELETE_FIRST_CARD: {
        copy.shift()

        return { ...state, data: copy }
      };

      case constants.DELETE_LAST_CARD: {
        copy.pop()

        return { ...state, data: copy }
      };

      case constants.ADD_NEW_ITEM: {
        const newItem = action.payload;
        copy.push(newItem)

        return { ...state, data: copy }
      };

    }
    return state
  }