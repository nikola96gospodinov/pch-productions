import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Transition } from 'react-spring/renderprops'

import SideNav from './sideNav'

import Logo from '../../images/logo.png'

import './header.scss'

const Header = () => {
  const [nav, setNav] = useState(false)

  return (
    <>
      <header>
        <div class="header-outer">
          <div className="header-inner">
            <div className="header-inner-menu">
                <FontAwesomeIcon onClick={() => setNav(!nav)} icon={['fas', 'bars']}/>
              </div>
              <div className="header-inner-social">
                <a href="https://www.instagram.com/p.ch.production/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={['fab', 'instagram']}/>
                </a>
                <a href="https://www.facebook.com/peter.chorbadzhiev" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={['fab', 'facebook']}/>
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={['fab', 'youtube']}/>
                </a>
              </div>
          </div>
        </div>
        <Transition
          items={nav}
          from={{ marginLeft: -500 }}
          enter={{ marginLeft: 0 }}
          leave={{ marginLeft: -500 }}
        >
          {show => show && (props => <div style={props}><SideNav navigationSetter={setNav} navigationVar={nav}/></div>)}
        </Transition>

        {nav ? <div onClick={() => setNav(!nav)} className="backdrop"></div> : null}
        <div className="container">
          <Link to="/">
            <img src={Logo} alt="Logo"/>
          </Link>
        </div>
      </header>
      <div className="bottom-right-cta">
        <Link to="/contact">
          <FontAwesomeIcon icon={['fas', 'envelope']}/> <span>Send me a message</span>
        </Link>
      </div>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
