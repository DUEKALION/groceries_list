import React from 'react'
import { FaTrash } from 'react-icons/fa'

const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    <li className="item" key={item.id}>
    <input 
        type="checkbox"
        checked={item.checked}
        onChange={() => handleCheck(item.id)}
    />
    <label
        style={(item.checked) ? {textDecoration: 'line-through'} : null}
        onDoubleClick={() => handleCheck(item.id)}
    >{item.item}</label>
    <FaTrash
        onClick={() => handleDelete(item.id)} 
        role="button"
        tabIndex="0"
        aria-label="Delete"
    />
</li>
  )
}

export default LineItem