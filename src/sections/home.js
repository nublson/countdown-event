import React from "react"

const Home = () => {
    return (
        <header className="header">
            <div className="box">
                <div className="info">
                    <h1 className="info-title">
                        Business Leaders <span>Conference 2020</span>
                    </h1>
                    <p className="info-date">
                        04 January 2020 - Los Angeles CA
                    </p>
                    <div className="info-timer">
                        <div className="time" id="days">
                            <p>22</p>
                            <span>Days</span>
                        </div>
                        <div className="time" id="hours">
                            <p>06</p>
                            <span>Hours</span>
                        </div>
                        <div className="time" id="minutes">
                            <p>33</p>
                            <span>Minutes</span>
                        </div>
                        <div className="time" id="seconds">
                            <p>01</p>
                            <span>Seconds</span>
                        </div>
                    </div>
                </div>
                <div className="form">
                    <form className="form" action="#">
                        <h2>Join Event</h2>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your Name"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your Email"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                value="Join now"
                                className="btn btn-primary"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Home
