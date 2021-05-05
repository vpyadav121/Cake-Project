import axios from "axios";
import {Component} from "react";
import Cake from "./Cake";

import Card from './Card'
import Search from './Search'

class Home extends Component{
    cakes = []
    constructor(props){
        super(props);
        this.state = {
            cakes : []

        };
    }
  componentDidMount() {
        let apiurl="https://apifromashu.herokuapp.com/api/allcakes"
        axios({
            url:apiurl,
            method: 'get'
        })
            .then((response) => {                    
                    console.log(response.data)
                    this.setState({
                        cakes: response.data.data
                    })
                    
                },
                    (error) => {
                        console.log(error);
                    }
                )
        
    }


render()
{
    return(
    <div>
        {/* <Carousel></Carousel> */}
        {/* <h1>Home page</h1> */}
        <div  className="row">
        {
                        this.state.cakes.map((each, index) => {
                            console.log(each,index)
                            return <Cake key={index} cakedata={each} />
                            
                        })
                    }
        </div>
        
    </div>
    )
}
}
export default Home;
