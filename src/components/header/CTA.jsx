import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
    return (
        <div className="cta">
            <a href="#contact" className="btn">Let's Talk</a>
            <Link to="/cv" className="btn btn-primary">Digital Resume</Link>
            <Link to="/daily-update" className="btn btn-primary">Daily Update</Link>

        </div>
    )
}

export default CTA