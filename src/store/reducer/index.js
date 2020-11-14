import car1 from '../../assets/pics/car1.jpeg'
import car2 from '../../assets/pics/car2.jpeg'
import car3 from '../../assets/pics/car3.jpeg'
import car4 from '../../assets/pics/car4.jpeg'
import house1 from '../../assets/pics/house1.jpeg'
import house2 from '../../assets/pics/house2.jpeg'
// import house3 from '../../assets/pics/house3.jpeg'
import watch1 from '../../assets/pics/watch1.jpeg'
// import watch2 from '../../assets/pics/watch2.jpeg'
// import watch3 from '../../assets/pics/watch3.jpeg'
// import watch4 from '../../assets/pics/watch4.jpeg'
import bat1 from '../../assets/pics/bat1.jpeg'



const INITIAL_STATE = {
    users: [],
    current_user:{
       
    },
    items:[
        {pname:"bat",name:"usama" ,location:"karachi",pic:bat1,price:1200},
        {pname:"house",name:"usama",location:"karachi",pic:house1,price:12300},
        {pname:"house",name:"usama",location:"karachi",pic:house2,price:12400},
        {pname:"watch",name:"usama",location:"karachi",pic:watch1,price:12600},
        {pname:"car",name:"usama",location:"karachi",pic:car1,price:12700},
        {pname:"bat",name:"usama",location:"karachi",pic:bat1,price:1200},
        {pname:"house",name:"usama", location:"karachi",pic:house1,price:12300},
        {pname:"house",name:"usama", location:"karachi",pic:house2,price:12400},
        {pname:"watch",name:"usama", location:"karachi",pic:watch1,price:12600},
        {pname:"car",name:"usama", location:"karachi",pic:car1,price:12700},

    ]

}

export default (state = INITIAL_STATE,action)=>{
    // console.log("action==>",action)
    switch (action.type){
        case "SETUSER":
            return({
                ...state,
                current_user:action.payload
            })

            case "SETFIREBASEUSERS":
            return({
                ...state,
                users:action.payload
            })

            case "SETITEM":
                return({
                    ...state,
                    items:action.payload
                })
    }
    return state;

}