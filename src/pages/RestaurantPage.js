
import { getDocs, query, where } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { restaurantsRef } from "../firebase-config";


export default function RestaurantPage(){
    const params = useParams();
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

}
    getRestaurant();
         
},[restaurantId])
console.log(restaurant);
    return(
        <div className="restaurantpage">
        <div onClick={() => navigate(-1)}><svg xmlns="http://www.w3.org/2000/svg" width="35" height="52" viewBox="0 0 35 52">
  <g id="Polygon_4" data-name="Polygon 4" transform="translate(0 52) rotate(-90)" fill="#942017">
    <path d="M 51.00571060180664 34.5 L 0.9942888617515564 34.5 L 26 0.8384657502174377 L 51.00571060180664 34.5 Z" stroke="none"/>
    <path d="M 26 1.676933288574219 L 1.988578796386719 34 L 50.01142120361328 34 L 26 1.676933288574219 M 26 0 L 52 35 L 0 35 L 26 0 Z" stroke="none" fill="#707070"/>
  </g>
</svg>
</div>
<div className="restaurantimage">
<img src={restaurant.image} alt={restaurant.name} />
</div>
        <h1>{restaurant.name}</h1>
        <div className="allinfo">
        <p>{restaurant.address}</p> 
        <p className="infotext">{restaurant.info}</p>
        <a className="btn" href={restaurant.locationref}>Besøg</a>
       <div className="infobox">
       <h3>Åbningstider</h3>
       <div className="openinghours">
<p className="monday" >Mandag: {restaurant?.openinghours?.[1]}</p>
<p className="tuesday">Tirsdag: {restaurant?.openinghours?.[2]}</p>
<p className="wednesday">Onsdag: {restaurant?.openinghours?.[3]}</p>
<p className="thursday">Torsdag: {restaurant?.openinghours?.[4]}</p>
<p className="friday">Fredag: {restaurant?.openinghours?.[5]}</p>
<p className="saturday">Lørdag: {restaurant?.openinghours?.[6]}</p>
<p className="sunday">Søndag: {restaurant?.openinghours?.[0]}</p>
       </div>
       </div>
       </div>
        </div>
    )
         }