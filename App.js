import React, { useEffect } from 'react'
import { Platform } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import AddCard from './components/AddCard'
import AddDeck from './components/AddDeck'
import CustomStatusbar from './components/CustomStatusbar'
import Decks from './components/Decks'
import DeckView from './components/DeckView'
import Quiz from './components/Quiz'
import { handleInitialData } from './actions'
import { setLocalNotification } from './utils/helpers'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Tab =
  Platform.OS === 'ios'
    ? createBottomTabNavigator()
    : createMaterialTopTabNavigator()

const Stack = createStackNavigator()

const TabNavigator = function () {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let icon
          if (route.name === 'Decks') {
            icon = (
              <Ionicons name="albums" size={size} color={color} />
            )
          } else if (route.name === 'Add Deck') {
            icon = (
              <FontAwesome name="plus-square" size={size} color={color} />
            )
          }
          return icon
        },
      })}
    >
      <Tab.Screen name="Decks" component={Decks} />
      <Tab.Screen name="Add Deck" component={AddDeck} />
    </Tab.Navigator>
  )
}

function App () {
  const dispatch = useDispatch()
  // AsyncStorage.clear()

  useEffect(() => {
    dispatch(handleInitialData())
    setLocalNotification()
  }, [])

  return (
    <React.Fragment>
      <CustomStatusbar backgroundColor={'black'} style="light" />

      <NavigationContainer>
        <Stack.Navigator headerMode="screen">
          <Stack.Screen name="Home" component={TabNavigator} options={{ title: 'Mobile Flashcards' }} />
          <Stack.Screen name="Deck" component={DeckView} options={({ route }) => ({ title: route.params.title })} />
          <Stack.Screen name="Add Card" component={AddCard} />
          <Stack.Screen name="Quiz" component={Quiz} options={({ route }) => ({ title: `Quiz for ${route.params.deck.title}`})} />
        </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  )
}

export default App