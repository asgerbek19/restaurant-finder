// Daníel, Mikkel
import { doc, getDoc, onSnapshot} from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ResultCard from "../components/ResultCard";
import { restaurantsRef, usersRef } from "../firebase-config";

export default function FavoritedPage(){
    const [favPosts, setFavPosts] = useState([]);
    const [isEmpty, setIsEmpty ] = useState(true);
    const auth = getAuth();
    const navigate = useNavigate();

    useEffect(() => {
        async function getUserFavPosts(userFavs) {
            const userFavPosts = [];
            for (const favPostId of userFavs) {
                const favPostRef = doc(restaurantsRef, favPostId);
                const favPost = (await getDoc(favPostRef)).data();
                favPost.id = favPostId;
                userFavPosts.push(favPost);
            }
            setFavPosts(userFavPosts);
        }

        if (auth.currentUser) {
            onSnapshot(doc(usersRef, auth.currentUser.uid), doc => {
                const userData = doc.data();
                if (userData && userData.favorites) {
                    getUserFavPosts(userData.favorites);
                }
            });
        }
        if(favPosts.length < 2){
            setIsEmpty(true)
        } else{
            setIsEmpty(false)
        }
    }, [auth.currentUser, favPosts]);
    
    
    
    const savedpage = (
        <div className="favoritedpage">
        <div onClick={() => navigate(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="43.459" height="41.069" viewBox="0 0 43.459 41.069">
            <g id="Polygon_2" data-name="Polygon 2" transform="translate(43.459 23.407) rotate(148)" fill="#fff">
            <path d="M 33.38788223266602 26.80785751342773 L 0.90433669090271 26.80785751342773 L 17.14610481262207 0.9402873516082764 L 33.38788223266602 26.80785751342773 Z" stroke="none"/>
            </g>
            </svg>
        </div>
        <h1>Gemt</h1>
        {favPosts.map(restaurant=>(
        <ResultCard restaurant={restaurant} key={restaurant.id} />        
        ))}
    </div>
    )
    
        const savedpageempty = (
        <div className="favoritedpage-empty">
        <div className="backarrow" onClick={() => navigate(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="43.459" height="41.069" viewBox="0 0 43.459 41.069">
            <g id="Polygon_2" data-name="Polygon 2" transform="translate(43.459 23.407) rotate(148)" fill="#fff">
            <path d="M 33.38788223266602 26.80785751342773 L 0.90433669090271 26.80785751342773 L 17.14610481262207 0.9402873516082764 L 33.38788223266602 26.80785751342773 Z" stroke="none"/>
            </g>
            </svg>
        </div>
        <h1>Gemt</h1>
        <p className="intet-gemt">Du har ikke gemt noget indhold endnu</p>
        {favPosts.map(restaurant=>(
        <ResultCard restaurant={restaurant} key={restaurant.id} />        
        ))}
    </div>
    )    
    
        return(
            <div>{isEmpty ? savedpageempty : savedpage}</div>
        )
    
}