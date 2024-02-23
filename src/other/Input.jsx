import { TextField } from '@mui/material';

const GeneralInput = ({ value, action, label }) => {
  return (
    <TextField
      size='small'
      type='text'
      label={label}
      value={value}
      onChange={action}
      required={true}
      fullWidth
    />
  );
};

export default GeneralInput;
