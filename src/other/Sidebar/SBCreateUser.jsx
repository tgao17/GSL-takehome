import { useContext, useState } from 'react';
import { GLOBALContext } from '../../globalStateContext';
import UsernameInput from '../usernameInput';
import { Button } from '@mui/material';
import { useFetchUsers } from '../../customHooks/useFetchUsers';

export const putUser = async user => {
  // create user
  if (user.length < 6) {
    alert('UserName must be over length 6');
  }
  const response = await fetch('https://gl-interview.azurewebsites.net/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: user }),
  });
  if (response.ok) {
    alert('Success!');
  }
};

export const SBCreateUser = () => {
  const { state, dispatch } = useContext(GLOBALContext);
  const [userName, setUserName] = useState('');

  const handleSubmit = async () => {
    putUser(userName);
    setUserName('');
    reFetch();
    // alert('Success!');
  };

  const reFetch = async () => {
    let fetchedUsers = [];
    let offset = 0;
    let hasMoreData = true;
    console.log('Fetching Users...');
    while (hasMoreData) {
      const url = new URL('https://gl-interview.azurewebsites.net/users');
      url.searchParams.append('offset', offset);
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          // loop through 100 at a time for the api
          fetchedUsers.push(...data);
          if (data.length < 100) {
            hasMoreData = false;
          } else {
            offset += 100;
          }
        } else {
          // set incorrect here
        }
      } catch (err) {
        console.error('Error in Fetching Users');
        hasMoreData = false;
      }
    }

    let result = fetchedUsers
      .sort((a, b) => a.username.localeCompare(b.username))
      .filter(
        user =>
          typeof user.username[0] == 'string' &&
          /^[A-Za-z]/.test(user.username),
      );

    // add new required fields in fetched user
    dispatch({ type: 'SET_USER_LIST', payload: result });
    console.log('Fetch Complete!', state.userList);
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
