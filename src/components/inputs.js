import React from "react";
import Personal from "./personal";
export default function Inputs( props ){
    
    
    
    
    
    
    
    return(
        <div id='inputs'>
        <h2>inputs</h2>
        <Personal
            inputs={props.inputs}
            handleChange={props.handleChange}
            setInputs={props.setInputs}
        />
    </div>
    )
}