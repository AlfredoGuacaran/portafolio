import { CREATE, FETCHALLSKILLS, LOADING, END_LOADING, SET_SKILL, DELETESKILL, UPDATESKILL } from '../constants/actionTypes';
export default (state = { skills: [], loading: false, endLoading: false, currentSkill: null }, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true, endLoading: false };
    case END_LOADING:
      return { ...state, endLoading: true, loading: false };
    case CREATE:
      return { ...state, skills: action.payload };
    case SET_SKILL:
      return { ...state, currentSkill: state.skills.find((skill) => skill._id === action.payload._id) };
    case FETCHALLSKILLS:
      return { ...state, skills: action.payload };
    case DELETESKILL:
      return { ...state, skills: state.skills.filter((skill) => skill._id !== action.payload.idDeleted) };
    case UPDATESKILL:
      return {
        ...state,
        skills: state.skills.map((skill) => skill._id === action.payload._id && action.payload),
      };
    default:
      return state;
  }
};
