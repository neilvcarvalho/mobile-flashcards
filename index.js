import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { registerRootComponent } from 'expo';

import App from './App';

function RootComponent () {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  )
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(RootComponent);
