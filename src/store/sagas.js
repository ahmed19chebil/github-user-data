import { all } from 'redux-saga/effects';

//import sagas
import gitSaga from './git/saga';

export default function* rootSaga() {
  yield all([gitSaga()]);
}
