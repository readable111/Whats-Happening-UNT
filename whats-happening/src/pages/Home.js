import React from 'react'
import Event from '../components/Events'

const Home = ({eventData}) => {

        return(
        <div className = "font-mono p-2 h-screen bg-white mx-20 flex border-black border">
            <div className = "w-1/2 flex items-start">
                <ul className = "h-3/4  border-black bg-gray-200 w-full overflow-auto"> 
                    { eventData.map((item) => {
                         return <li className="p-5 w-full h-5 border border-black align-top">{item.Title}</li>;
                     }) }    
                </ul>
            </div>
           
        </div>
        );  
}
    
export default Home;