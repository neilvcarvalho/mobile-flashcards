import React, { useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { Button, TextInput, Title } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { handleAddDeck } from '../actions'

function AddDeck ({ navigation }) {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()

  const submit = () => {
    dispatch(handleAddDeck(title))
    setTitle('')
    navigation.navigate('Decks')
  }

  return (
    <KeyboardAvoidingView>
      <Title>What's the title of your new deck?</Title>

      <TextInput label="Title" onChangeText={(title) => { setTitle(title) }} value={title} />

      <Button icon="plus" mode="contained" onPress={() => submit() }>Add deck</Button>
    </KeyboardAvoidingView>
  )
}

export default AddDeck