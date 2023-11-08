import { useState, useRef } from "react";

function Search() {

    const [userInput, setUserInput] = useState("");
    const [events, setEvents] = useState([]);
    const inputRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();

        const value = inputRef.current.value;
        inputRef.current.value = "";
    }

    const handleUserInputs = (e) => {
        setUserInput(e.target.value);
    }

    /*const handleSearchClick = () => {
        setUserInput("");
    }*/

    return (
        <div className="font-mono p-2 h-screen bg-white mx-20 flex border-black border">
            <div >
                <form onSubmit={onSubmit}>
                    <input
                        type="string"
                        placeholder="Search for Event"
                        ref={inputRef}
                        value={userInput}
                        onChange={handleUserInputs}
                    />

                    <button type="submit">Enter</button>
                </form>
            </div>

        </div>
    )
}

export default Search;