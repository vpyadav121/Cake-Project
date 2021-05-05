import { useState, useEffect } from "react";
import queryString from "query-string";
import axios from "axios";
import Cake from "./Cake";

function Search(props) {  
  var [cakeresult, setCakes] = useState([]);
  var query = queryString.parse(props.location.search);
  console.log(query.q);

  useEffect(() => {
    var apiurl = "https://apifromashu.herokuapp.com/api/searchcakes?q=" + query.q;
    axios({
      method:"get",
      url: apiurl,
    }).then(
      (response) => {
        // toast("Your Cakes");            
        console.log(response.data);
        setCakes(response.data.data);
      },
      (error) => {
        console.log(error);
      }
      
    );
  }, [query.q]);

  return (
    <div>

    <div className="row">
      {cakeresult.map((each) => {
        return <Cake cakedata={each} />;
      })}      
      
      </div>
    </div>
  );
}

export default Search;