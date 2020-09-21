/* eslint-disable camelcase */

export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IAction {
  data: any;
  type: string;
  error: string;
}
