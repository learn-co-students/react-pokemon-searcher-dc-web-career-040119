import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      front: '',
      back: ''
    }
  }
//function to change state of name, hp, etc, which uses the onSubmit event as a trigger

  makeChangeToName = (event, data) => {
    event.persist()
   this.setState({
       name: data.value
     })
   }

   makeChangeToHp = (event, data) => {
     event.persist()
    this.setState({
        hp: parseInt(data.value, 10)
      })
    }

    makeChangeToFrontUrl = (event, data) => {
      event.persist()
     this.setState({
         front: data.value
       })
     }

     makeChangeToBackUrl = (event, data) => {
       event.persist()
      this.setState({
          back: data.value
        })
      }

      // {
      //   "name": "mew",
        //   "stats": [
      //     {
      //       "value": 100,
      //       "name": "speed"
      //     },
      //     {
      //       "value": 100,
      //       "name": "special-defense"
      //     },
      //     {
      //       "value": 100,
      //       "name": "special-attack"
      //     },
      //     {
      //       "value": 100,
      //       "name": "defense"
      //     },
      //     {
      //       "value": 100,
      //       "name": "attack"
      //     },
      //     {
      //       "value": 100,
      //       "name": "hp"
      //     }
      //   ],
      //   "sprites": {
      //     "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
      //     "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/151.png"
      //   }
      // }

//function that passes the state I just updated within the body of a post fetch
//this one uses the 'event' of hitting the submit btn
  handleSubmit = event => {
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({
        name: this.state.name,
        stats: [{value: this.state.hp, name: 'hp'}],
        sprites: {
          front: this.state.front,
          back: this.state.back
        }
      })
    })
    .then(res => res.json())
    .then(res => this.props.updatePokemonList(res))
    
    this.setState({
        name: '',
        hp: '',
        front: '',
        back: ''
      }
    )
  }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.makeChangeToName}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.makeChangeToHp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.makeChangeToFrontUrl}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.makeChangeToBackUrl} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
