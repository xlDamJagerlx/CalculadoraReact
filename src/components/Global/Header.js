import React,{Component} from 'react';
import logo from './images/logo.svg'
import'./css/header.css';

class Header extends Component{
  render() {   
    return (
        <div className="Header">
           <div className="Logo">
             <img src={logo} alt="logo"/>
            <h2>Trabajo Grupal con React JS</h2>
           </div>          
        </div>
    );
  }
}


export default Header;
