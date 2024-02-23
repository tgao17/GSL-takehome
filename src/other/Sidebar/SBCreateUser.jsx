import { useContext, useState } from 'react';
import { GLOBALContext } from '../../globalStateContext';
import UsernameInput from '../usernameInput';
import { Button } from '@mui/material';

export const SBCreateUser = () => {
  const { state } = useContext(GLOBALContext);
  const [userName, setUserName] = useState('');

  const handleSubmit = () => {
    // create user
  };

  return (
    <div className='sbForm'>
      <div>New User</div>
      <UsernameInput
        username={userName}
        handleUsername={e => setUserName(e.target.value)}
      />
      <Button variant='contained' color='primary' onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};
