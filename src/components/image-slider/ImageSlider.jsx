import React, { useEffect, useState } from 'react'
import './imageslider.css';

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [currIdx, setCurrIdx] = useState(0);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const res = await fetch("https://picsum.photos/v2/list?limit=10");
    const data = await res.json();
    setImages(data);
  }

  if (!images) return;

  const handleNext = () => {
    setCurrIdx(currIdx == images.length - 1 ? 0 : currIdx + 1);
  }
  const handlePrev = () => {
    setCurrIdx(currIdx == 0 ? images.length - 1 : currIdx - 1);
  }

  return (
    <>
      <div className='slide-container'>
        <div className='arrow arrow-left'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6  " onClick={handlePrev}>
            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
          </svg>
        </div>
        {images.map((p, index) => {
          return (
            <div key={p.id}>
              <img src={p.download_url} alt={p.author} width={250} height={250} className={currIdx === index ? "current-image"
                : "current-image hide-current-image"} />
            </div>
          )
        })}
        <div className='arrow arrow-right'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 arrow arrow-right" onClick={handleNext}>
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
          </svg>
        </div>
        <span className="circle-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={
                currIdx === index
                  ? "current-indicator"
                  : "current-indicator inactive-indicator"
              }
              onClick={() => setCurrIdx(index)}
            ></button>
          ))
          }
        </span>
      </div>
    </>
  )
}

export default ImageSlider;