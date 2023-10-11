import { useState } from "react";
import CardComp from "./card";

function Favorites(){

    let favorites = JSON.parse(localStorage.getItem("Favorites"))

    let [FavoriteState,setFavoriteState] = useState(favorites)
    
    function RemoveFromFavorites(index){
        favorites.splice(index,1 )
        let favoritesCopy = [...favorites]
        setFavoriteState(favoritesCopy)
        let stringData = JSON.stringify(favoritesCopy) 
        localStorage.setItem("Favorites",stringData)} 
    
        return(
            <>
    <div id = "cardsFavorites" >
        {FavoriteState.map(function(restaurant,index){
            return(
                <CardComp 
                image={restaurant.image}
                title={restaurant.title} 
                city ={restaurant.city}
                address={restaurant.address}
                rating= {restaurant.rating}
                showRating={true}
                index={index}
                RemoveFromFavorites={() => RemoveFromFavorites(index)}
                showRemove={true}
                />
              )})}

    
    </div>
            </>
        )
    }
    export default Favorites;