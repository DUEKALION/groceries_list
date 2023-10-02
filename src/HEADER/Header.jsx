import React from 'react';
import "./header.css";

export default function Header() {
    
  return (
    <h1 className='header'>Groceries List</h1>
  )
}

Header.defaultProps = {
  title: "Default Title"
}