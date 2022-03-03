import { TextField } from "@mui/material";
import React, { useState } from "react";

export default function Personal( props ){

console.log(props)

const {firstName,lastName,title,address,description,email} = props.inputs


    return(
        <div id="personal" className="inputDiv">

            <TextField label='First Name'
                value={firstName}
                variant='outlined'
                name="firstName"
                required
                fullWidth
                onChange={props.handleChange} 
            />
            <TextField label='Last Name'
                 value={lastName}
                variant='outlined'
                name="lastName"
                required
                fullWidth
                onChange={props.handleChange} 
            />
            <TextField label='Title'
                value={title}
                variant='outlined'
                name="title"
                fullWidth
                onChange={props.handleChange} 
            />
            <TextField label='email'
                required
                value={email}
                variant='outlined'
                name="email"
                fullWidth
                onChange={props.handleChange} 
            />
             <TextField label='address'
                
                value={address}
                variant='outlined'
                name="address"
                fullWidth
                onChange={props.handleChange} 
            />
            <TextField label='Description'
            value={description}
                variant='outlined'
                name="description"
                fullWidth
                multiline
                helperText='Add a short description about who you are'
                rows={4}
                onChange={props.handleChange} 
            />
            
        </div>
    )
}