import { useState } from 'react';
import { Button } from '@mui/material';
const Auth = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

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

      <Button variant='contained' color='primary' onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};
export default Auth;
