import { useContext } from 'react';
import { GLOBALContext } from '../globalStateContext';

export const LoanCard = ({ loanObject, isForeign }) => {
  const { state } = useContext(GLOBALContext);

  return (
    <div className='LoanCard'>
      <div className='LoanCard1'>
        {isForeign ? (
          <div>
            Loan Owner: '{state.userList[loanObject.owner_id].username}'
          </div>
        ) : (
          <div>Loan Owner: Self</div>
        )}
        <div>Amount: ${loanObject.amount}</div>
        <div>Apr: {loanObject.apr.toFixed(3)}%</div>
        <div>Term: {loanObject.term}</div>
        <div>Status: '{loanObject.status}'</div>
      </div>

      <div className='LoanCard2'>
        {loanObject.loanDetail === undefined ? (
          <div>loading details...</div>
        ) : (
          loanObject.loanDetail.map((term, index) => {
            return (
              <div
                className='LoanCard2_card'
                key={`${loanObject.id}_loanDetail_${index}`}>
                <div>Month: {loanObject.loanDetail[index].month}</div>
                <div>
                  Open Balance: <br />$
                  {loanObject.loanDetail[index].open_balance.toFixed(2)}
                </div>
                <div>
                  Total Payment: <br />$
                  {loanObject.loanDetail[index].total_payment.toFixed(2)}
                </div>
                <div>
                  Principal Payment: <br />$
                  {loanObject.loanDetail[index].principal_payment.toFixed(2)}
                </div>
                <div>
                  Interest Payment: <br />$
                  {loanObject.loanDetail[index].interest_payment.toFixed(2)}
                </div>
                <div>
                  Total Payment: <br />$
                  {loanObject.loanDetail[index].total_payment.toFixed(2)}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
