import {
  API_ERROR,
  GET_USER_GIT_REPO_DATA,
  GET_USER_GIT_REPO_DATA_SUCCESS
} from './actionTypes';

//initial state
const initialState = {
  loading: false,
  error: undefined,
  data: []
};

const Git = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case GET_USER_GIT_REPO_DATA:
      return { ...state, loading: true, error:undefined };

    case GET_USER_GIT_REPO_DATA_SUCCESS:
      return { ...state, loading: false, data: payload, error:undefined };

    case API_ERROR:
      return {...state, error: payload}
    default:
      return state;
  }
};

export default Git;
