import ResultCard from "../components/ResultCard";
import {restaurants} from "../steder";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResultsPage(){
    const [searchValue, setSearchValue] = useState("");
    //const filteredRestaurants = restaurants.filter(restaurants.filter(filteredRestaurant => filteredRestaurant.location.includes(localStorage.getItem("city"))));
    const searchedRestaurants = restaurants.filter(restaurant => restaurant.info.toLowerCase().includes(searchValue) || restaurant.name.toLowerCase().includes(searchValue) || restaurant.desc.toLowerCase().includes(searchValue));
const navigate = useNavigate();
    return(
        <div className="resultspage">
     <div onClick={() => navigate(-1)}><svg xmlns="http://www.w3.org/2000/svg" width="35" height="52" viewBox="0 0 35 52">
  <g id="Polygon_4" data-name="Polygon 4" transform="translate(0 52) rotate(-90)" fill="#942017">
    <path d="M 51.00571060180664 34.5 L 0.9942888617515564 34.5 L 26 0.8384657502174377 L 51.00571060180664 34.5 Z" stroke="none"/>
    <path d="M 26 1.676933288574219 L 1.988578796386719 34 L 50.01142120361328 34 L 26 1.676933288574219 M 26 0 L 52 35 L 0 35 L 26 0 Z" stroke="none" fill="#707070"/>
  </g>
</svg>
</div>
            <h1>Resultater</h1>
            <SearchBar setValue={setSearchValue}/>
            {searchedRestaurants.map(restaurant=>(
            <ResultCard restaurant={restaurant} key={restaurant.id}/>        
            ))}
                    
        </div>
    )
}