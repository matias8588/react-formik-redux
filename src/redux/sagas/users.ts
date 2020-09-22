import { takeEvery, takeLatest, call, fork, put } from 'redux-saga/effects';
import axios from 'axios';
import actions from '../actions/users.action';
import constants from '../constants/user.constant';

const errorMessage = 'Error ocurred';
function* getUsers() {
  try {
    const result = yield call(() => axios.get('https://reqres.in/api/users?page=1'));
    yield put(actions.getUsersSuccess(result.data.data));
  } catch (error) {
    yield put(actions.usersError(errorMessage));
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(constants.GET_USERS_REQUEST, getUsers);
}

function* login(action: any) {
  const { data } = action;

  try {
    yield call(() => axios.post('https://reqres.in/api/login', { email: data.email, password: data.password }));
    yield call(getUsers);
  } catch (error) {
    yield put(actions.usersError(errorMessage));
  }
}

function* watchLoginRequest() {
  yield takeLatest(constants.LOGIN_REQUEST, login);
}

const usersSagas = [fork(watchGetUsersRequest), fork(watchLoginRequest)];

export default usersSagas;
