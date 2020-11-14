import React, { Component } from 'react'
// import { Button,Card } from 'react-bootstrap';
// import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {get_items,facebook_login} from '../../store/action'
import Header from '../home/header';
import SubChild from './subchild'
import Child from '../home/childmain'


class Item extends  Component {

    goto_home=()=>{
        this.props.history.push('/')
    }
    // get_props=()=>{

    // }
    render(){
        
      return(
        <div>
         {/* <h1> Item page</h1> */}
         <button onClick={this.goto_home}>Home</button>
        <Header ></Header>
        <SubChild name={this.props.location.name  } pname={this.props.location.pname} price={this.props.location.price } pic=  {this.props.location.pic } location=  {this.props.location.location }></SubChild>
      
        
        
     
        </div>
      )
    }
  }
  const mapStateToProps = (state)=>({
    users : state.users,
  items:state.items
  })
  
  const mapDispatchToProps = (dispatch)=>({
    get_items: ()=>dispatch(get_items()),
    facebook_login:(history)=>dispatch(facebook_login(history))
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(Item)
  
