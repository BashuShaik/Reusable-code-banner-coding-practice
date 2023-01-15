// Write your code here.

import './index.css'

const Banner = props => {
  const {card} = props
  const {headerText, description, className} = card

  return (
    <li className={`card ${className}`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default Banner
