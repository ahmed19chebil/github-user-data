import { takeEvery, fork, put, all, call } from 'redux-saga/effects';
import { get} from '../../helpers/apiMethods';
import { getUserGitRepDataSuccess, apiError } from './actions';
import { GET_USER_GIT_REPO_DATA } from './actionTypes';

//route
const route = '';

function* getUserGitRepData({ payload }) {
  try {
    //get response
    let response = yield call(get, `${route}${payload}/repos`);
    //yield response if success
    yield put(getUserGitRepDataSuccess(response.data));
  } catch (error) {
    //yield api errors
    yield put(apiError(error));
    console.error(error);
  }
}

export function* watchGetUserGitRepData() {
  yield takeEvery(GET_USER_GIT_REPO_DATA, getUserGitRepData);
}


function* gitSaga() {
  yield all([
    fork(watchGetUserGitRepData),
  ]);
}

export default gitSaga;