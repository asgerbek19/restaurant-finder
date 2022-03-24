import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {restaurants} from "../steder";

export default function RestaurantPage(){
    const params = useParams();
    const restaurantId = params.id;
    console.log(restaurantId);
     useEffect(()=>{
         const currentRestaurant = restaurants.find(restaurant => restaurant.id === restaurantId);
         console.log(currentRestaurant);
     },[restaurantId])

    return(
        <div>
        <h1>Restaurantname</h1>
        <p>Her vil info texten komme</p>
        </div>
    )
}