import React from 'react'
import {Box, CardContent, CardMedia, Typography, Card} from '@mui/material'
import {CheckCircle} from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoProfilePicture } from '../Util/Constants'
// import {demoProfilePicture} from '../Util/Constants'

function ChannelCard({channelDetail, marginTop}) {
    console.log(channelDetail)
  return (
    <Box sx={{ boxShadow:'none', borderRadius:'20px', display:'flex',justifyContent:'center',alignItems:'center',width:{xs:'356px', md:'320px'}, height:'326px', margin:'auto',marginTop:marginTop}}>
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', color:'#fff', alignItems:'center', mt:5}}>
                <CardMedia image={(channelDetail?.snippet) ? channelDetail?.snippet?.thumbnails?.high?.url : 'https://www.indianhorizons.net/assets/lib/images/default.png'} alt={channelDetail?.snippet?.title}
                    sx={{width : '180px', height: '180px', borderRadius:'50%'}}
                />
                <Typography variant='h6' textAlign='center'>
                    {channelDetail?.snippet?.title}
                    <CheckCircle sx={{fontSize:14, color:'gray',ml:'5px'}} />
                </Typography>
                {channelDetail?.statistics?.subscriberCount && (
                    <Typography>
                        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString() || 0} Subscribers
                    </Typography>
                )}
            </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard