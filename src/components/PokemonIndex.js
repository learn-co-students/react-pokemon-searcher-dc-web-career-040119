import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component { 
  constructor() {
    super() 
    this.state ={
      pokemon: [], 
      search: ""
    }
  }

  //add newly added pokemon to state pokemon objects array
  addPokemon = (pokemonObj) => {
    let pokeCopy = this.state.pokemon 
    pokeCopy.push(pokemonObj)

    this.setState({
      pokemon: pokeCopy
    })
  }

  //change Search state value 
  handleSearch = (data) => {
    this.setState({
      search: data.value
    })
  }

//fetch objects from server
  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(pokemon => this.setState({pokemon:pokemon}))
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce((event, data) => this.handleSearch(data), 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.search))}/>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
