import React from 'react'
import '../components/styles/Errors.css'
import FatalErrorImg from './../images/500.png'

const FatalError = () => (
    <div className="text-center">
        <h1 className="Error_Text">Error: 500 unexpected error</h1>
        <img src={FatalErrorImg} alt="UNEXPECTED ERROR" className="Error_Image"/>
    </div>
)

export default FatalError