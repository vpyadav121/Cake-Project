import {Component} from "react"
import axios from "axios"
import { render } from "@testing-library/react"
class Register extends Component{
    constructor(props){
        super(props)
        this.state = { email: '' , password: '', name: ""};
    }
   
  
    getEmail = (event)=>{
        this.email = event.target.value
    }
    getPass = (event)=>{
        this.password = event.target.value
    }
    getName = (event)=>{
        this.name = event.target.value
    }
    registers = ()=>{

        if(!this.email || !this.name || !this.password) return alert("please fill all field")
      
        var requestObj = {
            email:this.email,
            name:this.name,
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
  <div class="form-group">
    <label for="exampleInputPassword1">name</label>
    <input type="text" class="form-control" onChange = {this.getName} ></input>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" ></input>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary"  onClick={(e) => {
      e.preventDefault()
       console.log("hiiiiii")
      this.registers();
     
   }}>Submit</button>
</form>
</div>
    )   }
}

export default Register;