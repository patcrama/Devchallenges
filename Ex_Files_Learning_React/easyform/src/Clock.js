import React, { Component } from 'react';
import Panel from './Panel';
import Display from './Display';

class Clock extends Component 
//function Clock (props) 
{

    constructor(props) {
        super();
        this.state={
            date: new Date(),
            isDateVisible: true
        };
        this.toggleDate= this.toggleDate.bind(this);
    }

    
    componentDidMount() {
        this.startTime();
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
   
    startTime(){
        this.timer= setInterval(()=>{
            this.setState(() => ({date: new Date()}))
        },1000)
    }
    toggleDate() {
        this.setState((prevstate) => ({isDateVisible: !prevstate.isDateVisible}))
    }
    render(){
    return (
        <div>
            <Panel toggleDate={this.toggleDate} dateOn={this.state.isDateVisible}/>
           <Display date={this.state.date} isDateVisible={this.state.isDateVisible}/>
        </div>
    );}
}

export default Clock;