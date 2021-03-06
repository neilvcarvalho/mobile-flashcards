import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as PaperProvider } from 'react-native-paper'
import Decks from './components/Decks'
import AddDeck from './components/AddDeck'
import Constants from 'expo-constants'

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

export default function App() {
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
          <Tab.Screen name="Decks" component={Decks} />
          <Tab.Screen name="Add Deck" component={AddDeck} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
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
