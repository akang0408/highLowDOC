import React from 'react';
import { connect } from 'react-redux';
import { collapseInstructions, expandInstructions } from '../../actions/settings'

const Instructions = props => {

  return (
   <div>
     {
       props.instructionsExpanded ? (
          <div>
            <h3>Instructions</h3>
            <p>This game is called Evens or Odds. It goes like this</p>
            <p>This deck is shuffled. You will then choose whether you think the next card will be even or odd.</p>
            <p>Select a choice on every draw and see how many consecutive guesses you get right!</p>
            <p>(Face cards do not count as anything and will not have any bearing on your guess)</p>
            <button onClick={props.collapseInstructions}>Collapse Instructions</button>
          </div>
         ) : (
           <div>
             <h3>Instructions</h3>
             <p>This game is called Evens or Odds. It goes like this...</p>
             <button onClick={props.expandInstructions}>Expand Instructions</button>
           </div>
         )
      }
   </div>
 );
}


const mapStateToProps = state => {
  console.log('instructions state', state)
  return { instructionsExpanded: state.settings.instructionsExpanded }
}
const mapDispatchToProps = dispatch => {
  return {
    collapseInstructions: () => dispatch(collapseInstructions()),
    expandInstructions: () => dispatch(expandInstructions())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Instructions);