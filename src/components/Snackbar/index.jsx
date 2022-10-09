import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useSnackbarContext } from '../../context/SnackbarContext'

import './Snackbar.scss'

const Snackbar = () => {
  const { snackbar } = useSnackbarContext()

  return ReactDOM.createPortal(
    snackbar.isSnackbarShown && <SnackbarComponent />,
    document.body
  )
}

function SnackbarComponent() {
  const { snackbar, setSnackbar } = useSnackbarContext()

  useEffect(() => {
    if (snackbar.isSnackbarShown) {
      const timeoutId = setTimeout(() => {
        setSnackbar({
          isSnackbarShown: false,
          snackbarStatus: null,
        })
      }, 3000)

      return () => {
        clearTimeout(timeoutId)
      }
    }
  }, [snackbar])

  const responseMessage = (message) => {
    switch (message) {
      case 200:
        return 'Your Message was sent!'
      case 400:
        return 'Try later or contact me with other platform'
      default:
        return message
    }
  }
  return (
    <div className="snackbar">
      <p className="snackbar-text">
        {responseMessage(snackbar.snackbarStatus)}
      </p>
    </div>
  )
}

export default Snackbar
