import { useContext, useState } from 'react';
import { GLOBALContext } from '../../globalStateContext';
import GeneralInput from '../Input';
import DropdownExample from './Choices';

import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

export const SBCreateLoan = () => {
  const { state } = useContext(GLOBALContext);
  const [userName, setUserName] = useState('');
  const [amount, setAmount] = useState('');
  const [APR, setAPR] = useState('');
  const [status, setStatus] = useState('');

  const handleStatus = event => {
    setStatus(event.target.value);
  };

  const handleSubmit = () => {
    //submit
  };
  return (
    <div className='sbForm'>
      <div>Create Loan</div>
      <GeneralInput
        value={userName}
        action={e => setUserName(e.target.value)}
        label={'USER ID'}
      />

      <GeneralInput
        value={amount}
        action={e => setAmount(e.target.value)}
        label={'AMOUNT ($)'}
      />

      <GeneralInput
        value={APR}
        action={e => setAPR(e.target.value)}
        label={'APR (%)'}
      />

      <FormControl fullWidth>
        <InputLabel>Status</InputLabel>
        <Select value={status} label='Status' onChange={handleStatus}>
          <MenuItem value={1}>active</MenuItem>
          <MenuItem value={2}>inactive</MenuItem>
        </Select>
      </FormControl>

      <Button variant='contained' color='primary' onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};
