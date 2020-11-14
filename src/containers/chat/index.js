import React from 'react'
import {connect} from 'react-redux'
import {get_users} from '../../store/action'

class Chat extends React.Component{

    componentDidMount(){
        this.props.get_users()
    }
    render(){
        let user = this.props.current_user
        console.log("props==>",this.props.users)
        return(
            <div>
                
                <h1> wellcome!!!   {user.name}</h1>
                    <img src={user.profile}></img>

                   
                    
                
            </div>
        )
    }
}


const mapStateToProps = (state)=>({
    current_user : state.current_user,
    users :state.users
  })
  
  const mapDispatchToProps = (dispatch)=>({
   
    get_users:()=>dispatch(get_users())
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(Chat)