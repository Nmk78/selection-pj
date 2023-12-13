'use client'

import React from 'react'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Loading = ({size}) => {
  return (
    <div className='h-[455px] w-full flex items-center justify-center'>
      <FontAwesomeIcon icon={faSpinner} color='' size={size} id='loading' className='z-50 text-teal-400' spin />
    </div>
  )
}


export default Loading