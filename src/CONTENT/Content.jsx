import React, {useState} from 'react'
import "./content.css";
import {FaTrash} from "react-icons/fa";
import { ItemList } from '../ITEMLIST/ItemList';

function Content({ items, handleCheck, handleDelete}) {


  return (
    <main className="main">
        {items.length ? (
            <ItemList 
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
        ) : (<p style={{ marginTop: '2rem'}}> No! Item can be found here</p>)}
       
    </main>
  )
}

export default Content