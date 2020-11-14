import { Button,Card } from 'react-bootstrap';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {get_items} from '../../store/action'
import {facebook_login} from '../../store/action'
class SubChild extends Component{
    
 


    render(){
        console.log("props==>",this.props)
     
        return(
            <div >
           
             <Card style={{ width: '18rem' }}>
                 seller : {this.props.name}
             <Card.Img variant="top" src={this.props.pic} height="180"   width="300"/>
             <Card.Body>
                    <Card.Text  >
                    <h3>Price : &nbsp;Rs <strong>{this.props.price}</strong> </h3>
                   <h4> {this.props.pname} for Sale</h4>
                  <h6>{this.props.location}</h6>
                     
                    </Card.Text>
                  <Link to="/chat" > <Button  onClick={()=>this.props.facebook_login(this.props.history)} variant="primary">Start Chat</Button></Link>
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
  
  export default connect(mapStateToProps,mapDispatchToProps)(SubChild)