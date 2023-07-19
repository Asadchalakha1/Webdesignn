import { Favorite, FavoriteBorder, MoreVert } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'

const Post = () => {
  return (
    <Card sx={{margin:5}}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "red"}} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
         <MoreVert/>
        </IconButton>
      }
      title="Asad chalakha"
      subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="20%"
    src='https://images.unsplash.com/photo-1597645587822-e99fa5d45d25'
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"purpel"}} />} />
      </IconButton>
      <IconButton aria-label="share">
     
      </IconButton>
   
    </CardActions>
  
  </Card>
  )
}

export default Post
