import React from 'react';
import { FaTrash } from 'react-icons/fa';
import LineItem from '../LINEITEM/LineItem';

export const ItemList = ({items, handleCheck, handleDelete}) => {

  return (
    <ul>
    {items?.map((item) => (
       <LineItem 
            key={item.id}
            item={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
       />
))}
</ul>
  )
}
