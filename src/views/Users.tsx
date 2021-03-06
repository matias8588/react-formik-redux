/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
import React from 'react';
import { useSelector } from 'react-redux';
import UserCard from '../components/UserCard';

interface RootState {
  users: {
    list: Array<{
      id: number;
      email: string;
      first_name: string;
      last_name: string;
      avatar: string;
    }>;
  };
}
const Users: React.FC = () => {
  const selectUsers = (state: RootState) => state.users.list;

  const users = useSelector(selectUsers);
  console.log(users);
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {users.map((user) => (
            <div key={user.id} className="my-1 px-1 py-2 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <UserCard {...user} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
