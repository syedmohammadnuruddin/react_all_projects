import { useState } from 'react'
import {sculptureList} from './data'

export default function Gallery() {
  const [index, setIndex] = useState(0)
  const [showMore, setShowMore] = useState(false)

  const totalSculptures = sculptureList.length

  let sculpture = sculptureList[index]

  function handleClickNext(){
    setIndex((index + 1) % totalSculptures)
  }
  function handleClickPrev(){
    setIndex((index - 1 + totalSculptures) % totalSculptures)
  }
  function handleMoreClick(){
    setShowMore(!showMore)
  }

  return (
    <>
      <button onClick={handleClickPrev}>Previous</button>
      <br/>
      <button onClick={handleClickNext}>Next</button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <h3>
        ({index + 1}) of {sculptureList.length}
      </h3>
      <img src={sculpture.url} alt={sculpture.alt}/>
      <p>{sculpture.description}</p>
    </>
  )
}

