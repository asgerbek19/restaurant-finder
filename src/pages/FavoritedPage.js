import { doc, getDoc } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import ResultCard from "../components/ResultCard";
import { usersRef } from "../firebase-config";

export default function FavoritedPage(){
    const [favPosts, setFavPosts] = useState([]);
    const auth = getAuth();

    useEffect(() => {
        async function getUser() {
            if (auth.currentUser) {
                const docRef = doc(usersRef, auth.currentUser.uid); // use auth users uid to get user data from users collection
                const userData = (await getDoc(docRef)).data();
                if (userData && userData.favorites) {
                    getUserFavPosts(userData.favorites);
                }
                else{
                    return(
                        <h2>Du har ikke nogle favoritter endnu dit svin</h2>
                    )
                }
            }
        }
    
        async function getUserFavPosts(userFavs) {
            for (const favPostRef of userFavs) {
                const favPost = (await getDoc(favPostRef)).data();
                favPost.id = favPostRef.id;
                setFavPosts(prevFavPosts => [...prevFavPosts, favPost]);
            }
        }
    
        getUser();
    }, [auth.currentUser]);
    
        return(
            <div>
        <h1>Gemte Restauranter</h1>
        {favPosts.map(restaurant=>(
            <ResultCard restaurant={restaurant} key={restaurant.id} />        
            ))}
                </div>
        )
    
}