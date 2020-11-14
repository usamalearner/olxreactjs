import { Button,Card } from 'react-bootstrap';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {get_items} from '../../store/action'
import {facebook_login} from '../../store/action'
import Item from '../item';

class Child extends Component{
//  pass=()=>{
// console.log(this.props)
// }
 


    render(){
        
     
        return(
            <div>
             {/*
             <h4> price= {this.props.price}</h4> 
             <h4>pic = <img src={this.props.pic}></img></h4> */}
             <Card style={{ width: '18rem' }}>
             <h3>Seller : {this.props.name}</h3> 
             <Card.Img variant="top" src={this.props.pic} height="180"   width="300"/>
             <Card.Body>
                 <h3>{this.props.No}</h3>
                    <Card.Text>
                    <h3>Price : &nbsp;Rs <strong>{this.props.price}</strong> </h3>
                   <h4> {this.props.pname} for Sale</h4>
                  <h6>{this.props.location}</h6>
                  
                    </Card.Text>
                    
                  <Link to={{pathname:`/item/${this.props.pname}`, name: this.props.name,pname: this.props.pname, price: this.props.price ,pic : this.props.pic, location : this.props.location }} ><Button variant="primary">Details</Button></Link>
            </Card.Body>
            </Card>
        
            

             
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
  
  export default connect(mapStateToProps,mapDispatchToProps)(Child)