import { CREATE, FETCHALLSKILLS, LOADING, END_LOADING, SET_SKILL, DELETESKILL, UPDATESKILL } from '../constants/actionTypes';
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

export const setCurrentSkill = (_id) => async (dispatch) => {
  try {
    dispatch({ type: SET_SKILL, payload: _id });
  } catch (error) {
    console.log(error);
  }
};

export const deleteSkill = (_id) => async (dispatch) => {
  try {
    const { data } = await api.deleteSkill(_id);
    dispatch({ type: DELETESKILL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateSkill = (newSkillData) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const { data } = await api.updateSkill(newSkillData);
    dispatch({ type: UPDATESKILL, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
