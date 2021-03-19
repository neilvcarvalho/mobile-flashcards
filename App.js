import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as PaperProvider } from 'react-native-paper'
import Decks from './components/Decks'
import AddDeck from './components/AddDeck'
import Constants from 'expo-constants'
import { addDeck, getDecks } from './utils/store'

function MyStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tab =
  Platform.OS === 'ios'
    ? createBottomTabNavigator()
    : createMaterialTopTabNavigator()

class App extends Component {
  state = {
    decks: {}
  }

  componentDidMount () {
    getDecks()
      .then((decks) => {
        this.setState(() => ({
          decks: JSON.parse(decks || '{}')
        }))
      })
  }

  handleAddDeck (title) {
    this.setState((prevState) => ({
      decks: {
        ...prevState.decks,
        [title]: {
          title,
          questions: []
        }
      }
    }))

    addDeck(title)
  }

  render() {
    return (
      <PaperProvider>
        <MyStatusBar backgroundColor={'black'} style="light" />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let icon
                if (route.name === 'Decks') {
                  icon = (
                    <FontAwesome name="plus-square" size={size} color={color} />
                  )
                } else if (route.name === 'Add Deck') {
                  icon = (
                    <Ionicons name="plus-square" size={size} color={color} />
                  )
                }
                return icon
              },
            })}
          >
            <Tab.Screen name="Decks" children={(navigation) => <Decks {...navigation} decks={this.state.decks} />} />
            <Tab.Screen name="Add Deck" children={(navigation) => <AddDeck {...navigation} handleAddDeck={this.handleAddDeck.bind(this)} />} />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App