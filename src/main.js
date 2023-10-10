import { useState } from "react";
import CardComp from "./card";
import './card.css';
import Cities from './Cities.json';



function Main(){
    let [country, setCuontry] = useState(Cities)

    function handleSubmit(event){
       
        let searchedValue = event.target.search.value;

        let filteredCountry = Cities.filter(function(country){return  country.name.toLowerCase().includes(searchedValue.toLowerCase())})
        setCuontry(filteredCountry)

    }

    return(
        <>

        <form onSubmit={handleSubmit}>
        <input type="text" country="search"/>
        <button type='submit'>Search</button>
        </form>

        <div className="cardContainer">

        {country.map(function(city){
            return(
            <CardComp 
            image={city.image_url}
            title={city.name}
            description={city.description}
            showDetails={true}
            showAddress={false}
            showRating={false}
            />
            )
        }    
    )
        } 
        </div>
        </>
    )
}
export default Main;