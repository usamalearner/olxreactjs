import React, { Component } from 'react'
import './style.css';
import {connect} from 'react-redux'
import {get_items} from '../../store/action'
import {facebook_login} from '../../store/action'
// import { Button,Card } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import Child from './childmain'
import slider from '../../assets/ppics/sl2.jpg'
import ad from '../../assets/ppics/ad.png'
import car1 from '../../assets/pics/car1.jpeg'
import car2 from '../../assets/pics/car2.jpeg'
import car3 from '../../assets/pics/car3.jpeg'
import car4 from '../../assets/pics/car4.jpeg'
import house1 from '../../assets/pics/house1.jpeg'
import house2 from '../../assets/pics/house2.jpeg'
import house3 from '../../assets/pics/house3.jpeg'
import watch1 from '../../assets/pics/watch1.jpeg'
import watch2 from '../../assets/pics/watch2.jpeg'
import watch3 from '../../assets/pics/watch3.jpeg'
import watch4 from '../../assets/pics/watch4.jpeg'
import bat1 from '../../assets/pics/bat1.jpeg'
// import logoimage from '../../assets/ppics/logo.png'
import './header.css'
import logoimage from '../../assets/ppics/logo.png'


class Home extends Component {

  static getDerivedStateFromProps(props,state){
    console.log("props==>",props)
    return{

    }
  }
    render(){
      // let user = {}
      // console.log("userss==>",this.props.users)
    return (
    <div >
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
                      <button className="right" id="leftt" onClick={()=>this.props.facebook_login(this.props.history)}>facebook login</button>
                      <button className="right sell" id="leftt">&nbsp;+ SELL &nbsp;</button>
                      </div>
                  </nav>
        <div>
     
                  <div>
                  <Carousel>
                  <Carousel.Item>
                  <img
                  className="d-block w-100"
                  src={slider}
                  alt="First slide"
                  />
                  <Carousel.Caption>
                  </Carousel.Caption>
                  </Carousel.Item>
                  </Carousel>
                  </div>
                  <div>
                  <Carousel>
                  <Carousel.Item>
                  <img
                  className="ad d-block w-100"
                  src={ad}
                  // height="220"
                  alt="First slide"
                  />
                  <Carousel.Caption>
                  </Carousel.Caption>
                  </Carousel.Item>
                  </Carousel>

                  </div>
         
          <div className="all">
           <h2>Fresh Recommendations</h2>
           <br></br>
           <div class="flexbox-container">
           <ul className="responn">
        {this.props.items.map((items,index)=>{
          return <li className="ind" key={index}>
            {console.log(items)}
          <div ><Child No={index+1}  pic={items.pic} location={items.location} name={items.name} pname={items.pname} price={items.price}/></div></li>
        })}
        </ul>
            {/* <div><Child pic={car1} location="karachi" name="car" price={1200}/></div>
            <div> <Child pic={watch1} location="karachi" name="watch" price="156789"/></div>
            <div><Child pic={car2} location="karachi" name="car" price="180000"/></div>
            <div><Child pic={house1} location="karachi" name="house" price="1100000"/></div>
            <div> <Child pic={car3}  location="karachi" name="car" price="456789"/></div>
            <div><Child pic={house2} location="karachi" name="house" price="1109800"/></div>
            <div><Child pic={house3} location="karachi" name="house" price="1176500"/></div>
            <div> <Child pic={bat1}  location="karachi" name="bat" price="67890"/></div>
            <div><Child pic={car4} location="karachi" name="Car" price="76000"/></div>
            <div> <Child pic={watch2} location="karachi" name="watch" price="156789"/></div>
            <div> <Child pic={watch3} location="karachi" name="watch" price="156700"/></div>
            <div> <Child pic={watch4} location="karachi" name="watch" price="156779"/></div> */}
            </div>
            </div>
            </div>
            {/* <li key={index}>{items.name}</li> */}
           
     
       
      
        {/* {console.log(items[0].name)} */}
            
            </div>
      );
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

export default connect(mapStateToProps,mapDispatchToProps)(Home)