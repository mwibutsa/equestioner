import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ label, link}) => {
    return ( <Link to={link || '/'} className ="btn btn--white">
        { label }
    </Link> );
}
 
export default Button;