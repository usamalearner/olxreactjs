import React, { Component } from 'react';
import './header.css'
import logoimage from '../../assets/ppics/logo.png'


class Header extends Component{
  render(){


      return (
  
        <nav className="navbar  navbar-light bg-light">
          <a className="navbar-brand" href="#"><img className="logoo" src={logoimage} alt=""/></a>
         
        <div className="short">  <form className="form-inline  my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Pakistan" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            </div>
            &nbsp;&nbsp;&nbsp;
            <div className="longg">
            <form className="form-inline  my-2 my-lg-0">
              <input className="long form-control mr-sm-2" type="search" placeholder="Find Cars,Mobile phones and more .." aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            </div>
            <div>
            <button className="right" id="leftt">Login</button>
            <button className="right sell" id="leftt">&nbsp;+ SELL &nbsp;</button>
            </div>
        </nav>
 
      )}}
      // class Headersub extends Component{
      //  render(){
      //    return(
      //      <div></div>
      //    )
      //  }
      // }

  export default Header;