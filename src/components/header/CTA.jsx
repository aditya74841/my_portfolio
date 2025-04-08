import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
    return (
        <div className="cta">
            <a href="#contact" className="btn">Let's Talk</a>
            <Link to="/blog" className="btn btn-primary">My Blog</Link>
        </div>
    )
}

export default CTA