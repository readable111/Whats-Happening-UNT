import React from 'react'
import Event from '../components/Events'
import Maps from '../components/Map.jsx'

const Home = ({eventData}) => {
  
        return(
        <div className = "font-mono p-2 h-screen bg-gray-800 mx-20 flex border-black border">
            <div className = "w-1/2 flex items-start">
                <ul className = "h-full  border-black bg-gray-200 w-full overflow-auto"> 
                    { eventData.map((item) => {
                         return <li className="p-5 w-full h-15 border border-black align-top hover:text-green-600"><a href={item.Link}>{item.Title}</a></li>;
                     }) }    
                </ul>
                    <div id= "map"></div>
            </div>
          <Maps eventData = {eventData}/>
        </div>
        );  
}
    
export default Home;