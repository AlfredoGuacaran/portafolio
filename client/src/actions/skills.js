import { CREATE } from '../constants/actionTypes';import * as api from '../api';
export const createSkill = (skill) => async (dispatch) => {
  try {
    dispatch({ type: CREATE, payload: skill });
  } catch (error) {
    console.log(error);
  }
};
