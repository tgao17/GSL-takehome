import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function DropdownExample() {
  const [choice, setChoice] = useState('');

  const handleChange = event => {
    setChoice(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Choice</InputLabel>
      <Select value={choice} label='Choice' onChange={handleChange}>
        <MenuItem value={1}>Option 1</MenuItem>
        <MenuItem value={2}>Option 2</MenuItem>
      </Select>
    </FormControl>
  );
}

export default DropdownExample;
