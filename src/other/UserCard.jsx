import { useContext, useState } from 'react';
import { GLOBALContext } from '../globalStateContext';
import userPicture from '../../images/icons8-male-user-48.png';

export const UserCard = ({ index }) => {
  const [selected, setSelected] = useState(false);
  const { state, dispatch } = useContext(GLOBALContext);
  const user = state.userList[index];

  const handleOnClick = () => {
    dispatch({ type: 'SET_USER_ID', payload: index });

    setSelected(true);
    fetchUserLoan();
    console.log(state);
    console.log(index);
    return;
  };

  const fetchLoanByID = async loanId => {
    try {
      const response = await fetch(
        `https://gl-interview.azurewebsites.net/loans/${loanId}?user_id=${index}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.ok) {
        const data = await response.json();
        console.log('UserCard: fetchbyLoanID: ', data);
        return data;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUserLoan = async () => {
    try {
      const response = await fetch(
        `https://gl-interview.azurewebsites.net/users/${index}/loans`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.ok) {
        const data = await response.json();

        //Create a copy
        const newUserList = [...state.userList];
        newUserList[index]['Loans'] = data;
        let loanList = newUserList[index]['Loans'];

        // // ADD NEW ASYNC CALL HERE FOR RETRIEVING LOANS!
        for (let i = 0; i < loanList.length; i++) {
          let loanID = loanList[i].id;
          let loanDetail = await fetchLoanByID(loanID); // returns a promise
          console.log('UserCard: fetchUserLoan: ', loanDetail);
          loanList[i].loanDetail = loanDetail;
        }

        dispatch({ type: 'SET_USER_LIST', payload: newUserList });
        console.log(
          'userCard.jsx: LoanCard Array: ',
          state.userList[index]['Loans'],
        );
      } else {
        const newUserList = [...state.userList];
        newUserList[index]['Loans'] = [];
        dispatch({ type: 'SET_USER_LIST', payload: newUserList });
        console.log(`no loans found for user ${index}`);
      }
    } catch (err) {
      console.log(err);
    } finally {
      // console.log()
    }
  };

  return (
    <div
      className='UserCard'
      onClick={handleOnClick}
      style={
        selected && state.userID === index ? { backgroundColor: '#1a77e1' } : {}
      }>
      <img src={userPicture} style={{ width: '15%', height: '100%' }} />
      <div
        // style={{ fontWeight: 500 }}
        style={selected && state.userID === index ? { color: '#FFFFFF' } : {}}>
        {user.username}
      </div>
      {/* <div>id: {user.id}</div> */}
    </div>
  );
};
