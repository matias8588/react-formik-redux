import { all, StrictEffect } from 'redux-saga/effects';
import userSagas from './users';

export default function* rootSaga(): Generator<StrictEffect> {
  yield all([...userSagas]);
}
