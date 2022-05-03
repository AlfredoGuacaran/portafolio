import { CREATE_PROJECT, FETCHALLPROJECTS, LOADING_PROJECTS, END_LOADING_PROJECTS, SET_PROJECT, DELETE_PROJECT } from '../constants/actionTypes';
import * as api from '../api';

export const createProject = (project) => async (dispatch) => {
  try {
    dispatch({ type: LOADING_PROJECTS });
    const { data } = await api.createProject(project);
    dispatch({ type: CREATE_PROJECT, payload: data });
    dispatch({ type: END_LOADING_PROJECTS });
  } catch (error) {
    console.log(error);
  }
};

export const getProjects = () => async (dispatch) => {
  try {
    const { data } = await api.getProjects();
    dispatch({ type: FETCHALLPROJECTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const setCurrentProject = (_id) => async (dispatch) => {
  try {
    dispatch({ type: SET_PROJECT, payload: _id });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProject = (_id) => async (dispatch) => {
  try {
    const { data } = await api.deleteProject(_id);
    dispatch({ type: DELETE_PROJECT, payload: data });
  } catch (error) {
    console.log(error);
  }
};
