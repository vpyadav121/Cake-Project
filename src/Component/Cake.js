import { Component } from "react";
import {cakeDetail} from './Cake'
import { useHistory } from "react-router-dom";
import {axios} from 'axios';
import {Link} from 'react-router-dom';
import queryString from "query-string";


class Cake extends Component {

    
    constructor(props) {
        super(props)
        this.state = {}
        // this.NavigationDemo()
    }

    render() {
        return (
            <div>   
            {/* <Link to={/details?q=${this.props.cakedata.cakeid}}> */}
            <div onClick = {()=>{
            // this.NavigationDemo(this.props.cakedata.cakeid);
        }} class="card" style={{width: "15rem" , margin:"1rem"}}>
        <img style={{height:"15em"}} src={this.props.cakedata.image} class="card-img-top" alt="..."></img>
        <div class="card-body">
                <h5 class="card-title">{this.props.cakedata.name}</h5>                
                <p class="card-text">Rs{this.props.cakedata.price}</p>                
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>  
            {/* </Link> */}
      
            </div>
        )
    }
}

export default Cake;