import React from "react";
//import { reactSelectStyleCustom, reactSelectStyleDefault } from '~/helper/const'


const Bouton = (props) =>{
    
 // const btnCss =  '${props.typeBtn}';// eslint-disable-next-line
  return  <button className={props.typeBtn} onClick={props.clic} >{props.children}</button>
};

export default Bouton;