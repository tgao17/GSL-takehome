import { useState } from 'react';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import PasswordInput from '../other/passwordInput';

const Auth = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  // const [showPassword, setShowPassword] = useState(false);

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
      const data = response.json();
      if (response.ok) {
        // my custom action here
        console.log('submmited login info');
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
  const handleSubmit = async () => {
    if (userName.length >= 6) {
      handleCreateUserPOST();
      setUserName('');
      console.log('submitted');
      // notification
    } else {
      console.log('Too short');
      setUserName('');
      setPassword('');
      // notification
    }
  };

  return (
    <div className='masterStyle'>
      <div>login</div>
      <h3>name:</h3>
      <input
        className='input'
        value={userName}
        onChange={e => setUserName(e.target.value)}
      />
      <h3>password:</h3>
      <input
        className='input'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <PasswordInput
        password={password}
        handlePassword={e => setPassword(e.target.value)}
      />

      <Button variant='contained' color='primary' onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};
export default Auth;
