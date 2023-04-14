
import React, { Component } from "react";
import TitreH1 from "./components/Titre/TitreH1";
import Bouton from "./components/Bouton/Bouton";
import Livres from "./containers/Livres/Livres";

class App extends Component {
  state= {
    ajoutLivre : false
  }
  handleClicAjoutLivre = () =>{
    this.setState((oldState, props) => {
      return {ajoutLivre: !oldState.ajoutLivre}
    })
  }
  render() {
  return (
    <div className="container">
   <TitreH1 typeTit ="border border-dark  p-2 m-2 bg-primary rounded text-center text-white">Page listant les Livres </TitreH1>
   <Livres ajoutLivre={this.state.ajoutLivre} fermerAjoutLivre={() => this.setState({ajoutLivre:false})} />
   <Bouton 
   typeBtn ="btn btn-success w-100" 
   clic={this.handleClicAjoutLivre}>{!this.state.ajoutLivre ? "Ajouter" : "Fermer L'Ajout"} </Bouton>
   
    </div>
  );
  }
}

export default App;


