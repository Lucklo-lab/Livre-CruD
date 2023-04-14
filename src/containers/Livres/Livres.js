import React, { Component } from 'react';
import Livre from './Livre/Livre';
import FormulaireAjout from './FormulaireAjout/FormulaireAjout';
import FormulaireModification from "./FormulaireModification/FormulaireModification";
import Alert from "../../components/Alerte/Aler"
class Livres extends Component {
    state = {
        livres : [
            {id:1, titre:"Biographie De Tata Diane", auteur:"Loic Tchami", nbPages:"200"},
            {id:3, titre:"Le Cameroun du 19eme", auteur:"Albert Patrick", nbPages:"500"},
            {id:5, titre:"Le monde des animaux", auteur:"Marc Merlin", nbPages:"250"},
            {id:8, titre:"Le Virus d'asie", auteur:"Tya Milo", nbPages:"120"}

        ],
        lastIdLivre : 8,
        idLivreAModifier :0,
        alertMessage: null
    }

handleSuppressionLivre = (id) => {
   const livreIndexTab = this.state.livres.findIndex(l => {
    return l.id === id;
   })

   const newLivres = [...this.state.livres];
   newLivres.splice(livreIndexTab,1);

   this.setState({livres:newLivres,
                  alertMessage:{
                  message:"Suppression Effectuee",
                  type: 'alert-danger'
                }
});
}

handleAjoutLivre = (titre, auteur , nbPages) => {
    const newLivre = {
        id: this.state.lastIdLivre + 1,
        titre:titre, 
        auteur:auteur, 
        nbPages: nbPages
    };

    const newListeLivres = [...this.state.livres];
    newListeLivres.push(newLivre);

    this.setState(oldState => {
        return{
            livres: newListeLivres,
            lastIdLivre: oldState.lastIdLivre + 1,
            alertMessage:{
           message: "Ajout Effectuee",
            type: 'alert-success'
        }
        }
    })
    this.props.fermerAjoutLivre();
}
   
    handleModificationLivre = (id, titre, auteur, nbPages) => {
        const caseLivre = this.state.livres.findIndex(l =>{
            return l.id === id;
        });

        const newLivre = { id, titre, auteur, nbPages};

        const newListe = [...this.state.livres];
        newListe[caseLivre] = newLivre;

        this.setState({
            livres: newListe,
            idLivreAModifier : 0,
            alertMessage:{
               message: "Modification Effectuee",
               type: 'alert-warning'
            }
        })

    }


    render() { 
        return (
            <>
            
            {this.state.alertMessage && <Alert typeAlert={this.state.alertMessage.type}>{this.state.alertMessage.message}</Alert>}
           <table className='table text-center'>
           <thead>
            <tr className='table-dark'>
                <th>Titre</th>
                <th>Auteur</th>
                <th>Nombre de pages</th>
                <th colSpan='2'>Actions</th>
            </tr>
           </thead>
           <tbody>
           {
            this.state.livres.map(livre => {
                if(livre.id !== this.state.idLivreAModifier)
                {
                return (
                    <tr key={livre.id}>
                    <Livre 
                        titre={livre.titre}
                        auteur={livre.auteur}
                        nbPages={livre.nbPages}
                        suppression={() =>this.handleSuppressionLivre(livre.id)}
                        modification={() => this.setState({idLivreAModifier:livre.id})}
                    />
                    </tr>
                   
                );
                 } else {
                    return (
                        <tr key={livre.id}>
                        < FormulaireModification
                        id={livre.id}
                        titre={livre.titre}
                        auteur={livre.auteur}
                        nbPages={livre.nbPages}
                        validationModification={this.handleModificationLivre}
                     />
                     </tr>
                     );

                }
            })
           }
           
           
           </tbody>
        </table>
        {this.props.ajoutLivre && <FormulaireAjout validation = {this.handleAjoutLivre} />}
        </>
        );
    }
}

export default Livres;

// a mettre a la ligne 86 {this.state.alertMessage && <Alert typeAlert={this.state.alertMessage.type}>{this.state.alertMessage.message}</Alert>}