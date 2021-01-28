// import Head from 'next/head'
// import styles from '../styles/App.module.css'
import React from 'react';

import Title from './AppComponents/Title.jsx';
import Board from './AppComponents/Board.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: [],
      board: []
    };

  }

  componentDidMount () {
    this.createDeck();
  }

  createDeck () {
    let deck = [];
    let colors = ['red', 'purple', 'green'];
    let shapes = ['diamond', 'oval', 'squiggle']
    let shades = ['solid', 'striped', 'open']
    for(var i = 0; i < 3; i++) {
      let color = colors[i];
      for(var j = 0; j < 3; j++) {
        let shape = shapes[j];
        for(var k = 0; k < 3; k++) {
          let shade = shades[k];
          for(var l = 1; l <= 3; l++) {
            deck.push([color, shape, shade, l]);
          }
        }
      }
    }
    // shuffle deck
    // console.log(deck);
  }



  render () {
    return (
      <div>
        <Title />
        <Board />
        <div>App</div>
      </div>
    )
  }
}
