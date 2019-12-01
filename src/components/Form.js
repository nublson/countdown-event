import React from "react"

const Form = () => {
    return (
        <form className="form" action="#">
            <h2>Join Event</h2>
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your Name"
                />
            </div>
            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your Email"
                />
            </div>
            <div className="form-group">
                <button type="submit">Join now</button>
            </div>
        </form>
    )
}

export default Form
