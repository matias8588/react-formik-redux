import Types from '../constants/user.constant';
import { IUserRequest, ILoginRequest, IUserError, IUserSuccess } from '../../models/Redux';
import { ILogin } from '../../models/User';

const getUsersRequest = (data: Array<[]>): IUserRequest => ({
  type: Types.GET_USERS_REQUEST,
  data,
});

const getUsersSuccess = (data: Array<[]>): IUserSuccess => ({
  type: Types.GET_USERS_SUCCESS,
  data,
});

const loginRequest = (data: ILogin): ILoginRequest => ({
  type: Types.LOGIN_REQUEST,
  data,
});

const usersError = (data: string): IUserError => ({
  type: Types.USERS_ERROR,
  data,
});

export const usersActions = {
  getUsersRequest,
  usersError,
  getUsersSuccess,
  loginRequest,
};

export default usersActions;
