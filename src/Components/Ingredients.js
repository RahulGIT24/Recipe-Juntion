import React from 'react'

function Ingredients(props) {
  return (
    <div>
      {props.ing.map((element,index)=>{
        return <li className='text-white text-lg' key={index}>{element.text}</li>
      })}
    </div>
  )
}

export default Ingredients
