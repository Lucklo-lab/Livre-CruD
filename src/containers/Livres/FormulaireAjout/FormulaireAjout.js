import React, { Component } from 'react';
import Bouton from '../../../components/Bouton/Bouton';

class FormulaireAjout extends Component {
    state = {
        titreSaisi: "",
        auteurSaisi: "",
        nbPagesSaisi : ""
    }
    handleValidationForm = (event) => {
        event.preventDefault();
        this.props.validation(this.state.titreSaisi, this.state.auteurSaisi, this.state.nbPagesSaisi);
        this.setState({
            titreSaisi: "",
            auteurSaisi: "",
            nbPagesSaisi : ""
        })
    }
    render() { 
        return (
           <>
            <h2 className='text-center text-primary' style={{fontFamily:'Sigma One'}}>Affichage du Formulaire d'ajout </h2>
            <form>
                <div className="form-group">
                    <label htmlFor="titre" className="form-label">Titre du livre</label>
                    <input type="text"
                     className="form-control" 
                     id='titre'
                     value={this.state.titreSaisi}
                     onChange={(event)=> this.setState({titreSaisi:event.target.value}) } />
                    
                </div>

                <div className="form-group">
                    <label htmlFor="auteur" className="form-label">Nom de L'Auteur</label>
                    <input type="text" 
                    className="form-control"
                    id='auteur'
                    value={this.state.auteurSaisi}
                     onChange={(event)=> this.setState({auteurSaisi:event.target.value}) } />
                    
                </div>

                <div className="form-group">
                    <label htmlFor="nbPages" className="form-label">Nombre de Page du Livre</label>
                    <input type="numberS" 
                    className="form-control"
                     id='nbPages'
                     value={this.state.nbPagesSaisi}
                     onChange={(event)=> this.setState({nbPagesSaisi:event.target.value}) } />
                    
                </div>
                
                <Bouton typeBtn="btn btn-primary" clic={this.handleValidationForm}>Valider</Bouton> 
                </form>
           </>
        );
    }
}

export default FormulaireAjout;