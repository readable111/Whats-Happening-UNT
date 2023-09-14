import React, { Component,useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import NavBar from './components/NavBar';
import Search from './pages/Search';
import Home from './pages/Home';
import About  from './pages/About';


function App(){
  


  const [eventData, setEventData] = useState([{}]);

  useEffect(() => {
    fetch("/scrape").then(
      response=>response.json()
    ).then(
      data => {
        setEventData(data);
      }
    )
  }, []) ;

  let Component;
  switch(window.location.pathname)
  {
    case "/":
     Component = <Home/>;
      break;
    case "/Search":
      Component = <Search/>;
      break;
    case "/About":
      Component = <About/>;
      break;
    default:
      break;   
  }
  return(
  <body>
   <Header/>
   <NavBar/>
    { Component }
   </body>
  );

};


export default App;
