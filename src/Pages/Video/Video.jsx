import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommmended from '../../Components/Recommended/Recommmended'

const Video = () => {
  return (
    <div className='play-container'>
      <PlayVideo/>
      <Recommmended/>
      
    </div>
  )
}

export default Video
