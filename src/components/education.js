import { TextField } from "@mui/material";
import React from "react";


export default function Education ( props ){
    const {university, univCity, degree, subject, univFrom, univTo} = props.inputs





    return(
        <div className="inputDiv education">

            <div className="field">
             <TextField
                label='university'
                value={props.inputs.university}
                name='university'
                variant='outlined'
                fullWidth
                onChange={props.handleChange} 
            />
            </div>
            <div className="field">
             <TextField
                label='univCity'
                value={props.inputs.univCity}
                name='univCity'
                variant='outlined'
                fullWidth
                onChange={props.handleChange} 
            />
            </div>
            <div className="field">
             <TextField
                label='degree'
                value={props.inputs.degree}
                name='degree'
                variant='outlined'
                fullWidth
                onChange={props.handleChange} 
            />
            </div>
            <div className="field">
             <TextField
                label='subject'
                value={props.inputs.subject}
                name='subject'
                variant='outlined'
                fullWidth
                onChange={props.handleChange} 
            />
            </div>
            <div className="field">
             <TextField
                label='univFrom'
                value={props.inputs.univFrom}
                name='univFrom'
                variant='outlined'
                fullWidth
                onChange={props.handleChange} 
            />
            </div>
            <div className="field">
             <TextField
                label='univTo'
                value={props.inputs.univTo}
                name='univTo'
                variant='outlined'
                fullWidth
                onChange={props.handleChange} 
            />
            </div>

        </div>
       
    )
}