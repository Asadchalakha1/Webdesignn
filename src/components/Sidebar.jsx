import { Group, Home, ModeNight, Pages, PeopleAlt, Portrait, Settings, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
const Sidebar = () => {
  return (
   <Box p={2} flex={1} bgcolor="yellow"
   sx={{display:{xs:"none" , sm:"block"}}}>
    <Box position="fixed">
        <List>
  
          <ListItem disablePadding>
            <ListItemButton component ="a" href='#home'>
              <ListItemIcon>
        <Home/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component ="a" href='#simple-list'>
              <ListItemIcon>
        <Pages/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component ="a" href='#simple-list'>
              <ListItemIcon>
        <Group/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component ="a" href='#simple-list'>
              <ListItemIcon>
        <Storefront/>
              </ListItemIcon>
              <ListItemText primary="MArketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component ="a" href='#simple-list'>
              <ListItemIcon>
        <PeopleAlt/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component ="a" href='#home'>
              <ListItemIcon>
       <Settings/>
                     </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component ="a" href='#home'>
              <ListItemIcon>
       <Portrait/>
                     </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component ="a" href='#simple-list'>
              <ListItemIcon>
       <ModeNight/>
                     </ListItemIcon>
              <Switch/>
            </ListItemButton>
          </ListItem>
  </List>
   </Box>
   </Box>

  )
}

export default Sidebar
