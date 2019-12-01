import React from "react"
import { withFormik, Field, Form } from "formik"

const App = ({ isSubmitting }) => {
    return (
        <Form className="form">
            <h2>Join Event</h2>
            <div className="form-group">
                <Field
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your Name"
                />
            </div>
            <div className="form-group">
                <Field
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your Email"
                />
            </div>
            <div className="form-group">
                <button type="submit" disabled={isSubmitting} className="btn">
                    Join now
                </button>
            </div>
        </Form>
    )
}

const MyForm = withFormik({
    mapPropsToValues({ name, email }) {
        return {
            name: name || "",
            email: email || "",
        }
    },
    handleSubmit(values) {
        console.log(values)
    },
})(App)

export default MyForm
