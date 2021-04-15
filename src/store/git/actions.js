import {
  API_ERROR,
  GET_USER_GIT_REPO_DATA,
  GET_USER_GIT_REPO_DATA_SUCCESS
} from './actionTypes';


export const getUserGitRepData = (userName) => ({
  type: GET_USER_GIT_REPO_DATA,
  payload: userName
});

export const getUserGitRepDataSuccess = (data) => ({
  type: GET_USER_GIT_REPO_DATA_SUCCESS,
  payload: data
});

export const apiError = (data) => ({
  type: API_ERROR,
  payload: data
});