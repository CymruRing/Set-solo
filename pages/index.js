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
            deck.push({shape: shape[i], color: color[j], pattern: pattern[k], num: l});
          }
        }
      }
    }
    let shuffledDeck = [];
    for (i = 80; i >= 0; i--) {
      let j = Math.floor(Math.random() * deck.length);
      shuffledDeck.push(deck[j]);
      deck.splice(j, 1);
    }
    return shuffledDeck;
  }

  // Main App --------------------------------------------------------------------------
export default class App extends React.Component {
  constructor(props) {
    super(props);
    let initDeck = createDeck();
    let initBoard = [];
    for (let i = 0; i < 9; i++) {
      initBoard.push(initDeck.pop());
    }
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
