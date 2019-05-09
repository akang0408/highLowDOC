import React from 'react';
import { connect } from 'react-redux';
import { setGuessEven, setGuessOdd } from '../../actions/guess';
import gameStateReducer from '../../reducers/gameState';

const Guess = ({ guess, setGuessEven, setGuessOdd}) => {
  return (
    <div>
      <h3>Choose Even or Odd</h3>
      <div>
        <button 
          onClick={setGuessEven}
          style={guess === 'even' ? { border: '2px solid green'} : null}
        >Even</button>
        {'  '}
        <button 
          onClick={setGuessOdd}
          style={guess === 'odd' ? { border: '2px solid green'} : null}
        >Odd</button>
      </div>
    </div>
  )
}

export default connect(
  ({ gameState: { guess } }) => ({ guess }),
  { setGuessEven, setGuessOdd }
)(Guess);