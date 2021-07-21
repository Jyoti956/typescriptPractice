import React, { useState } from 'react';

interface DemoProps{
    name:string;
    age:number;
    text:string
}

export default function Demo({name,age,text}:DemoProps){

    const [hide,setHide]=useState(false)
   
    const hideButton=()=>{
        setHide(true)
    }
    
        return (
            <div>
                {!hide && <h1>I am {name} Component {age} years old</h1>}
                <button onClick={hideButton}>{text}</button>
            </div>
        );
    };

