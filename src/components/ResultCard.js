import {useNavigate} from "react-router-dom";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Favorite from "@material-ui/icons/Favorite";
import IconButton from '@material-ui/core/IconButton';
import { useState } from "react";
import { red } from "@material-ui/core/colors";


export default function ResultCard({ restaurant }) {
    const navigate = useNavigate();
    const [fav, setFav] = useState(false);

   
    function handleClick() {
        navigate(`/restaurant/${restaurant.slug}`);
    }
    
    //begyndelsen på fav funcktionen
    function handleFav(){
        setFav(!fav)
        if(fav == true){
          //saa gem til firestore  
        } else {
            //slet fra firestore
        }

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
            {fav && 
<IconButton onClick={() => { setFav(!fav) }}  aria-label="delete" color="primary">
<FavoriteBorderIcon></FavoriteBorderIcon>
</IconButton>
}
{!fav &&
<IconButton onClick={() => { setFav(!fav) }} aria-label="delete" color="primary">
<Favorite></Favorite>
</IconButton>
}
            </div>
            </div>
            </div>
        </div>
        
    )

  
}