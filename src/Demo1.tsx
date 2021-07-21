import React, { useState } from 'react';
import {Jobstatus} from './components/Enums';

interface HeaderProps{
    buttonText:string;
}

export default function Demo1(props:HeaderProps){
    const[color,setColor]=useState("green");

    const style = {
        color: color,
        fontSize: 20
      };
   
    const changeColor=()=>{
        setColor("red")
    }
        return (
            <div>
                <h1 style={style}>I am Demo1 Component</h1>

                <button onClick={changeColor}>{props.buttonText}</button>
            </div>
            
        );
    };