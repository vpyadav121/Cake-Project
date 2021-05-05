import { render } from "@testing-library/react";
import {Component} from "react";
import  {Link} from 'react-router-dom';
class Cake extends Component {
  constructor(props) {
        super(props)
        this.state = {}
        // this.NavigationDemo()
    }

    render() {
        return (
          <div class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="cake2.jpg" class="d-block w-100" alt="cake"></img>
            </div>
            <div class="carousel-item">
              <img src="cake3.jpg" class="d-block w-100" alt="cake1"><
            </div>
            <div class="carousel-item">
              <img src="cake4.jpg" class="d-block w-100" alt="...">
            
  
        </div>
      );
    }
}
export default Carousel;