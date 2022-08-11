import React, { useState, useContext } from 'react'

const SnackbarContext = React.createContext()

function useSnackbarContext() {
  return useContext(SnackbarContext)
}

const SnackbarProvider = ({ children }) => {
  const [isSnackbarShown, setIsSnackbarShown] = useState(false)
  const [snackbarStatus, setSnackbarStatus] = useState(null)

  function showSnackbar(bool) {
    setIsSnackbarShown(bool)
  }

  const SnackbarContextValue = {
    isSnackbarShown,
    showSnackbar,
    snackbarStatus,
    setSnackbarStatus,
  }

  return (
    <SnackbarContext.Provider value={SnackbarContextValue}>
      {children}
    </SnackbarContext.Provider>
  )
}

export { useSnackbarContext, SnackbarProvider }
