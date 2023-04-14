import React from "react";
import Bouton from '../../../components/Bouton/Bouton';
const livre = (props) =>{
    return(
        <>
    <td>{props.titre}</td>
    <td>{props.auteur}</td>
    <td>{props.nbPages}</td>
    <td><Bouton typeBtn="btn btn-warning" clic ={ props.modification}>Modification</Bouton></td>
    <td><Bouton typeBtn="btn btn-danger" clic ={ props.suppression}>Suppression</Bouton></td>
        </>
    );
   

};

export default livre;