import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import NavBar from './components/NavBar';
import Search from './pages/Search';
import Home from './pages/Home';
import About  from './pages/About';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }


render() {
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

}
}

export default App;
