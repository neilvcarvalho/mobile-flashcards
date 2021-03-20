import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { registerRootComponent } from 'expo'
import { createStore } from 'redux'
import { Provider as StoreProvider } from 'react-redux'
import reducer from './reducers'
import App from './App'
import middleware from './middleware'

const store = createStore(reducer, middleware)

function RootComponent () {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </StoreProvider>
  )
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(RootComponent)
