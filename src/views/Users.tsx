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
  return (
    <div className="h-full flex flex-wrap justify-center sm:w-full md:w-full lg:w-4/5 xl:w-4/5">
      {users.map((user) => (
        <div className="sm:w-full md:w-full lg:w-2/5 xl:w-2/5 m-3 rounded shadow-lg overflow-hidden">
          <UserCard {...user} />
        </div>
      ))}
    </div>
  );
};

export default Users;
