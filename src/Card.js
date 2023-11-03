import React, {useState, useEffect} from "react";

const today = new Date();

const options = {
    day: "numeric",
    month: "long",
    year: "numeric"
};

const formattedDate = today.toLocaleDateString("en-US", options);

  
function Card(props){

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
    }, []);

    const options = {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    };

    const formattedTime = currentTime.toLocaleTimeString('en-US', options);
    
    return(
        <div className="card">
            <h1>{props.cityName}</h1>
            <div className="date">
                <h3>{formattedDate}</h3>
                <h4>{formattedTime}</h4>
            </div>
            <div className="temp">
                <div className="icon">
                <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="weather-icon"/>
                </div>
                <div className="data">
                    <h1>{props.temperature}°C</h1>
                    <h3>{props.descp}</h3>
                </div>
            </div>
            <div className="descp">
                <h3 className="descp_text">Feels like&nbsp;{props.feel}°C&nbsp;with&nbsp;{props.descp}</h3>
                <h3 className="list-items">Humidity :&nbsp;&nbsp;{props.humidity}%</h3>
                <h3 className="list-items">Wind Speed :&nbsp;&nbsp;{props.wind} m/s</h3>
                <h3 className="list-items">Min Temp :&nbsp;&nbsp;{props.tempMin}°C</h3>
                <h3 className="list-items">Max Temp :&nbsp;&nbsp;{props.tempMax}°C</h3>
            </div>
        </div>
    );
}

export default Card;