/* eslint-disable camelcase */
import React from 'react';
import { IUser } from '../models/User';

const UserCard: React.FC<IUser> = ({ id, email, first_name, last_name, avatar }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-user border-solid border border-gray-600">
      <img className="object-cover h-48 w-full" src={avatar} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{`${first_name} ${last_name}`}</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{id}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{email}</span>
      </div>
    </div>
  );
};

export default UserCard;
