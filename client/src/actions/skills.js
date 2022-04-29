import { CREATE, FETCHALLSKILLS, LOADING, END_LOADING } from '../constants/actionTypes';
import * as api from '../api';
export const createSkill = (skill) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const { data } = await api.createSkill(skill);
    dispatch({ type: CREATE, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getSkills = () => async (dispatch) => {
  try {
    const { data } = await api.getSkills();
    dispatch({ type: FETCHALLSKILLS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
