import React, { Component } from "react";

export default class App extends Component {
  state = {
    name: "Niedja",
    age: 29,
    favFood: "Strogonoff",
    favSongs: [
      "Easy on Me - Adele",
      "Rewrite the Stars - The Greatest Showman",
      "Helena - My Chemical Romance",
      "Umbrella - Rihanna",
    ],
  };
  render() {
    return (
      <div>
        <h1>Meu nome é {this.state.name}</h1>
        <h2>Eu tenho {this.state.age}</h2>
        <h3>Minha comida favorita é {this.state.favFood}</h3>
        <ul>
          <p>Minhas músicas favoritas são:</p>
          {this.state.favSongs.map((songs, id) => (
            <li key={id}>{songs}</li>
          ))}
        </ul>
      </div>
    );
  }
}

