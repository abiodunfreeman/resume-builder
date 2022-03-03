import React from "react";

export default function Display( props ){
    const {firstName,lastName,title,address,description,email} = props.inputs
    console.log(props.inputs)
    // console.log(firstName)

    
    
    // const inputs = [props.inputs.firstName]
    
    return(
        <div id='display'>
            <h2>Display</h2>
            <ul>
                <li>Name - {firstName} {lastName} </li>
                <li>{title}</li>
                <li>{address}</li>
                <li>{email}</li>
            </ul>
            <p>{description}</p>
        </div>
    )
}