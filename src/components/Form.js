import React, { useState, useEffect } from "react"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"

import db from "../services/firebase"

const addUser = async (name, email) => {
    await db.collection("users").add({
        name,
        email,
    })
}

const signupSchema = Yup.object().shape({
    name: Yup.string().required("Name must be required!"),
    email: Yup.string()
        .email("Your email is not valid!")
        .required("Email must be required!"),
})

const MyForm = () => {
    const [count, setCount] = useState([])

    useEffect(() => {
        async function getUser() {
            const { docs } = await db.collection("users").get()
            const response = await docs.length
            setCount(response)
        }

        getUser()
    })

    return (
        <div className="form-box">
            <Formik
                initialValues={{ name: "", email: "" }}
                validationSchema={signupSchema}
                onSubmit={(values, actions) => {
                    addUser(values.name, values.email)
                    actions.resetForm()
                    actions.setSubmitting(false)
                }}
            >
                {({ errors, touched }) => (
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
                            {(errors || touched) && (
                                <p className="error">
                                    {" "}
                                    {errors.name || errors.email}{" "}
                                </p>
                            )}
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
