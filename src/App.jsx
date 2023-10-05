import React, {useState} from 'react';
import Header from './HEADER/Header';
import Content from './CONTENT/Content';
import Footer from './FOOTER/Footer';
import AddItem from './ADDITEM/AddItem'

import "./app.css";


export const App = () => {

  const [items, setItems] = useState([]);
  const [newItem, setNewItems] = useState('');

  const setAndSaveItems = (newItems) => {

    setItems(newItems);
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  }

   const AddObj = (item) => {

    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id, checked: false, item};
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }

 const handleCheck = (id) => {
       
  const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);

  setAndSaveItems(listItems);
}

const handleDelete = (id) => {

  const listItems = items.filter((item) => item.id !== id);
  
  setAndSaveItems(listItems);
}

  const handleSubmit = (e) => {

    e.preventDefault();
    if (!newItem) return;
    AddObj(newItem);
    setNewItems('')
  }


  return (
    <div className="App">
        <Header />

        <AddItem
          newItem={newItem}
          setNewItems={setNewItems}
          handleSubmit={handleSubmit}
        />
 
        <Content 
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        /> 

        <Footer length={items?.length} />
    </div>
  )
}
