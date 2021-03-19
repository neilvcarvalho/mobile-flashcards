import React, { Component } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { Button, TextInput, Title } from 'react-native-paper'
class AddDeck extends Component {
  state = {
    title: ''
  }

  addDeck = () => {
    this.props.handleAddDeck(this.state.title)
    this.props.navigation.navigate('Decks')
  }

  render () {
    return (
      <KeyboardAvoidingView>
        <Title>What's the title of your new deck?</Title>

        <TextInput label="Title" onChangeText={(title) => { this.setState(() => ({ title: title })) }} value={this.state.title} />

        <Button icon="plus" mode="contained" onPress={() => this.addDeck() }>Add deck</Button>
      </KeyboardAvoidingView>
    )
  }
}

export default AddDeck