import React from 'react'
import {LogBox} from 'react-native'
import Home from "./components/Home"

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs()

const App = () => {
  return (
    <Home/>
  )
}

export default App