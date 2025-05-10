import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
    return (
        <div className="cta">
            <a href="#contact" className="btn">Let's Talk</a>
            <Link to="/cv" className="btn btn-primary">My CV</Link>
        </div>
    )
}

export default CTA