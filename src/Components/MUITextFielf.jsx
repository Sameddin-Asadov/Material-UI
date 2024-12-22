import React from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

function MUITextFielf() {
  return (
    <div>
      <TextField label='Outlined' variant='outlined'/>
      <TextField label='Outlined' variant='filled'/>
      <TextField  multiline maxRows={5} label='Best' variant='standard'/>

      <TextField slotProps={{
        input: {
            startAdornment: <InputAdornment>Kq</InputAdornment>
        }
       } }
      />
    </div>
  )
}

export default MUITextFielf

