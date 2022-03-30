//Daniel og Stefanos
import { arrayRemove, arrayUnion, doc, onSnapshot, updateDoc } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {  usersRef } from "../firebase-config";
import { useEffect, useState } from "react";



export default function ResultCard({ restaurant}) {
    const navigate = useNavigate();
    const auth = getAuth();
    const [user, setUser] = useState({});

    useEffect(() => {
        const unsubscribe = onSnapshot(doc(usersRef, auth.currentUser.uid), doc => {
            setUser(doc.data());
        });
        return () => unsubscribe();
    }, [auth.currentUser.uid]);


async function handleAddToFav(){
        const currentUserDocRef = doc(usersRef, auth.currentUser.uid); // reference to current authenticated user doc
              await updateDoc(currentUserDocRef, {
            favorites: arrayUnion(restaurant.id) // updating current user's favorites field in firebase by adding a doc ref to the post
        }); // docs about update elements in an array: https://firebase.google.com/docs/firestore/manage-data/add-data#update_elements_in_an_array
}
   async function handleRemoveFromFav(){
        const currentUserDocRef = doc(usersRef, auth.currentUser.uid);
        await updateDoc(currentUserDocRef,{
            favorites: arrayRemove(restaurant.id)
        });
    }



    function handleClick() {
        navigate(`/restaurant/${restaurant.slug}`);
    }
    


    return(
        <div className="Results">
        <div className="ResultCard">
            <h2>{restaurant.name}</h2>
        
            <div className="btnandimage">
            <div className="restaurantimage">
            <img src={restaurant.image} alt={restaurant.name} />
            </div>
            <p>{restaurant.desc}</p>
            <div className="buttons">
            <button onClick={handleClick}>Læs mere</button>
            
            
            {user.favorites?.includes(restaurant.id) ? (
                <button className="heart-button selected" onClick={handleRemoveFromFav}><svg className="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M91.6 13A28.7 28.7 0 0 0 51 13l-1 1-1-1A28.7 28.7 0 0 0 8.4 53.8l1 1L50 95.3l40.5-40.6 1-1a28.6 28.6 0 0 0 0-40.6z"/></svg></button>
            ) : (
                <button className="heart-button" onClick={handleAddToFav}><svg className="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M91.6 13A28.7 28.7 0 0 0 51 13l-1 1-1-1A28.7 28.7 0 0 0 8.4 53.8l1 1L50 95.3l40.5-40.6 1-1a28.6 28.6 0 0 0 0-40.6z"/></svg></button>
            )}
            </div>
            </div>
            </div>
        </div>
        
    )

  
}