import React, {useState} from "react";

function Input(props){
    const [cityName, setCityName] = useState("");


    function handleChange(event) {
        const newValue = event.target.value;
        setCityName(newValue);
    }

    function handleClick(event) {
        event.preventDefault();
        props.onAdd(cityName);
        setCityName("");
    }
    
    return(
        <div className="inputArea">
            <form onSubmit={handleClick}>
                <input className="input" type="text" name="city" placeholder="Search for a city" onChange={handleChange} value={cityName} autoComplete="off"></input>
                <button className="btn" type="submit">Go</button>
            </form>
        </div>
    );
}

export default Input;