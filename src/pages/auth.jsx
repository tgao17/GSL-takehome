import { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useNavHome } from '../other/navigateHome';

import PasswordInput from '../other/passwordInput';
import UsernameInput from '../other/usernameInput';

/**
 *
 * @returns React for Sign Up
 */

export const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { navigateHome } = useNavHome();

  const handleCreateUserPOST = async () => {
    try {
      const response = await fetch(
        'https://gl-interview.azurewebsites.net/users',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: userName }),
        },
      );
      console.log(response);
      if (response.ok) {
        // my custom action here
        console.log('submmited login info');
        return true;
      } else {
        // set CONFLICT USER NAME
        return false;
      }
    } catch (err) {
      console.error('Error in frontend Login');
      return false;
    }
  };

  /**
   * For handling submittion of my buttons
   */
  const handleSubmit = async () => {
    if (userName.length >= 6 && /^[A-Za-z]/.test(userName)) {
      let res = await handleCreateUserPOST();
      setUserName('');
      console.log('submitted');

      if (res) {
        console.log('going home');
        navigateHome();
      }
      // notification
    } else {
      console.log('Too short');
      setUserName('');
      setPassword('');
      // notification
    }
  };

  return (
    <div className='masterStyle' style={{ transform: 'translateY(50%)' }}>
      <div className='rem35'>
        <div>SIGN UP</div>
        <h3>New User Sign Up Here</h3>

        <UsernameInput
          username={userName}
          handleUsername={e => setUserName(e.target.value)}
        />
        <PasswordInput
          password={password}
          handlePassword={e => setPassword(e.target.value)}
        />

        <Button variant='contained' color='primary' onClick={handleSubmit}>
          Submit
        </Button>
        <div>
          Username must be at least 6 characters long and first letter MUST be
          alphabetical. For simplicity, the password can be whatever.
        </div>
      </div>
    </div>
  );
};

/**
 *
 * @returns React for Log in
 */
export const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { navigateHome } = useNavHome();

  const handleGetUser = async () => {
    const url = new URL('https://gl-interview.azurewebsites.net/users');
    // url.searchParams.append('offset', 11);

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({ username: userName }),
      });
      // console.log(response);
      // const totalCountHeader = response.headers.get('X-Total-Count');
      // console.log(totalCountHeader);
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        // my custom action here
        console.log('Got user data');
      } else {
        // set incorrect here
      }
    } catch (err) {
      console.error('Error in frontend Login');
    }
  };

  /**
   * For handling submittion of my buttons
   */
  const handleLogin = async () => {
    // handleGetUser();
    navigateHome();
  };

  return (
    <div className='masterStyle' style={{ transform: 'translateY(50%)' }}>
      <div className='rem35'>
        <div>Login</div>
        <h3>Enter Login Info</h3>
        <UsernameInput
          username={userName}
          handleUsername={e => setUserName(e.target.value)}
        />
        <PasswordInput
          password={password}
          handlePassword={e => setPassword(e.target.value)}
        />
        <Button variant='contained' color='primary' onClick={handleLogin}>
          Submit
        </Button>
        <div>
          Feel free to just hit submit here to continue to home, since we are
          not authenticating with backend for the frontend portion of the
          exercise*
        </div>
      </div>
    </div>
  );
};
