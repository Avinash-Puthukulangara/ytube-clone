import React from 'react'
import './Video.css'
import Playvideo from '../../Components/Playvideo/Playvideo'
import Recommended from '../../Components/Recommended/Recommended'

function Video() {
  return (
    <div className='play-container'>
      <Playvideo /> 
      <Recommended />
    </div>
  )
}

export default Video