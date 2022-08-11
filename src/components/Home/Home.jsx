import React, { useState, useEffect } from 'react'
import './Home.scss'
import LogoTitle from './../../assets/images/D.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from './../AnimatedLetters/'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../Logo/Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = 'enisenko'.split('')
  const jobArray = 'web developer'.split('')
  const [imgClass, setImgClass] = useState('imgShowing')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
      setImgClass('imgDurable')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>`m</span>
            <img className={imgClass} src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              index={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              index={22}
            />
          </h1>
          <h2>
            Front-end Developer / React Developer{' '}
            <FontAwesomeIcon
              style={{
                position: 'absolute',
                transform: 'translateY(-50%)',
                top: '50%',
                right: '5%',
                fontSize: '32px',
                color: '#62dafc',
              }}
              icon={faReact}
            />
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
