import {useNavigate} from "react-router-dom";



export default function ResultCard({ restaurant }) {
    const navigate = useNavigate();
  

   
    function handleClick() {
        navigate(`restaurant/${restaurant.id}`);
    }
    
   
    
    return(
        <div className="Results">
        <div className="ResultCard"></div>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.desc}</p>
            <button onClick={handleClick}>Læs mere</button>
            <img src={restaurant.image} alt={restaurant.name} />
        </div>
        
    )

  
}