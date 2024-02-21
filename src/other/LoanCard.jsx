import { useContext } from 'react';
import { GLOBALContext } from '../globalStateContext';

export const LoanCard = ({ loanObject, isForeign }) => {
  const { state } = useContext(GLOBALContext);

  return (
    <div className='LoanCard'>
      <div>Amount: {loanObject.amount}</div>
      <div>Apr: {loanObject.apr}</div>
      <div>Term: {loanObject.term}</div>
      <div>Status: '{loanObject.status}'</div>
      {isForeign ? (
        <div>Loan Owner: '{state.userList[loanObject.owner_id].username}'</div>
      ) : null}
    </div>
  );
};
