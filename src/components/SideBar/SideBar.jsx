import './SideBar.scss'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoS from './../../assets/images/D2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons'
const SideBar = () => {
  return (
    <>
      <aside className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoS} alt="logo" />
        </Link>
        <h2 className="title">Denisenko</h2>
        <nav className="side-nav">
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            to="/about"
            className="about-link">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/contact">
            <FontAwesomeIcon
              className="contact-link"
              icon={faEnvelope}
              color="#4d4d4e"
            />
          </NavLink>
        </nav>
        <ul className="socials-list">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://t.me/Time2ChangeMyself">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Time2ChangeMyself">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </aside>
    </>
  )
}

export default SideBar
