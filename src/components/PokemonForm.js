import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    event.target.reset()

    fetch("http://localhost:3000/pokemon", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name, 
        stats: [{
          name: "hp",
          value: parseInt(this.state.hp)
        }],
        sprites: {
          front: this.state.frontUrl, 
          back: this.state.backUrl
        }
      })
    })
    .then(res => res.json())
    .then(pokemonObj => this.props.addPokemon(pokemonObj))
  }

  handleFormChanges = (event) => {
    switch (event.target.name) {
      case "name":
        this.setState({
          name: event.target.value
        })
        break;
      case "hp":
        this.setState({
          hp: event.target.value
        })
        break;
      case "frontUrl":
        this.setState({
          frontUrl: event.target.value
        })
        break;
      case "backUrl":
      this.setState({
        backUrl: event.target.value
      })
      break;
    }
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleFormChanges}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleFormChanges}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleFormChanges}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleFormChanges}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
