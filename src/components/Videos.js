import React from 'react'
import {Stack, Box} from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

function Videos({videos, direction}) {

  if(!videos?.length) return 'Loading...'

  return (
    <Stack direction={ direction || "row"} flexWrap='wrap' justifyContent="start" gap={1.1}>
        {
            videos.map((item, index) => (
                <Box key={index}>
                    {item?.id?.videoId && <VideoCard video={item}/>}
                    {item?.id?.channelId && <ChannelCard channelDetail={item}/>}
                </Box>
            ))
        }
    </Stack>
  )
}

export default Videos