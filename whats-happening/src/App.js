import React, { Component,useEffect, useState } from 'react';
import Header from './components/Header.jsx';           //we import our components and pages here
import NavBar from './components/NavBar';
import Search from './pages/Search';
import Home from './pages/Home';
import About  from './pages/About';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import firebaseConfig from './firebase.js';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { initializeApp } from "firebase/app";

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();
const db = getFirestore(app);

  function App(){
  const [eventData, setEventData] = useState([{}]);         //stores the API data in event data using the useState react hook

   useEffect(() => {                  //uses the useEffect hook to call the scrape API
    fetch("/scrape").then(            //calls the API using fetch()
      response=>response.json()       //takes the response and puts it into JSON(JavaScript Object Notation)
    ).then(
      data => {                       //takes the data received from API and using setEventData, puts it into eventData
        setEventData(data);
      }
    )
  }, []) ;                            //DO NOT REMOVE EMPTY BRACKET, THIS MAKES IT SO THAT THE API IS CALLED ONLY ON REFRESH, REMOVE IT AND WE GET ENDLESS API CALLS

/*try{
    eventData.forEach( async function(event){
      const docRef = db.collection('events').doc(event.Title);
      await docRef.set({
        Title: event.Title,
        Date: event.Date,
        Description:event.Description
      })
    })
    }
  catch(e){
    console.error("error adding document")
  }*/

  let Component;                      //declaring a variable to store which page is currently beign displayed.
  switch(window.location.pathname)    //switch case based off of the current URL
  {
    case "/":                         //if there is no page loaded, then display the Home page
     Component = <Home eventData={eventData}/>;
      break;
    case "/Search":                   //if the URL is /search, then we display the Search page
      Component = <Search eventData = {eventData}/>;
      break;
    case "/About":                    // if the URL is /About then we display the About page(haven't figured out how to do that for each event yet :/)
      Component = <About/>;
      break;
    default:
      break;   
  }
  return(                             // this retun statement is where the html elements of the front page are displayed
  <body>
    {/*Header is the Image and Title combo on the top of the screen*/}
   <Header/>                          
   {/*NavBar component contains all of the Navigation functionaity*/}
   <NavBar/>
      {Component}   
      {/*displays the current page*/}
      
   </body>
  );

};


export default App;
