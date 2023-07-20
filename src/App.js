import React from 'react'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import { Box, Stack } from '@mui/material'
import Navbar from './components/Navbar'
import Add from './components/Add'




function App()  {

  return (
    <div>
   <Box> 
    <Navbar/>
    <Stack direction="row" spacing={2} justifyContent="space-between">
   <Sidebar/>
      <Feed/>
      <Rightbar/>
      </Stack>
      <Add/>
   </Box>
    </div>
  )
}

export default App

