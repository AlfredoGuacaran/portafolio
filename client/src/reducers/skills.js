import { CREATE } from '../constants/actionTypes';
export default (state = { skills: [] }, action) => {
  switch (action.type) {
    case CREATE:
      return { ...state, posts: action.payload.data };
    default:
      return state;
  }
};
