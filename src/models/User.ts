/* eslint-disable camelcase */
export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
export interface IState {
  list: Array<[]>;
  error: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IAction {
  data: {
    error: string;
    list: Array<[]>;
  };
  type: string;
}
