import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';

const UsernameInput = ({ username, handleUsername }) => {
  return (
    <TextField
      size='small'
      type='text'
      label='Username (at least 6 char long)'
      value={username}
      onChange={handleUsername}
      required={true}
      fullWidth
    />
  );
};

export default UsernameInput;
