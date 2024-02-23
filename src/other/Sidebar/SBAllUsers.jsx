import { UserCard } from '../UserCard';
import { useContext } from 'react';
import { GLOBALContext } from '../../globalStateContext';

export const SBAllUsers = () => {
  const { state } = useContext(GLOBALContext);

  return (
    <div className='scrollUsers'>
      {state.userList.map((_, index) => {
        return <UserCard key={`usercard_${index}`} index={index} />;
      })}
    </div>
  );
};
