import React from 'react';
import Proptypes from 'prop-types';

import "./Button.css"

export default class Button extends React.Component {

    static propTypes = {
        name: Proptypes.string,
        orange: Proptypes.bool,
        wide: Proptypes.bool,
        clickHandler: Proptypes.func
    }
     
    handleClick=()=>{
        this.props.clickHandler(this.props.name)
    }
    render(){
        const className=["component-button",
            this.props.orange? "orange":"",
            this.props.wide? "wide": "",
    ]
        return (
            <div className={className.join(" ").trim()}>
                <button onClick={this.handleClick}>{this.props.name}</button>
            </div>
        )
    }
}