import './App.css';

import Navbar from "./Component/Navbar"
import Home from "./Component/Home"
import Login from "./Component/Login"
import Signup from "./Component/Signup"
// import Cart from "./component/Cart"
import Card from './Component/Card';
import Register from './Component/Register';
import Search from './Component/Search';
import {BrowserRouter , Route} from "react-router-dom"

// import { ToastContainer, toast } from 'react-toastify';
import Details from "./Component/Details";
import Cake from "./Component/Cake";
import Carousel from "./Component/Carousel";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div>      
        <Route path="/" exact component={Home}></Route>
        <Route path="/card" exact component={Card}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/Signup" exact component={Signup}></Route>
        <Route path="/Search/:q" exact component={Search}></Route>
        {/* <Route path="/Cart" exact component={Cart}></Route> */}
        <Route path="/Register" exact component={Register}></Route>
        <Route path="/details/:id" exact component={Details}></Route>
        <Route path="/cake" exact component={Cake}></Route>
        <Route path="/carousel" exact component={Carousel}></Route>
      </div>
      </BrowserRouter>
    </div>
  );
}
export default App;


