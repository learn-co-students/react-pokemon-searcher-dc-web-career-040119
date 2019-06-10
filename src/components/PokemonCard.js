import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
//is the reason I declare state in this manner because I only want to use it in this file and not on the whole class with constructor and super?
    state = {
      backview: false
    }


  toggleImage = () => {//handle the state and img src logic in the render func below
    if (this.state.backview !== true){
      this.setState({
        backview: true
      })
      {/* render this.props.pokemonObj.sprites.front */}

    } else {

      this.setState({
        backview: false
      })
      {/* render this.props.pokemonObj.sprites.back */}
    }

  }

  render() {

    return (
      <Card>
        <div>
          <div className="image"  onClick={this.toggleImage}>
            {this.state.backview === false ? <img alt="oh no!" src={this.props.pokemonObj.sprites.front}/> : <img alt="oh no!" src={this.props.pokemonObj.sprites.back}/>}
          </div>
          <div className="content">
            <div className="header">{this.props.pokemonObj.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemonObj.stats[this.props.pokemonObj.stats.length-1].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
