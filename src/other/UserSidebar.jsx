import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { GLOBALContext } from '../globalStateContext';
import { UserCard } from './UserCard';

export const UserSidebar = () => {
  const { state, dispatch } = useContext(GLOBALContext);

  return (
    <div className='scrollBar'>
      <div>Welcome User</div>
      <div>
        <div>Create User</div>
        <div>Create Loan</div>
        <div>All Users</div>
      </div>
      <div className='scrollUsers'>
        {state.userList.map((user, index) => {
          return <UserCard key={`usercard_${index}`} index={index} />;
        })}
      </div>
    </div>
  );
};
