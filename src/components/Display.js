import React from "react";
import CoverLetter from "./coverLetter";
export default function Display( props ){
    const {firstName,lastName,title,address,description,email,position, company, from, to, location, university, univCity, degree, subject, univFrom, univTo} = props.inputs
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
            <h3>{position}</h3>
            <h4>{company}</h4>
            <h5>{location}</h5>
            <p>{from} - {to}</p>
            <p>
    {university}
    {univCity}
    {degree}
    {subject}
    {univFrom}
    {univTo}</p>
            <CoverLetter
                inputs= {props.inputs}
            />
        </div>
    )
}