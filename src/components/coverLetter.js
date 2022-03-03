import React from "react";
import "./cover.css"
import { Paper } from "@mui/material";
export default function CoverLetter( props ){
    const {firstName,lastName,title,address,description,email,position, company, from, to, location, university, univCity, degree, subject, univFrom, univTo} = props.inputs

    return(
   
        <Paper id="cover" elevation={20}>
        
       <div id="cover-main">
       <div id='cover-header'>
        <h3 id='cover-title'>{title}</h3>
        <h1>Hello, I'm <br/>
        {firstName} {lastName}.</h1>
        </div>
        <div id="cover-desc">
            <h2>Hi, company name</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quisquam doloribus dignissimos illo. Sint iure assumenda minima ad officiis veniam vel iste explicabo accusamus consequatur? Delectus harum voluptatem vel odio?</p>
            <h3>{firstName} {lastName}</h3>
            <h4>{email}</h4>
            <h4>{address}</h4>
        </div>
       </div>
       <div id="cover-side">
           <h3>Todays Date</h3>
           <h3>name of recipient</h3>
           <h3>recipients address</h3>
       </div>
        </Paper>    
        
    )
}