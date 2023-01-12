import "./Main.scss";
import React from "react";
import andilci from "../audio/charlie_andilci.mp3";
import chlastat from "../audio/charlie_chlastat.mp3";
import rozumim from "../audio/charlie_rozumim.mp3";
import hlava from "../audio/alan_hlava.mp3";
import proktolog from "../audio/alan_proktolog.mp3";
import tekutiny from "../audio/alan_tekutiny.mp3";
import kondom from "../audio/berta_kondom.mp3";
import opera from "../audio/berta_opera.mp3";
import vysavac from "../audio/berta_vysavac.mp3";
import ukol from "../audio/jake_ukol.mp3";
import cigaretka from "../audio/evelyn_cigaretka.mp3";
import herb from "../audio/herb.mp3";

class Main extends React.Component {
  playAndilci = () => {
    new Audio(andilci).play();
  };

  playChlastat = () => {
    new Audio(chlastat).play();
  };

  playRozumim = () => {
    new Audio(rozumim).play();
  };

  playHlava = () => {
    new Audio(hlava).play();
  };

  playProktolog = () => {
    new Audio(proktolog).play();
  };

  playTekutiny = () => {
    new Audio(tekutiny).play();
  };

  playKondom = () => {
    new Audio(kondom).play();
  };

  playOpera = () => {
    new Audio(opera).play();
  };

  playVysavac = () => {
    new Audio(vysavac).play();
  };

  playUkol = () => {
    new Audio(ukol).play();
  };

  playCigaretka = () => {
    new Audio(cigaretka).play();
  };

  playHerb = () => {
    new Audio(herb).play();
  };

  render() {
    return (
      <div className="xychty">
        <img
          src={require("../imgs/charlie.jpg")}
          alt="#"
          onClick={this.playAndilci}
        />
        <img
          src={require("../imgs/charlie2.jpg")}
          alt="#"
          onClick={this.playChlastat}
        />
        <img
          src={require("../imgs/charlie3.jpg")}
          alt="#"
          onClick={this.playRozumim}
        />
        <img
          src={require("../imgs/alan.jpg")}
          alt="#"
          onClick={this.playHlava}
        />
        <img
          src={require("../imgs/alan2.jpg")}
          alt="#"
          onClick={this.playProktolog}
        />
        <img
          src={require("../imgs/alan3.jpg")}
          alt="#"
          onClick={this.playTekutiny}
        />
        <img
          src={require("../imgs/Berta.jpg")}
          alt="#"
          onClick={this.playKondom}
        />
        <img
          src={require("../imgs/berta2.jpg")}
          alt="#"
          onClick={this.playOpera}
        />
        <img
          src={require("../imgs/berta3.jpg")}
          alt="#"
          onClick={this.playVysavac}
        />
        <img
          src={require("../imgs/jake.jpg")}
          alt="#"
          onClick={this.playUkol}
        />
        <img
          src={require("../imgs/evelyn.jpg")}
          alt="#"
          onClick={this.playCigaretka}
        />
        <img
          src={require("../imgs/herb.jpg")}
          alt="#"
          onClick={this.playHerb}
        />
      </div>
    );
  }
}

export default Main;
