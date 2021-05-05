import {Component} from "react";
// import {axios} from "axios";
import axios from "axios";
class Card extends Component{
    cakes  = [];
    constructor(props){
        super(props);
        this.state = {name: ""};

    }
    componentDidMount(){
   
           
        //hit karke cake laker aayege
        let apiurl="https://apifromashu.herokuapp.com/api/allcakes"
        axios({
            url:apiurl
        }).then((response)=>{

            console.log("response jo backend se hai all api se",response.data.data[0]);
            console.log(response.data.data.length)
        
                for (let value of response.data.data) {
                    console.log(value);
                      this.cakes.push(<p>{` ${value.name}`}</p>)
                      console.log(this.cakes)
                }

            
        },(error)=>{
            console.log("error from all cakes api",console.error)
        })
    }

    


render()
{
    return(
    <div class = "cakeData">
        <div className ="row">
     <div class="card" style={{width: "17rem"}}>
    <img src="cake.jpg" class="card-img-top" alt="cake"></img>
   <div class="card-body">
    <div class="card-title">{this.cakes}</div>
    <p class="card-text">Rs-500/-</p>
    <a href="#" class="btn btn-primary">Add Cart</a>
    </div>
    </div>
 </div>
 </div>
    );
}
}
export default Card;