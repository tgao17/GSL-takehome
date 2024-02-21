import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { GLOBALContext } from '../globalStateContext';
import { UserCard } from './UserCard';
import { Button } from '@mui/material';

export const UserSidebar = () => {
  const { state, dispatch } = useContext(GLOBALContext);

  return (
    <div className='scrollBar'>
      <div>Welcome User</div>
      <div>
        <div>Displaying:</div>
        {state.userID === null ? (
          <h4>Pick someone</h4>
        ) : (
          <h4>{state.userList[state.userID].username}</h4>
        )}
      </div>
      <div className='scrollUsers'>
        {state.userList.map((user, index) => {
          return <UserCard key={`usercard_${index}`} index={index} />;
        })}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Button variant='contained' color='primary'>
          Create User
        </Button>
        <Button variant='contained' color='primary'>
          Create Loan
        </Button>
        <Button variant='contained' color='primary'>
          All Users
        </Button>
      </div>
    </div>
  );
};
