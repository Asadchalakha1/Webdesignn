import { Avatar, Box, Button, ButtonGroup, Fab,  Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Add as AddIcon, DateRange, Image,  PersonAdd, RocketLaunch, VideoCameraBack } from '@mui/icons-material'
import { styled } from '@mui/material'


const StyleModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})
const UserBox = styled(Boolean)({
    display:"flex",
    alignItems:"center",
   gap:"10px",
   marginBottom:"20px"
})

const Add = () => {
    const [open,setOpen]=useState(false)
  return (
 <>
 <Tooltip onClick={e=>setOpen(true)}  sx={{position:"fixed",bottom:20,left:{xs:"calc(50%-25px)",md:"30"}}}>
 <Fab color='primary' aria-label='add'> 
<AddIcon/>
 </Fab>
 </Tooltip>
 <StyleModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
 <Typography variant='h6' color="gray" textAlign="center">
create post 
 </Typography>
 <Avatar sx={{width:30,height:30}}/>
<Typography>
    Asad chalakha
</Typography>
 <UserBox>

 <Avatar sx={{width:30,height:30}}/>
<Typography>
    Asad chalakha
</Typography>
 </UserBox>
 <TextField
          id="standard-multiline-static"
        sx={{width:"100%"}}
          multiline
          rows={3}
          placeholder='what do you wanna post '
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
            <RocketLaunch color='secondary'/>
            <VideoCameraBack color='primary'/>
            <PersonAdd color='success'/>
            <Image color='error'/>
            
        </Stack>
        <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
  <Button>Post</Button>
  <Button sx={{width:"100px"}}> <DateRange/></Button>
 
</ButtonGroup>
  </Box>
</StyleModal>
 
 </>
  )
}

export default Add
