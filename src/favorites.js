import { useEffect, useState } from "react";
import CardComp from "./card";
import { useAuth0 } from "@auth0/auth0-react";

function Favorites(){

    let {isAuthenticated, user} = useAuth0()

    let favorites = JSON.parse(localStorage.getItem("Favorites"))

    let [FavoriteState,setFavoriteState] = useState(favorites)
    
    function RemoveFromFavorites(index){
        favorites.splice(index,1 )
        let favoritesCopy = [...favorites]
        setFavoriteState(favoritesCopy)
        let stringData = JSON.stringify(favoritesCopy) 
        localStorage.setItem("Favorites",stringData)} 



        function filterByEmail(){
            if(isAuthenticated){
                let filteredData = FavoriteState.filter(function(item){
                    console.log(item.email)
                    return user.email === item.email})
                setFavoriteState(filteredData)
            }
        }

    
     useEffect(function(){filterByEmail()},[])




    
        return(
            <>
    <div id = "cardsFavorites" >
        {isAuthenticated && FavoriteState.map(function(restaurant,index){
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
               // email = {user.email}
                />
              )})}

    
    </div>
            </>
        )
    }
    export default Favorites;