import React, { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Loader from 'react-loaders'
import './Contact.scss'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

import AnimatedLetters from '../AnimatedLetters'

import { useSnackbarContext } from '../../context/SnackbarContext'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const strArray = 'Contact Me'.split('')

  const refForm = useRef()

  const { showSnackbar } = useSnackbarContext()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const [email, name, subject, message] = refForm.current.elements
    if (!email.value || !name.value || !subject.value || !message.value) {
      showSnackbar('Please, fill the form')
      return
    }

    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        refForm.current,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then((res) => {
        console.log(res)
        showSnackbar(res.status)
      })
      .catch((err) => {
        console.log(err)
        showSnackbar(err.status)
      })
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={strArray}
              index={15}
            />
          </h1>
          <p>I`ll figure something later on ....</p>

          <form
            ref={refForm}
            onSubmit={handleSubmit}
            autoComplete="off"
            noValidate
            className="contact-form">
            <ul>
              <li className="half">
                <input required placeholder="Name" name="name" type="text" />
              </li>
              <li className="half">
                <input required placeholder="Email" name="email" type="email" />
              </li>
              <li>
                <input
                  required
                  placeholder="Subject"
                  name="subject"
                  type="text"
                />
              </li>
              <li>
                <textarea placeholder="Message" name="message"></textarea>
              </li>
              <li>
                <button type="submit" className="flat-button">
                  SEND
                </button>
              </li>
            </ul>
          </form>
        </div>

        <div className="info-map">
          Denisenko Oleg,
          <br />
          Russia,
          <br />
          Pyatigorsk
          <br />
          <span>denisenkoolegq@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[44.047915, 43.065133]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.047915, 43.065133]}></Marker>
          </MapContainer>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Contact
