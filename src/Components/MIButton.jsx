import React from 'react'
import Button from '@mui/material/Button';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
function MIButton() {
  return (
    <div>
      <div style={{margin:"15px"}}><Button variant='outlined'>Daxil olun</Button>
      <Button variant='contained'>Daxil olun</Button>
      <Button variant='text'>Daxil olun</Button></div>
      <div style={{margin:"15px"}}>
        <Button variant='contained'color='success' >Cixis edin</Button>
        <Button variant='contained'color='secondary'>Cixis edin</Button>
        <Button variant='contained'color='error'>Cixis edin</Button>
      </div>
      <div style={{margin:"15px"}}>
        <Button variant='contained' size='small' color='success'>Qebul edildi</Button>
        <Button variant='contained' size='medium' color='secondary'> Qebul edildi</Button>
        <Button variant='contained' size='large' color='error'>Qebul edildi</Button>
      </div>
      <div>
        <Button endIcon={<AddPhotoAlternateIcon/>}>Arttir</Button>
        <Button endIcon={<RemoveCircleOutlineIcon/>}>Alazt</Button>
      </div>

    </div>
  )
}

export default MIButton
