import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
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
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.form}>
        <TextInput label="What's the title of the your new deck?" onChangeText={(title) => { setTitle(title) }} value={title} />
      </View>

      <View style={styles.buttonGroup}>
        <Button icon="plus" mode="contained" onPress={submit}>Add deck</Button>
      </View>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '5%'
  },
  form: {
    flex: 3
  },
  buttonGroup: {
    flex: 1
  }
})

export default AddDeck