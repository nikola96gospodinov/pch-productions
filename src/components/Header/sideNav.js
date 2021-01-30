import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './sideNav.scss'

export default function sideNav({ navigationSetter, navigationVar }) {

    return (
        <div>
            <div className="navigation-outer">
                <div className="navigation">
                    <div className="content">
                        <Link to="/"><div className="home"><h3>Home</h3></div></Link>
                        <Link to="/about"><div className="about"><h3>About</h3></div></Link>
                        <Link to="/photos"><div className="photography"><h3>Photography</h3></div></Link>
                        <Link to="/videos"><div className="videos"><h3>Videos</h3></div></Link>
                        <Link to="/music"><div className="music"><h3>Music</h3></div></Link>
                        <Link to="/contact"><div className="contact"><h3>Contact</h3></div></Link>
                    </div>
                    <div className="effect">
                        <FontAwesomeIcon onClick={() => navigationSetter(!navigationVar)} icon={['fas', 'chevron-circle-left']}/>
                    </div>
                </div>
            </div>
        </div>
    )
}