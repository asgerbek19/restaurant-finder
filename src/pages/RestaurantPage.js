import { getDocs, query, where } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { restaurantsRef } from "../firebase-config";


export default function RestaurantPage(){
    const params = useParams();
    const [currentDay, setCurrentDay] = useState("");
    const restaurantId = params.slug;
    const [restaurant, setRestaurant] = useState([]);
const navigate = useNavigate();



     useEffect(()=>{
       async function getRestaurant(){
      const q = query(restaurantsRef, where("slug", "==", restaurantId));
      const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
setRestaurant(doc.data())
});
const today = new Date();
const todaynumber = today.getDay();
setCurrentDay(todaynumber);
}
    getRestaurant();
         
},[restaurantId])
console.log(restaurant);
    return(
        <div className="restaurantpage">
        <div className="backarrow" onClick={() => navigate(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="43.459" height="41.069" viewBox="0 0 43.459 41.069">
            <g id="Polygon_2" data-name="Polygon 2" transform="translate(43.459 23.407) rotate(148)" fill="#fff">
            <path d="M 33.38788223266602 26.80785751342773 L 0.90433669090271 26.80785751342773 L 17.14610481262207 0.9402873516082764 L 33.38788223266602 26.80785751342773 Z" stroke="none"/>
            </g>
            </svg>
        </div>
        <div className="restaurantbackground">
<div className="restaurantimage">
<img src={restaurant.image} alt={restaurant.name} />
</div>
        <h1>{restaurant.name}</h1>
        <div className="allinfo">
        <p>{restaurant.address}</p> 
        <p className="infotext">{restaurant.info}</p>
        <a href={restaurant.locationref}>Besøg</a>
       <div className="infobox">
       <h3>Åbningstider</h3>
       <div className="openinghours">
<p className={currentDay === 1 ? "currentday" : "notcurrentday" } >Mandag: {restaurant?.openinghours?.[1]}</p>
<p className={currentDay === 2 ? "currentday" : "notcurrentday" }>Tirsdag: {restaurant?.openinghours?.[2]}</p>
<p className={currentDay === 3 ? "currentday" : "notcurrentday" }>Onsdag: {restaurant?.openinghours?.[3]}</p>
<p className={currentDay === 4 ? "currentday" : "notcurrentday" }>Torsdag: {restaurant?.openinghours?.[4]}</p>
<p className={currentDay === 5 ? "currentday" : "notcurrentday" }>Fredag: {restaurant?.openinghours?.[5]}</p>
<p className={currentDay === 6 ? "currentday" : "notcurrentday" }>Lørdag: {restaurant?.openinghours?.[6]}</p>
<p className={currentDay === 0 ? "currentday" : "notcurrentday" }>Søndag: {restaurant?.openinghours?.[0]}</p>
       </div>
       </div>
       </div>
       </div>
        </div>
    )
         }