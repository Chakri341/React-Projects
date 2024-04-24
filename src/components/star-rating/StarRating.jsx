import React, { useState } from 'react'
import Icon from './Icon';
import './star.css'

const StarRating = ({ starCount = 5 }) => {
  const [click, setClick] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setClick(index)
      // console.log("click", click);
  }
  
  const handleMouseHover = (index) => {
    setHover(index);
    // console.log("handleMouseHover", hover);
  }
  const handleMouseLeave = (index) => {
    setClick(click);
    setHover(click);
    // console.log("handleMouseLeave", click);
  }


  return (
    <>
    <div className='heading '>
      <h1>Star Rating</h1>
    </div>
    <div className='star-container' >
      {[...Array(starCount)].map((_, index) => {
        let filled = (index < click )||( index < hover);
        let color=filled ? "yellow" : "none";
        return (
          <div key={`star-${index + 1}`} className=''>
            {console.log(filled)}
            <Icon 
              color={color}
              click={() => handleClick(index + 1)}
              mouseMove={() => handleMouseHover(index + 1)}
              MouseLeave={() => handleMouseLeave(index + 1)}
              />
          </div>
        )
      })}
    </div>
      </>
  )
}

export default StarRating;