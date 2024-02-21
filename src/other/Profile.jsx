import { useContext, useEffect } from 'react';
import { GLOBALContext } from '../globalStateContext';
import { LoanCard } from './LoanCard';

export const Profile = () => {
  const { state, dispatch } = useContext(GLOBALContext);

  const userID = state.userID;

  if (userID === null) {
    return (
      <div className='Profile'>
        <div>Pick a user to show Profile</div>
      </div>
    ); // initial state
  } else if (state.userList[userID]['Loans'] === undefined) {
    return (
      <div className='Profile'>
        <div>PULLING UP USER INFO...</div>
      </div>
    );
  } else {
    return (
      <div className='Profile'>
        <div>Now showing Profile ID: {userID}</div>
        <h4>Loans Self:</h4>
        {state.userList[userID]['Loans']
          .filter(loan => loan.owner_id === userID)
          .map((loan, index) => {
            return (
              <LoanCard
                key={`key='loanCardSelf_${userID}_${index}`}
                loanObject={loan}
                isForeign={false}
              />
            );
          })}
        <h4>Loans Linked:</h4>
        {state.userList[userID]['Loans']
          .filter(loan => loan.owner_id !== userID)
          .map((loan, index) => {
            return (
              <LoanCard
                key={`key='loanCardSelf_${userID}_${index}`}
                loanObject={loan}
                isForeign={true}
              />
            );
          })}
      </div>
    );
  }
};
