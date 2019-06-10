import React, {Component} from 'react'
import PokemonIndex from './components/PokemonIndex'
import './App.css'

export default class App extends Component {

    render(){
      return(
      <div className="App">
      <PokemonIndex />
      </div>
    )
  }
}
