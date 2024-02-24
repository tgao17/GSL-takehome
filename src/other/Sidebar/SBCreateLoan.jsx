import { useContext, useState } from 'react';
import { GLOBALContext } from '../../globalStateContext';
import GeneralInput from '../Input';

import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

export const SBCreateLoan = () => {
  const { state } = useContext(GLOBALContext);
  const [owner_id, setOwner_id] = useState('');
  const [amount, setAmount] = useState('');
  const [APR, setAPR] = useState('');
  const [term, setTerm] = useState('');
  const [status, setStatus] = useState('');

  const handleStatus = event => {
    setStatus(event.target.value);
  };

  const createLoan = async () => {
    try {
      const response = await fetch(
        'https://gl-interview.azurewebsites.net/loans',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: amount,
            apr: APR,
            term: term,
            status: status,
            owner_id: owner_id,
          }),
        },
      );
      if (response.ok) {
        //update loanobject of this person
      }
    } catch (err) {
      alert(err);
    }
  };

  const handleSubmit = () => {
    //check if the fields are ok
    if (
      !(typeof amount == 'number' || Number.isInteger(amount)) ||
      typeof apr != 'number' ||
      !Number.isInteger(term) ||
      typeof owner_id != 'string'
    ) {
      alert('Bad Fields, please revise');
    }
    //create loan
    createLoan();
  };

  return (
    <div className='sbForm'>
      <div>Create Loan</div>
      <GeneralInput
        value={owner_id}
        action={e => setOwner_id(e.target.value)}
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

      <GeneralInput
        value={term}
        action={e => setTerm(e.target.value)}
        label={'TERM (mo)'}
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
