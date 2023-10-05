import React from 'react'
import { FaPlus } from 'react-icons/fa';
import "./additem.css"

//export const AddItem = ({ newItem, setNewItems, handleSubmit }) => {

const AddItem = ({newItem, setNewItems, handleSubmit}) => {
  return (
    
    <form className='addForm' onSubmit={handleSubmit}>

        <label htmlFor='addItem'> Add Item </label>

        <input 
            autoFocus
            id='addItem'
            type="text"
            placeholder='Add Item'
            required
            value = {newItem}
            onChange={(e) => setNewItems(e.target.value)}
        />

        <button
            type='submit'
            aria-label='Add Item'
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItem
