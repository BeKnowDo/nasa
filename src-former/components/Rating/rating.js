import React from 'react'

const Rating = props => {
  const rating = props.initialRating || 'unknown'
  return (
    <div>
      Rating: {rating}
    </div>
  )
}

export default Rating
