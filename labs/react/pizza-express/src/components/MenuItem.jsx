import React, { Component } from 'react';

import MenuList from "./MenuList"

class MenuItem extends Component {
    render(){
        return(
            <div className="menu-item" id="menu">
                
               <div id="menu" className="menu-item-name">
                    {this.props.name}
                </div>
                <div>
                    <strong>{this.props.price}</strong>
                </div>
                <div className="menu-description">
                    {this.props.description}
                </div>
                <img src={this.props.image} alt="pizza"/>

           </div>
        )
    }
}

export default MenuItem;