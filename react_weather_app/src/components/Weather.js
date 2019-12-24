import React from "react";

const Weather = props => (
    <div className="Weather__info">
    {
    props.city && props.country && <p className="weather__key">Location:
        <span className="weather__value"> {props.city }, { props.country }</span>
        </p>
    }
    {
        props.lat && props.lon && <p className="weather__key">Latitude:
            <span className="weather__value"> { props.lat }, Longitude: { props.lon }</span>
            </p>
    }
    {
        props.temperature && props.feels_like && <p className="weather__key">Temperature:
            <span className="weather__value"> { props.temperature }, Feels Like: {props.feels_like}</span>
            </p>
    }
    {
        props.pressure && <p className="weather__key">Pressure:
            <span className="weather__value"> { props.pressure }</span>
            </p>
    }
    {
        props.speed && props.deg && <p className="weather__key">Wind Speed:
            <span className="weather__value"> { props.speed }, Deg: { props.deg }</span>
            </p>
    }
    {
        props.humidity && <p className="weather__key">Humidity:
            <span className="weather__value"> { props.humidity }</span>
            </p>
    }
    {
        props.description && <p className="weather__key">Conditions:
            <span className="weather__value"> { props.description }</span>
            </p>
    }
    {
        props.error && <p className="weather__error">
            {props.error}
            </p>
    }
    </div>
);

export default Weather;