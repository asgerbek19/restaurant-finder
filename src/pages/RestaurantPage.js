import { useState } from "react";
import { useParams } from "react-router-dom";
import {restaurants} from "../steder";

export default function RestaurantPage(){
    const params = useParams();
    const restaurantId = params.id;
    console.log(restaurantId);
    
    
    return(
        <h1>Restaurant Name</h1>
    )
}