import React, {useState} from 'react';
import Header from './HEADER/Header';
import Content from './CONTENT/Content';
import Footer from './FOOTER/Footer';
import "./app.css";

const App = () => {

  const [items, setItems] = useState([
    {
        id: 1,
        checked: true,
        item: "2 Congos of foreign Rice"
    },

    {
        id: 2,
        checked: false,
        item: "Tin Tomatoes and fresh Pepper"
    },

    {
        id: 3,
        checked: false,
        item: "Spicies(Curry, Thyme, Garlic, Ginger and Chilli pepper"
    },

    {
        id: 4,
        checked: false,
        item: "Vegetable Oil, Maggi Cubes, Salt and Onions"
    }
]);


const handleCheck = (id) => {
       
  const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);

  setItems(listItems);
  
  localStorage.setItem("shoppingList", JSON.stringify(listItems));
}

const handleDelete = (id) => {

  const listItems = items.filter((item) => item.id !== id);
  setItems(listItems);
  
  localStorage.setItem("shoppingList", JSON.stringify(listItems));
}


  return (
    <div className="App">
        <Header />
        <Content 
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
        <Footer length={items.length} />
    </div>
  )
}

export default App