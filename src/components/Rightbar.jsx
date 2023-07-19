import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
 <Box bgcolor="" flex={2} p={2}
 sx={{display:{xs:"none" , sm:"block"}}}
 >
   <Box position="fixed">
<Typography>Online Frineds</Typography>
<AvatarGroup max={7}>
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup>
<Typography>
  Latest Post 
</Typography>
<ImageList cols={3} rowHeight={100} >
  <ImageListItem>
   <img src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'/>
  </ImageListItem>
  <ImageListItem>
   <img src='https://images.unsplash.com/photo-1551782450-a2132b4ba21d'/>
  </ImageListItem>
  <ImageListItem>
   <img src='https://images.unsplash.com/photo-1522770179533-24471fcdba45'/>
  </ImageListItem>
  <ImageListItem>
   <img src='https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'/>
  </ImageListItem>
  <ImageListItem>
   <img src='https://images.unsplash.com/photo-1533827432537-70133748f5c8'/>
  </ImageListItem>
  <ImageListItem>
   <img src='https://images.unsplash.com/photo-1558642452-9d2a7deb7f62'/>
  </ImageListItem>
  <ImageListItem>
   <img src='https://images.unsplash.com/photo-1516802273409-68526ee1bdd6'/>
  </ImageListItem>
  <ImageListItem>
   <img src='https://images.unsplash.com/photo-1518756131217-31eb79b20e8f'/>
  </ImageListItem>
  <ImageListItem>
   <img src='https://images.unsplash.com/photo-1518756131217-31eb79b20e8f'/>
  </ImageListItem>
  <ImageListItem>
   <img src='https://images.unsplash.com/photo-1518756131217-31eb79b20e8f'/>
  </ImageListItem>
</ImageList>
<Typography>
  Latest conversations 
</Typography>
<List sx={{ width: '100%',  bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
   </Box>
 </Box>
  )
}

export default Rightbar

