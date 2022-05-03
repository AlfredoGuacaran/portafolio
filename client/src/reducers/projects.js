import { CREATE_PROJECT, FETCHALLPROJECTS, LOADING_PROJECTS, END_LOADING_PROJECTS, SET_PROJECT, DELETE_PROJECT } from '../constants/actionTypes';
export default (state = { projects: [], loading: false, endLoading: false, currentProject: null }, action) => {
  switch (action.type) {
    case LOADING_PROJECTS:
      return { ...state, loading: true, endLoading: false };
    case END_LOADING_PROJECTS:
      return { ...state, endLoading: true, loading: false };
    case CREATE_PROJECT:
      return { ...state, projects: [...state.projects, action.payload] };
    case SET_PROJECT:
      return { ...state, currentProject: state.projects.find((project) => project._id === action.payload._id) };
    case FETCHALLPROJECTS:
      return { ...state, projects: action.payload };
    case DELETE_PROJECT:
      return { ...state, projects: state.projects.filter((project) => project._id !== action.payload.idDeleted) };
    default:
      return state;
  }
};
