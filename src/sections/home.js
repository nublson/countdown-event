import React, { useState, useEffect } from "react"

import CalendarIcon from "../components/Calendar"

const Home = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date("2020-01-10") - +new Date()
        let timeLeft = {}

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            }
        }

        return timeLeft
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)
    })

    return (
        <header className="header">
            <div className="box">
                <div className="info">
                    <h1 className="info-title">
                        Charles University Third Faculty of Medicine{" "}
                        <span>Open Day 2020</span>
                    </h1>
                    <p className="info-date">
                        <span className="info-date--icon">
                            {" "}
                            <CalendarIcon />{" "}
                        </span>{" "}
                        10 January 2020 - Prague CZ
                    </p>
                    <div className="info-timer">
                        <div className="time" id="days">
                            <p>{timeLeft.days}</p>
                            <span>Days</span>
                        </div>
                        <div className="time" id="hours">
                            <p>{timeLeft.hours}</p>
                            <span>Hours</span>
                        </div>
                        <div className="time" id="minutes">
                            <p>{timeLeft.minutes}</p>
                            <span>Minutes</span>
                        </div>
                        <div className="time" id="seconds">
                            <p>{timeLeft.seconds}</p>
                            <span>Seconds</span>
                        </div>
                    </div>
                </div>
                <div className="form-box">
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
                                className="btn"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Home
