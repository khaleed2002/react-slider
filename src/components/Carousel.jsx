import { useState } from 'react'
import { shortList, list, longList } from '../data.js'
import { FaQuoteRight, FaAngleRight, FaAngleLeft } from 'react-icons/fa'

const Carousel = () => {
  const [data] = useState(list)
  const [curruntIndex, setCurruntIndex] = useState(0)
  const handlePrev = () => {
    setCurruntIndex((curruntIndex) => {
      if (curruntIndex === 0) {
        return data.length - 1
      }
      return curruntIndex - 1
    })
  }
  const handleNext = () => {
    setCurruntIndex((curruntIndex) => {
      if (curruntIndex === data.length - 1) {
        return 0
      }
      return curruntIndex + 1
    })
  }
  return (
    <section className="section">
      {data.map((person, index) => {
        let number = 0
        if (curruntIndex > index) {
          number = -100
        } else if (curruntIndex < index) {
          number = 100
        }
        const translateX = `translateX(${
          Math.abs(curruntIndex - index) * number
        }%)`
        return (
          <article
            key={person.id}
            style={{
              transform: translateX,
              opacity: index === curruntIndex ? `1` : `0`,
            }}
          >
            <img src={person.image} alt={person.name} className="person-img" />
            <h5>{person.name}</h5>
            <p className="title">{person.title}</p>
            <p className="text">{person.quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        )
      })}
      <button className="prev" onClick={handlePrev}>
        <FaAngleLeft />
      </button>
      <button className="next" onClick={handleNext}>
        <FaAngleRight />
      </button>
    </section>
  )
}
export default Carousel
