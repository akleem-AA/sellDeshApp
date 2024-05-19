import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './src/navigation/Navigation'
import { Provider } from 'react-redux'
import Store from './src/redux/store/Store'
import Home from './src/screens/homeScreens/Home'

const App = () => {
  console.log('app started')
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>

  )
}

export default App

const styles = StyleSheet.create({})