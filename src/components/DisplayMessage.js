import React from 'react'
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter'

const DisplayMessage = ({ message }) => {
  const capitalMessage = capitalizeFirstLetter(message)
  return (
    <div className='error-message'>
      {capitalMessage}
    </div>
  )
}

export default DisplayMessage
