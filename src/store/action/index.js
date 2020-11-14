
// import firebase from 'firebase'
import firebase from '../../config/firebase'
// import useHistory, { useHistory } from 'react-router-dom';

// const set_data=()=>{
//     return(dispatch)=>{
//         dispatch({type:"SETDATA",
//         user:{name:"humayel",email:"humayel@gmail.com"}
//     }
//         )
//         dispatch({type:"SETCHAT"})
        
//         // console.log(data)
//     }
  
// }

const get_items=()=>{
    return (dispatch)=>{
        
               let items = [{}]
                dispatch({type:"SETITEM",payload:items})
                
                // console.log(price)
            }
          
        
      
        
    
}

const get_users=()=>{
    return (dispatch)=>{
        let users = []
        firebase.database().ref('/').child('users').on('child_added',(data)=>{
            users.push(data.val())
            console.log("firebase_data=>",users)
            dispatch({type:"SETFIREBASEUSERS",payload:users})
        })
        
    }
}

const facebook_login =(history)=>{
    console.log("running")
    return (dispatch)=>{
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            var token = result.credential.accessToken;  
            var user = result.user;

            let create_user ={
                name :user.displayName,
                // email:user.email,
                profile:user.photoURL,
                uid:user.uid
            }

            firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
            .then(()=>{
                dispatch({type :"SETUSER",payload: create_user})
                alert("login successful")
                history.push('/chat')
            })

       

          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("error",errorMessage)
          });

    }
}

export {
    get_users,
    facebook_login,
    get_items
}