import React from "react"

import Helmet from "../config/helmet"

//! Style
import "../style/App.scss"

//! Sections
import Home from "../sections/home"
import Footer from "../sections/footer"

const App = () => {
    return (
        <>
            <Helmet />
            <Home />
            <Footer />
        </>
    )
}

export default App
