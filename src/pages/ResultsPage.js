import ResultCard from "../components/ResultCard";
import {restaurants} from "../steder";
import SearchBar from "../components/SearchBar";
import { useState } from "react";

export default function ResultsPage(){
    const [searchValue, setSearchValue] = useState("");
    const filteredRestaurants = restaurants.filter(restaurant => restaurant.info.toLowerCase().includes(searchValue) || restaurant.name.toLowerCase().includes(searchValue) || restaurant.desc.toLowerCase().includes(searchValue));

    return(
        <div className="resultspage">
            <h1>Resultater</h1>
            <SearchBar setValue={setSearchValue}/>
            {filteredRestaurants.map(restaurant=>(
            <ResultCard restaurant={restaurant} key={restaurant.id}/>        
            ))}
                    
        </div>
    )
}