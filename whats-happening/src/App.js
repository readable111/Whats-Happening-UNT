import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import NavBar from './components/NavBar';
function App() {
  return (
  <body>
   <Header/>
   <NavBar/>
   <div className = "font-mono p-2 h-screen bg-white mx-20 flex border-black border">
    This is where the map and stuff go

   </div>
   </body>
  );
}

export default App;
