import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Decks from './components/Decks'
import AddDeck from './components/AddDeck'

const Tab =
  Platform.OS === 'ios'
    ? createBottomTabNavigator()
    : createMaterialTopTabNavigator()

export default function App() {
  return (
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
          <Tab.Screen name="Decks" component={Decks} />
          <Tab.Screen name="Add Deck" component={AddDeck} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
