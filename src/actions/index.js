// import * as constants from 'constants';

export function createAction(constant, data) {
  console.log(data)
  return { type: constant, payload: data }
}