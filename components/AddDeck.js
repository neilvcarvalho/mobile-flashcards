import React from 'react'
import { KeyboardAvoidingView, View, StyleSheet } from 'react-native'
import { Text, Button, TextInput, Title } from 'react-native-paper'

export default function AddDeck () {
  return (
    <KeyboardAvoidingView>
      <Title>What's the title of your new deck?</Title>

      <TextInput label="Title" />

      <Button icon="plus" mode="contained">Add deck</Button>
    </KeyboardAvoidingView>
  )
  }