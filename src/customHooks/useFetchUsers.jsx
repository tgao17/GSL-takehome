import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { GLOBALContext } from '../globalStateContext';

export const useFetchUsers = () => {
  const { state, dispatch } = useContext(GLOBALContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
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

    setIsLoading(false);
    dispatch({ type: 'SET_USER_LIST', payload: result });
    console.log('Fetch Complete!', state.userList);
  };

  return isLoading;
};
