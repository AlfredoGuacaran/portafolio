import { CREATE, FETCHALLSKILLS, LOADING, END_LOADING } from '../constants/actionTypes';
export default (state = { skills: [], loadingStatus: 'noLoding' }, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loadingStatus: 'loding' };
    case END_LOADING:
      return { ...state, loadingStatus: 'completed' };
    case CREATE:
      return { ...state, skills: action.payload };
    case FETCHALLSKILLS:
      return { ...state, skills: action.payload };
    default:
      return state;
  }
};
