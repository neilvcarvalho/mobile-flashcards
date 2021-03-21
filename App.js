import React, { useEffect } from 'react'
import { Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AddDeck from './components/AddDeck'
import CustomStatusbar from './components/CustomStatusbar'
import Decks from './components/Decks'
import { useDispatch } from 'react-redux'
import { handleInitialData } from './actions'
import DeckView from './components/DeckView'

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
      <Tab.Screen name="Decks" component={Decks} />
      <Tab.Screen name="Add Deck" component={AddDeck} />
    </Tab.Navigator>
  )
}

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleInitialData())
  }, [])

  return (
    <React.Fragment>
      <CustomStatusbar backgroundColor={'black'} style="light" />

      <NavigationContainer>
        <Stack.Navigator headerMode="screen">
          <Stack.Screen name="Home" component={TabNavigator} options={{ title: 'Mobile Flashcards' }} />
          <Stack.Screen name="Deck" component={DeckView} options={({ route }) => ({ title: route.params.title })} />
        </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  )
}

export default App