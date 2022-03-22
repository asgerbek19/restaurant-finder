import ResultCard from "../components/ResultCard";
import {restaurants} from "../steder";


export default function ResultsPage(){

    return(
        <div>
            <h1>Resultater</h1>
            {restaurants.map(restaurant=>(
            <ResultCard restaurant={restaurant} key={restaurant.id}/>        
            ))}
                    
        </div>
    )
}