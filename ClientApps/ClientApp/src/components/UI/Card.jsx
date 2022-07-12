import React from 'react'

const Card = (props) => {
  return (
    <div id={props.id} className={`bg-light ${props.className}`}>
        {props.children}
    </div>
  )
}

export default Card