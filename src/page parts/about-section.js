import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import './about-section.scss'


const aboutSection = ({StrapiData}) => {
    return (
        <div id="about" className="outer-container about-section">
            <div className="container">
                <div className="double-grid">
                    <div className="about-pic">
                        <Img alt="Photo of Peter" fluid={StrapiData.allStrapiAbout.nodes[0].PhotoText.childImageSharp.fluid}/>
                    </div>
                    <div className="about-text">
                        <h2 className="sub-heading">About</h2>
                        <hr className="divider"/>
                        <p>{StrapiData.allStrapiAbout.nodes[0].Bio}</p>
                        <Link to="/photos" className="button">See portfolio</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default aboutSection