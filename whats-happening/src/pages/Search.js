import { useState, useRef, useMemo } from "react";
import {FaSearch} from "react-icons/fa"

function Search({ eventData }) {

    const [userInput, setUserInput] = useState("");
    const [events, setEvents] = useState([]);
    const inputRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        const value = inputRef.current.value;
        inputRef.current.value = "";
    };


    const transferEvents = () => {
        setEvents([...eventData.map(item => item.Title)]);
    };

    const filteredEvents = useMemo(() => {
        return events.filter(item => {
        return item.toLowerCase().includes(userInput.toLowerCase());
    })
    }, [events, userInput]);

    const handleUserInputs = (e) => {
        setUserInput(e.target.value);
        transferEvents();
    };

    /*const handleSearchClick = () => {
        setUserInput("");
    };*/

    //transferEvents();


    return (
        <div className="font-mono p-2 flex bg-white mx-20 border-black border">
            <div >
                <FaSearch />
                <form onSubmit={onSubmit} className="h-1/6 w-1/2 p-3 flex items-center">
                    <input
                        type="string"
                        placeholder="Search for Event"
                        ref={inputRef}
                        value={userInput}
                        onChange={handleUserInputs}
                    />
                    <button className="ml-8" type="submit">Search</button>
                </form>
            </div>

            <div className="h-3/4 border-black bg-green-200/75 w-full overflow-auto">
                <h2>Events: </h2>
                <ul>
                    {filteredEvents.map(item => (
                        <div>
                            <li className="p-2 border border-black align-middle">{item}</li>
                        </div>
                    ))}
                </ul>

            </div>
            <div className="w-1/2 flex items-start">
                <ul className="h-3/4  border-black bg-gray-200 w-full overflow-auto">
                    {eventData.map(item => (
                        <div>
                            <li className="p-5 w-full h-5 border border-black align-top">{item.Title}</li>
                        </div>
                    ))}
                </ul>

            </div>

        </div>
    )
}

export default Search;