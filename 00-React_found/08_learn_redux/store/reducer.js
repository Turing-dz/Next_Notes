import { SUB_NUMBER, ADD_NUMBER } from "./constants.js";
function reducer(state = { counter: 0 }, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return {...state,counter:state.counter + action.num};
    case SUB_NUMBER:
      return {...state,counter:state.counter - action.num};
    default:
      return state;
  }
}
export default reducer;
