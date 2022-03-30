import { arrayRemove, arrayUnion, doc, updateDoc } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import { restaurantsRef, usersRef } from "../firebase-config";
import Heart from "react-animated-heart";
import { useEffect, useState } from "react";



export default function ResultCard({ restaurant }) {
    const [isClick, setIsClick] = useState(false);
    const navigate = useNavigate();
    const auth = getAuth();
console.log(auth);

async function handleFavorites(){
    if(isClick === false){
        const currentUserDocRef = doc(usersRef, auth.currentUser.uid); // reference to current authenticated user doc
        const restaurantRef = doc(restaurantsRef, restaurant.id); // reference to the post you want to add to favorites
        setIsClick(true)
        await updateDoc(currentUserDocRef, {
            favorites: arrayUnion(restaurantRef) // updating current user's favorites field in firebase by adding a doc ref to the post
        }); // docs about update elemennts in an array: https://firebase.google.com/docs/firestore/manage-data/add-data#update_elements_in_an_array
    }
    else{
        const currentUserDocRef = doc(usersRef, auth.currentUser.uid);
        const restaurantRef = doc(restaurantsRef,restaurant.id);
        setIsClick(false)
        await updateDoc(currentUserDocRef,{
            favorites: arrayRemove(restaurantRef)
        });
    }

}

    function handleClick() {
        navigate(`/restaurant/${restaurant.slug}`);
    }
    

    
    return(
        <div className="Results">
        <div className="ResultCard">
            <h2>{restaurant.name}</h2>
            <p>{restaurant.desc}</p>
            <div className="btnandimage">
            <button onClick={handleClick}>Læs mere</button>
            <div className="restaurantimage">
            <img src={restaurant.image} alt={restaurant.name} />
            </div>
            </div>
          <Heart isClick={isClick} onClick={handleFavorites}/>
            </div>
        </div>
        
    )

  
}