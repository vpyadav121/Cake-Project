
import {Component} from "react"
import axios from "axios"
import { render } from "@testing-library/react"
import { Link } from "react-router-dom";
class Login extends Component{
    constructor(props){
        super(props)
        this.state = { email: '' , password: ''};
    }
   
  
    getEmail = (event)=>{
        this.email = event.target.value
    }
    getPass = (event)=>{
        this.password = event.target.value
    }
    Login = ()=>{

        if(!this.email || !this.password) return alert("please fill all field")
      
        var requestObj = {
            email:this.email,
            password:this.password
    }  
    console.log(requestObj);
        axios({
            method:'post',
            url:'https://apibyashu.herokuapp.com/api/register',
            data:requestObj
        }).then((Response)=>{
            if(Response.data.message === "User Already Exists"){
                alert("user already exist!")
                console.log("response",Response,this.props.history.push('/'));
                
            }else {

                console.log("response from signup api",Response);

            }
            


        },(error)=>{
            console.log("error from signup api",error)    
        })
    }

render() {
    return(
        <div class= "form">
            <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" aria-describedby="emailHelp" onChange = {this.getEmail}></input>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
   
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" onChange = {this.getPass} ></input>
  </div>
 
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" ></input>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <Link to="/Home"><button type="submit" class="btn btn-primary" onClick={(e) => {
    
   
      <Link to="/Seach"><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></Link>
      e.preventDefault()
       console.log("hiiiiii")
      this.Login();
     
   }}>Submit<a href="http://localhost:3000/">Home</a> </button>,</Link>
     <Link to="/Register"><button class= "regisBtn" type="submit"><a href="http://localhost:3000/">Home</a>  Register </button></Link>
</form>
</div>
    )   }
    
}

export default Login;