import React from 'react'
import Event from '../components/Events'

const Home = ({eventData}) => {

        return(
        <div className = "font-mono p-2 h-screen bg-white mx-20 flex border-black border">
            <div className = "w-1/2 flex items-start">
                <ul className = " h-3/4 p-5 border-black bg-gray-600 w-full overflow-auto"> 
                    { eventData.map((item) => {
                         return <li className="w-fit h-5 border-black">{item.Title}</li>;
                     }) }    
                </ul>
            </div>
           
        </div>
        );  
}
    
export default Home;