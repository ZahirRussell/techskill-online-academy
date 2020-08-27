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
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
            <Header></Header>
        </div>
        <div className="col-sm-6">
          <div className="float-right">
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </div>     
     
      <div>
           <div className="row">
            {
              data.map(course => <Course course={course} handleAddCourse ={handleAddCourse} key={course.Key}></Course>)
            }
          </div>
      </div>
    </div>
  );
}

export default App;
