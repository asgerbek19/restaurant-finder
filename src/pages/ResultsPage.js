//Daníel(Mapping og filter), Stefanos(Søgefilter)
import ResultCard from "../components/ResultCard";
import { restaurantsRef } from "../firebase-config";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onSnapshot, orderBy, query } from "@firebase/firestore";

export default function ResultsPage(){
  
    const [searchValue, setSearchValue] = useState("");
    const [restaurants, setRestaurants] = useState([]);
    const filteredRestaurants = restaurants.filter(restaurant => restaurant.location.includes(localStorage.getItem("city")));
    const shuffledrestaurants = filteredRestaurants.sort(()=> Math.random() - Math.random());
    const searchedRestaurants= shuffledrestaurants.filter(restaurant=> restaurant.info.toLowerCase().includes(searchValue) || restaurant.name.toLowerCase().includes(searchValue) || restaurant.desc.toLowerCase().includes(searchValue));

    const navigate = useNavigate();

useEffect(()=>{
    const q = query(restaurantsRef, orderBy("name")); // order by: name
    const unsubscribe = onSnapshot(q, data => {
        const restaurantsData = data.docs.map(doc => {
            // map through all docs (object) from post collection
            return { ...doc.data(), id: doc.id }; // changing the data structure so it's all gathered in one object
        });
        setRestaurants(restaurantsData);
    });
    return () => unsubscribe(); // tell the post component to unsubscribe from listen on changes from firestore
}, []);

    return(
        <div className="resultspage">
        <div className="backarrow" onClick={() => navigate(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="43.459" height="41.069" viewBox="0 0 43.459 41.069">
            <g id="Polygon_2" data-name="Polygon 2" transform="translate(43.459 23.407) rotate(148)" fill="#fff">
            <path d="M 33.38788223266602 26.80785751342773 L 0.90433669090271 26.80785751342773 L 17.14610481262207 0.9402873516082764 L 33.38788223266602 26.80785751342773 Z" stroke="none"/>
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