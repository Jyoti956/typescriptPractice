import React, { Component } from 'react';
import { Colors } from './Enums';
import { TextField } from '@material-ui/core'
import {Switch} from '@material-ui/core';
import {Grid,Hidden} from '@material-ui/core'
interface user {
    name: string;
    id: number;
    place?: string;
    
}
interface user2{
    value:string;
    switchVal:boolean;
}

export default class Demo2 extends Component<user,user2>{
    constructor(props: user) {
        super(props);
        this.state={
            value:"",
            switchVal:false
        };

        this.getValue=this.getValue.bind(this);
        this.getSwitch=this.getSwitch.bind(this);
    }

    getValue=(e:any)=>{
        this.setState({value:e.target.value})
     }

     getSwitch=(e:any,val:boolean)=>{
        this.setState({switchVal:val})
        console.log(val);
        
     }

    render() {
        return (
            <div>
                <h2>This is {this.props.name} with Id {this.props.id} and my favorite color is {Colors.blue}</h2>
                <TextField
                label="username"
                color="secondary"
                variant="outlined"
                value={this.state.value}
                onChange={this.getValue}/><span>{this.state.value}</span>
                <Switch
                color="secondary"
                size="small"
                onChange={this.getSwitch}/>
                <Grid item xs={12} container spacing={3} >
                    <Grid  item lg={3} xs={12} md={6}><h1 style={{backgroundColor:"yellowgreen"}}>Block1</h1></Grid>
                    <Grid  item lg={3} xs={12} md={6}><h1 style={{backgroundColor:"yellowgreen"}}>Block2</h1></Grid>
                    <Hidden  only={['sm','md']}><h1 style={{backgroundColor:"yellowgreen",flex:1}}>Block3</h1></Hidden>
                    <Grid  item lg={3} xs={12} md={6}><h1 style={{backgroundColor:"yellowgreen"}}>Block4</h1></Grid>
                </Grid>
            </div>
        )
    }
}
