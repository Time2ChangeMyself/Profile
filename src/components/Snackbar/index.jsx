import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useSnackbarContext } from '../../context/SnackbarContext'

import './Snackbar.scss'

const Snackbar = () => {
  const { isSnackbarShown } = useSnackbarContext()
  console.log(isSnackbarShown)

  return ReactDOM.createPortal(
    isSnackbarShown && <SnackbarComponent />,
    document.body
  )
}

function SnackbarComponent() {
  const { showSnackbar, isSnackbarShown, snackbarStatus, setSnackbarStatus } =
    useSnackbarContext()

  useEffect(() => {
    if (isSnackbarShown) {
      const timeoutId = setTimeout(() => {
        setSnackbarStatus('')
        showSnackbar(false)
      }, 3000)

      return () => {
        clearTimeout(timeoutId)
      }
    }
  }, [setSnackbarStatus, showSnackbar, isSnackbarShown])

  const responseMessage = (snackbarStatus) => {
    switch (snackbarStatus) {
      case 200:
        return 'Your Message was sent!'
      case 400:
        return 'Try later or contact me with other platform'
      default:
        return 'Not sure what was that...'
    }
  }
  return (
    <div className="snackbar">
      <p className="snackbar-text">{responseMessage(snackbarStatus)}</p>
    </div>
  )
}

export default Snackbar
