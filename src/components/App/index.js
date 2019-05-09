import React from 'react';
import { connect } from 'react-redux';
import { startGame, cancelGame } from '../../actions/settings';
import { fetchNewDeck } from '../../actions/deck';
import fetchStates from '../../reducers/fetchStates';
import Instructions from '../Instructions';
import DrawCard from '../DrawCard';
import Card from '../Card';
import Guess from '../Guess';
import GameState from '../GameState';
import { AppTitle } from './styles';

class App extends React.Component {
  startGame = () => {
    this.props.startGame();
    this.props.fetchNewDeck();
  }

  render() {
    if (this.props.fetchState === fetchStates.error) {
      return (
        <div>
          <p>Please try reloading the app. An error has occured.</p>
          <p>{this.props.message}</p>
        </div>
      )
    }
    console.log('this', this)
    return (
      <div>
        {/* eslint-disable-next-line  */}
        <AppTitle> ♡ ♤ Guessing Game ♢ ♧ </AppTitle>
        {
          this.props.gameStarted ? (
            <div>
              <h3>Let the games begin!</h3>
              <GameState />
              <Guess />
              <br />
              <DrawCard />
              <hr />
              <Card />
              <hr />
              <button onClick={this.props.cancelGame}>Cancel Game</button>
            </div>
          ) : (
            <div>
              <Instructions />
              <hr />
              <button onClick={this.startGame}>Start Game</button>
            </div>
          )
        }
      </div>
    );  
  }
}


const mapStateToProps = state => {

  const {
    settings: { gameStarted },
    deck: { fetchState, message },
  } = state;

  return { gameStarted, fetchState, message};
}

// const mapDispatchToProps = dispatch => {
//   return {
//     startGame: () => dispatch(startGame()),
//     cancelGame: () => dispatch(cancelGame()),
//     fetchNewDeck: () => dispatch(fetchNewDeck()),
//   }
// }

const connector = connect(mapStateToProps, {startGame, cancelGame, fetchNewDeck}) 

export default connector(App);