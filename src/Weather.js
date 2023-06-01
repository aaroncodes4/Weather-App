import React from "react";

const Weather = () => {
    return(
        <div className="container">
            <div className="weather-container">
                <div className="weather-content">
                    <div className="search-box">
                        <input type="text" placeholder="Enter a City/Town" />
                        <div><i className="fas fa-search"></i></div>
                    </div>
                    <div className="weather-info">
                        <h2>BRUNEI</h2>
                        <h1><span className="degree">54</span>°</h1>
                        <h3 className="weather-type">Cloudy</h3>
                    </div>
                </div>
            </div>
            <div className="days">
                <div className="overview">
                    <h3>THU</h3>
                    <div className="image-cont">
                        <i className="fas fa-cloud"></i>
                    </div>
                    <div className="name-type">
                        <p>Partly Cloudy</p>
                    </div>
                </div>

                <div className="overview">
                    <h3>FRI</h3>
                    <div className="image-cont">
                        <i className="fas fa-cloud"></i>
                    </div>
                    <div className="name-type">
                        <p>Partly Cloudy</p>
                    </div>
                </div>

                <div className="overview">
                    <h3>SAT</h3>
                    <div className="image-cont">
                        <i className="fas fa-cloud"></i>
                    </div>
                    <div className="name-type">
                        <p>Partly Cloudy</p>
                    </div>
                </div>

                <div className="overview">
                    <h3>SUN</h3>
                    <div className="image-cont">
                        <i className="fas fa-cloud"></i>
                    </div>
                    <div className="name-type">
                        <p>Partly Cloudy</p>
                    </div>
                </div>

                <div className="overview">
                    <h3>MON</h3>
                    <div className="image-cont">
                        <i className="fas fa-cloud"></i>
                    </div>
                    <div className="name-type">
                        <p>Partly Cloudy</p>
                    </div>
                </div>
                
                <div className="overview">
                    <h3>TUE</h3>
                    <div className="image-cont">
                        <i className="fas fa-cloud"></i>
                    </div>
                    <div className="name-type">
                        <p>Partly Cloudy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather;