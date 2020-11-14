import React, { Component } from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from "../containers/home";
import Chat from "../containers/chat";
import Item from '../containers/item'



class AppRouter extends Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={Home}/>
                <Route  path="/chat" component={Chat}/>
                <Route  path="/item" component={Item}/>
            </Router>
        )
    }
}
 export default AppRouter;