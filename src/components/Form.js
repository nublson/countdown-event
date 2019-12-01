import React from "react"

const Form = () => {
    return (
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
                <input type="submit" value="Join now" className="btn" />
            </div>
        </form>
    )
}

export default Form
