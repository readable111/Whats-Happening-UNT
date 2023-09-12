import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import NavBar from './components/NavBar';
import Search from './pages/Search';
import Home from './pages/Home';
import About  from './pages/About';


function App() {
  let Component;
  switch(window.location.pathname)
  {
    case "/Home":
     Component = <Home/>;
      break;
    case "/Search":
      Component = <Search/>;
      break;
    default:
      break;   
  }
  return (
  <body>
   <Header/>
   <NavBar/>
   {Component}
   {/*<div className = "font-mono p-2 h-screen bg-white mx-20 flex border-black border">
    This is where the map and stuff go

  </div>*/}
   </body>
  );
}

export default App;
