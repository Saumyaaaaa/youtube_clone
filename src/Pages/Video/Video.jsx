import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommmended from '../../Components/Recommended/Recommmended'
import { useParams } from 'react-router-dom';

const Video = () => {
  const{videoId,categoryId}=useParams()
  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId}/>
      <Recommmended/>
      
    </div>
  )
}

export default Video
