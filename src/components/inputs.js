import React from "react";
import Personal from "./personal";
import Experience from "./experience";
import Education from "./education";
export default function Inputs( props ){
    
    
    
    
    
    
    
    return(
        <div id='inputs'>
       
        <form>
            <h2>Personal</h2>
            <Personal
            inputs={props.inputs}
            handleChange={props.handleChange}
            setInputs={props.setInputs}
            />
            <h2>Experience</h2>
            <Experience
            inputs={props.inputs}
            handleChange={props.handleChange}
            setInputs={props.setInputs}
            />
            <h2>Education</h2>
            <Education
            inputs={props.inputs}
            handleChange={props.handleChange}
            setInputs={props.setInputs}
            />
        </form>
    </div>
    )
}