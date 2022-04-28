import { CREATE } from '../constants/actionTypes';import * as api from '../api';
export const createSkill = (skill) => async (dispatch) => {
  try {
    const { data } = await api.createSkill(skill);
    console.log(data);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
