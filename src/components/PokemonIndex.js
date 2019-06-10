import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor(){
    super()

     this.state = {
      allPokemon: [],
      searchTerm: '',
      filteredPokemon: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemonObjs => {
      this.setState({
        allPokemon: pokemonObjs
      })
    })
  }

  //according to the semantic docs, onSearchChange takes two arguments, the event and the data. If you pass both in, then you can properly access the value of searchTerm (data.value vs event.target.value)
  changeSearchTerm = (event, data) => {
    const searchTerm = data.value


    this.setState({
      searchTerm: searchTerm
    })
  }

//we have to call this.filteredPokemon() within <PokemonCollection/> so that it will return the filtered array (otherwise that component would just so allPokemon)
  filteredPokemon = () => {
    return this.state.allPokemon.filter(pokemon =>
      pokemon.name.includes(this.state.searchTerm))
  }

  updatePokemonList = (data) => {
    this.setState({
      allPokemon: [...this.state.allPokemon, data]
    })
  }

  render() {

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.changeSearchTerm, 500)} showNoResults={false} />
        <br />
        <PokemonCollection allPokemon={this.filteredPokemon()} />
        <br />
        <PokemonForm updatePokemonList={this.updatePokemonList}/>
      </div>
    )
  }
}

export default PokemonPage
