import React, { useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { Button, TextInput, Title } from 'react-native-paper'

function AddDeck ({ navigation }) {
  const [title, setTitle] = useState('')

  const addDeck = () => {
    setTitle('')
    // Save to database
    navigation.navigate('Decks')
  }

  return (
    <KeyboardAvoidingView>
      <Title>What's the title of your new deck?</Title>

      <TextInput label="Title" onChangeText={(title) => { setTitle(title) }} value={title} />

      <Button icon="plus" mode="contained" onPress={() => addDeck() }>Add deck</Button>
    </KeyboardAvoidingView>
  )
}

export default AddDeck