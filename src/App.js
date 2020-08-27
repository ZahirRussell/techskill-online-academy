import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Course from './components/Course/Course';
import data from './courseData/courseData';
import Cart from './components/Cart/Cart';

function App() {

  const [cart, setCart] = useState([]);
  const handleAddCourse = (data) => {
    const newCart = [...cart,data];
    setCart(newCart);
  };

  return (
    <div>
      <Header></Header>
      <Cart cart={cart}></Cart>
      <div>
        {
          data.map(course => <Course course={course} handleAddCourse ={handleAddCourse}></Course>)
        }
      </div>
      
    </div>
  );
}

export default App;
