import Types from '../constants/user.constant';

const getUsersRequest: any = (data: any) => ({
  type: Types.GET_USERS_REQUEST,
  data,
});

const getUsersSuccess: any = (data: any) => ({
  type: Types.GET_USERS_SUCCESS,
  data,
});

const loginRequest: any = (data: any) => ({
  type: Types.LOGIN_REQUEST,
  data,
});

const usersError: any = (data: any) => ({
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
