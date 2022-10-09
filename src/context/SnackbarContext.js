import React, { useState, useContext } from 'react'

const SnackbarContext = React.createContext()

function useSnackbarContext() {
  return useContext(SnackbarContext)
}

const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    isSnackbarShown: false,
    snackbarStatus: null,
  })

  function showSnackbar(message) {
    setSnackbar({
      isSnackbarShown: true,
      snackbarStatus: message,
    })
  }

  const SnackbarContextValue = {
    snackbar,
    showSnackbar,
    setSnackbar,
  }

  return (
    <SnackbarContext.Provider value={SnackbarContextValue}>
      {children}
    </SnackbarContext.Provider>
  )
}

export { useSnackbarContext, SnackbarProvider }
