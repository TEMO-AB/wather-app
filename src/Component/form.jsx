import React from 'react';
import './form.css';

const From = props => {
    const [city, setCity] = React.useState('')
    const [country, setCountry] = React.useState('')

    const handleCityChange = (e) => {
        setCity(e.target.value)
    }

    const handleCountryChange = (e) => {
        setCountry(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        props.loadWeather(city, country)
    }


    return (
        <div className="container">
            <div>{props.error ? error() : null}</div>
            <form onSubmit={handleFormSubmit}>
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <input type="text" value={city} className="form-control" name="city" autoComplete="off" onChange={handleCityChange} placeholder="City" />
                    </div>
                    <div className="col-md-3">
                        <input type="text" value={country} className="form-control" name="country" autoComplete="off" onChange={handleCountryChange} placeholder="Country" />
                    </div>
                    <div className="col-md-3 mt-md-0 text-md-left">
                        <button className="btn btn-warning">Get Weather</button>
                    </div>
                </div>
            </form>
        </div >
    );
};

function error() {
    return (
        <div className="alert alert-danger mx-5" role="alert">
            Please Enter City and Country
        </div>
    );
}

export default From;