import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  changeSprite = (event) => {
    if (event.currentTarget.firstElementChild.firstElementChild.firstElementChild.src === this.props.pokeInfo.sprites.front) {
      event.currentTarget.firstElementChild.firstElementChild.firstElementChild.src = this.props.pokeInfo.sprites.back
    }
    else {
      event.currentTarget.firstElementChild.firstElementChild.firstElementChild.src = this.props.pokeInfo.sprites.front
    }
  }
 
  render() {
    return (
      <Card onClick={(this.changeSprite)}>
        <div>
          <div className="image">
            <img src={this.props.pokeInfo.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokeInfo.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokeInfo.stats.filter(stat => stat.name === "hp")[0].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
