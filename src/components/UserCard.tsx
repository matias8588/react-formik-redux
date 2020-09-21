/* eslint-disable camelcase */
import React from 'react';

interface Props {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const UserCard = (props: Props) => {
  const { id, email, first_name, last_name, avatar } = props;
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4 border-solid border-2 border-gray-600">
      <img className="w-full h-56 object-cover object-center" src={avatar} alt="avatar" />
      <div className="flex items-center px-6 py-3 bg-gray-900">
        <h1 className="mx-3 text-white font-semibold text-lg">{`Employee number ${id}`}</h1>
      </div>
      <div className="py-4 px-6">
        <h1 className="text-2xl font-semibold text-gray-800">{`${first_name} ${last_name}`}</h1>
        <p className="py-2 text-lg text-gray-700">{email}</p>
      </div>
    </div>
  );
};

export default UserCard;
