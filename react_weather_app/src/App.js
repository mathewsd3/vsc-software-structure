import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form.js";
import Weather from "./components/Weather.js";

const API_KEY = "25a6bb0371d24d3819a0a03b08ae5430";

class App extends React.Component {
    state = {
        feels_like: undefined,
        temperature: undefined,
        pressure: undefined,
        lat: undefined,
        lon: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        deg: undefined,
        speed: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
        //convert response to json
        const data = await api_call.json();
        if(city && country){
            console.log(data);
            this.setState({
                feels_like: data.main.feels_like,
                temperature: data.main.temp,
                pressure: data.main.pressure,
                lat: data.coord.lat,
                lon:data.coord.lon,
                city: data.name,
                country: data.sys.country,
                humidity:data.main.humidity,
                deg: data.wind.deg,
                speed: data.wind.speed,
                description:data.weather[0].description,
                error:""
            });
        } else {
            this.setState({
                feels_like: undefined,
                temperature: undefined,
                pressure: undefined,
                lat: undefined,
                lon: undefined,
                city: undefined,
                country: undefined,
                humidity:undefined,
                deg:undefined,
                speed:undefined,
                description:undefined,
                error:"Please enter the values."
            });
        }
    }

    render(){
        return(
            <div className="wrapper">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-5 title-container">
                                <Titles />
                            </div>
                            <div className="col-xs-7 form-container">
                                <Form getWeather={this.getWeather}/>
                                <Weather
                                feels_like={this.state.feels_like}
                                temperature={this.state.temperature}
                                pressure={this.state.pressure}
                                lat={this.state.lat}
                                lon={this.state.lon}
                                city={this.state.city}
                                country={this.state.country}
                                humidity={this.state.humidity}
                                deg={this.state.deg}
                                speed={this.state.speed}
                                description={this.state.description}
                                error={this.state.error}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default App;