import React, { useState } from "react"
import { Formik, Form, Field } from "formik"
import db from "../services/firebase"

const MyForm = () => {
    const addUser = async (name, email) => {
        await db.collection("users").add({
            name,
            email,
        })
    }

    const getUser = async () => {
        const { docs } = await db.collection("users").get()
        const count = docs.length
        return count
    }

    const [count] = useState(0)

    return (
        <div className="form-box">
            <Formik
                initialValues={{ name: "", email: "" }}
                onSubmit={(values, actions) => {
                    addUser(values.name, values.email)
                    getUser()
                    actions.resetForm()
                    actions.setSubmitting(false)
                }}
            >
                {() => (
                    <Form className="form">
                        <h2>Join Event</h2>
                        <div className="form-group">
                            <Field
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Enter your Name"
                                autoComplete="off"
                            />
                        </div>
                        <div className="form-group">
                            <Field
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter your Email"
                                autoComplete="off"
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn">
                                Join now
                            </button>
                        </div>
                        <p>
                            <span> {count} </span> people confirm their
                            presence!
                        </p>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default MyForm
