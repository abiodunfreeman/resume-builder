import { TextField } from "@mui/material";
import React from "react";

export default function Experience ( props ){
    return(
        <div className="inputDiv experience">
            <h1>Experience</h1>
            <div className='field'>
            <TextField
                
                label='position'
                value={props.inputs.position}
                name='position'
                variant='outlined'
                fullWidth
                onChange={props.handleChange} 
            />
            </div>
           <div className='field'>
            <TextField
                className='textfield'
                label='company'
                name='company'
                value={props.inputs.company}
                variant='outlined'
                fullWidth
                onChange={props.handleChange} 
            />
            </div>
            <div className='field'>
             <TextField
                className='textfield'
                label='location'
                name='location'
                value={props.inputs.location}
                variant='outlined'
                fullWidth
                onChange={props.handleChange} 
            />
            </div>
            <div className='field'>
             <TextField
                className='textfield'
                label='From'
                name='from'
                value={props.inputs.from}
                variant='outlined'
                fullWidth
                onChange={props.handleChange} 
            />
            <div className='field'>
             <TextField
                className='textfield'
                label='To'
                name='to'
                value={props.inputs.to}
                variant='outlined'
                fullWidth
                onChange={props.handleChange} 
            />
            </div>
            </div>
            <p>company name, City Name, From , To</p>
        </div>
    )
}