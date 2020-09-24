import Types from '../constants/user.constant';
import { IState } from '../../models/User';

const INITIAL_STATE: IState = {
  list: [],
  error: '',
};

const users = (state = INITIAL_STATE, action: any): IState => {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS: {
      return {
        ...state,
        list: action.data,
      };
    }
    case Types.USERS_ERROR: {
      return {
        ...state,
        error: action.data.error,
      };
    }
    default: {
      return state;
    }
  }
};

export default users;
