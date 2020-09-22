import Types from '../redux/constants/user.constant';

export interface IUserRequest {
  type: typeof Types.GET_USERS_REQUEST;
  data: Array<[]>;
}

export interface IUserSuccess {
  type: typeof Types.GET_USERS_SUCCESS;
  data: Array<[]>;
}

export interface ILoginRequest {
  type: typeof Types.LOGIN_REQUEST;
  data: Array<[]>;
}

export interface IUserError {
  type: typeof Types.USERS_ERROR;
  data: Array<[]>;
}
