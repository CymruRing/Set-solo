// import Head from 'next/head'
// import styles from '../styles/App.module.css'
import React from 'react';

import Board from '../comps/Board.js';

  // create deck and shuffle for game start/restart
  const createDeck = () => {
    let color = ['red', 'purple', 'green'];
    let shape = ['diamond', 'oval', 'squiggle']
    let pattern = ['solid', 'stripes', 'empty']
    let deck = [];
    // create deck
    for(var i = 0; i < 3; i++) {
      for(var j = 0; j < 3; j++) {
        for(var k = 0; k < 3; k++) {
          for(var l = 1; l <= 3; l++) {
            deck.push({color: color[i], shape: shape[j], pattern: pattern[k], num: l});
          }
        }
      }
    }
    // shuffle deck
    for (let i = deck.length; i >= 0; i--) {
      let j = Math.floor(Math.random() * i);
      [deck[i], deck[j]] = [deck[j], deck[i]]; 
    }
    return deck;
  }

export default class App extends React.Component {
  constructor(props) {
    super(props);
    let initDeck = createDeck();
    let initBoard = [];
    // for (let i = 0; i < 12; i++) {
    //   initBoard.push(initDeck.pop());
    // }
    // for testing
    initBoard.push(
      {color: 'red', shape: 'diamond', pattern: 'stripes', num: 1},
      {color: 'green', shape: 'diamond', pattern: 'stripes', num: 2},
      {color: 'blue', shape: 'diamond', pattern: 'stripes', num: 1},
      {color: 'blue', shape: 'oval', pattern: 'stripes', num: 1},
      {color: 'red', shape: 'oval', pattern: 'stripes', num: 2},
      {color: 'green', shape: 'oval', pattern: 'stripes', num: 2},
      {color: 'green', shape: 'squiggle', pattern: 'stripes', num: 1},
      {color: 'blue', shape: 'squiggle', pattern: 'stripes', num: 2},
      {color: 'red', shape: 'squiggle', pattern: 'stripes', num: 3},
    );
    this.state = {
      deck: initDeck,
      board: initBoard,
    };
    
  }

  // Test for valid set given input of 3 cards
  isSet(cards) {
    if(cards.length !== 3) {
      return false;
    }
    let allSame = 0;
    let allDifferent = 0;
    let properties = ['color', 'shape', 'shade', 'count'];
    for(var i in properties) {
      if(cards[0][i] == cards[1][i] == cards[2][i]){
        allSame += 1;
      } else if (cards[0][i]!= cards[1][i] != cards[2][i]) { // test
        allDifferent += 1;
      }
    }
    if (allSame == 3 || allDifferent == 4) {
      return true;
    }
    return false;
  }

  // test if there are any sets on the board
  // if false deal 3 more cards to max 15
  // if 15 and false game over
  validSetsExist() {
    
  }

  render () {
    return (
      <div>
        <Board cards={this.state.board} />
      </div>
    )
  }
}
