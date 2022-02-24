import React from 'react';
import './styles/Addbutton.css'
import Add from './../images/add.png'
import {Link} from 'react-router-dom'

const AddButton = () => (
    <Link to="/excercise/new">
        <img src={Add} className="Fitness-Add" alt="excercise"/>
    </Link>
)


export default AddButton