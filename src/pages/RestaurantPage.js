import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {restaurants} from "../steder";

export default function RestaurantPage(){
    const params = useParams();
    const restaurantId = params.slug;
    const [restaurant, setRestaurant] = useState({});
     useEffect(()=>{
         const currentRestaurant = restaurants.find(restaurant => restaurant.slug === restaurantId);
         console.log(currentRestaurant);
         setRestaurant(currentRestaurant)
     },[restaurantId])

    return(
        <div className="restaurantpage">
        <h1>{restaurant.name}</h1>
        <img src={restaurant.image} alt={restaurant.name} />
        <p>{restaurant.info}</p>
       <div className="infobox">
       <p>{restaurant.address}</p>
       <h3>Åbningstider</h3>
       <div className="openinghours">
     
      {restaurant.map((weekdays)=>(
          <>
          {weekdays.openinghours.map((weekday)=>(
        <p>Monday:{weekday.monday}</p>
    ))}
    </>
      ))}



         
       </div>
       </div>
        <a className="btn" href={restaurant.locationref}>Besøg</a>
        </div>
    )
         }