import React from "react";



const alert = (props) => {
    const mesCss =`alert ${props.typeAlert}`;
    return (
        
        <div class={mesCss}  role="alert">
        {props.children}
        </div>
    
);}

export default alert;