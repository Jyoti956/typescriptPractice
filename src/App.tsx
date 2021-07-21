import React,{useState} from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import Demo1 from './Demo1';
import Demo from './components/Demo';
import Demo2 from './components/Demo2';
import Table from './components/Table'
import MoodTwoToneIcon from '@material-ui/icons/MoodTwoTone';
function App(){

   const[newText,setNewText]=useState("");
   const changeText=()=>{
      setNewText("Hello Jyoti")
   }
  return (
          <div className="App">
            <h1>{newText}</h1>
            <Button variant="contained" color="secondary" onClick={changeText} startIcon={<MoodTwoToneIcon/>}> Say Hello</Button>
             <Demo1 buttonText="Demo1"/>
            <Demo name="Demo" age={25} text="Hide Me!!"/>
            <Demo2 name="Demo2" id={101}/>
            <Table/>
          </div>
          );
};

export default App;
