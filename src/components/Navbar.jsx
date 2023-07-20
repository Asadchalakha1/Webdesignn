import styled from '@emotion/styled'
import { AppBar, Avatar, Badge,  InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import {Mail, Notifications, Pets} from '@mui/icons-material';

const StyledToolBar = styled(Toolbar)({
  display:"flex",

  justifyContent:"space-between"
})

const Search = styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius: "10px",
  width:"40%"
}))
const Icons = styled("Box")(({theme})=>({
 display:"flex",gap:"20px",alignItems:"center"
}))



const Navbar = () => {
  const [open,setOpen]=useState(false)
  return (
  <AppBar position="sticky">
 <StyledToolBar>
  <Typography variant='h6'
   sx={{display:{xs:"none",sm:"block"}}}
  
  >Asad chalakha</Typography>
  <Pets sx={{display:{xs:'block',sm:"none"}}}/>
  <Search><InputBase placeholder='search...'/></Search>
  <Icons>
  <Badge badgeContent={4}color="error" >
  <Mail  />
</Badge>
  <Badge badgeContent={2} color="error">
  <Notifications  />
</Badge>
<Avatar sx={{width:30,height:30}}
onClick={e=>setOpen(true)}
/>
  </Icons>

 </StyledToolBar>
 <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
      
        open={open}
     onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
  </AppBar>
  )
}

export default Navbar
