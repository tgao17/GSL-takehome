import { useContext } from 'react';
import { GLOBALContext } from '../globalStateContext';
import { Button } from '@mui/material';
import { SBAllUsers } from './Sidebar/SBAllUsers';
import { SBCreateUser } from './Sidebar/SBCreateUser';
import { SBCreateLoan } from './Sidebar/SBCreateLoan';

export const UserSidebar = () => {
  const { state, dispatch } = useContext(GLOBALContext);

  const refetch = () => {};

  const handleSwitchSBMode = mode => {
    console.log(state.sideBar);
    console.log(mode);
    dispatch({ type: 'SET_SIDE_BAR', payload: mode });
  };

  const sideBarComponents = {
    ALL_USERS: <SBAllUsers />,
    CREATE_USER: <SBCreateUser />,
    CREATE_LOAN: <SBCreateLoan />,
  };

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

      {sideBarComponents[state.sideBar]}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
        <Button
          variant='contained'
          color='primary'
          onClick={() => handleSwitchSBMode('CREATE_USER')}>
          Create User
        </Button>
        <Button
          variant='contained'
          color='primary'
          onClick={() => handleSwitchSBMode('CREATE_LOAN')}>
          Create Loan
        </Button>
        <Button
          variant='contained'
          color='primary'
          onClick={() => handleSwitchSBMode('ALL_USERS')}>
          All Users
        </Button>
        <Button variant='contained' color='secondary' onClick={refetch}>
          Refetch
        </Button>
      </div>
    </div>
  );
};
