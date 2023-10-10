import Form from 'react-bootstrap/Form';
import Cities from './Cities.json';
import Restaurants from './Restaurants.json'
import Hotels from './Hotels.json'
import {useEffect, useState } from 'react';
import CardComp from './card';
import './card.css';
import './destinations.css';

function Destinations(){
    const [restaurants, setRestaurants] = useState([]);
    const [hotels, setHotels] = useState([]);
    const [selectedCity, setSelectedCity] = useState('Select a city');

    useEffect(() => {
      setRestaurants(Restaurants);
      setHotels(Hotels);
      }, []);

    function handelChange(event){
      const changedCity = event.target.value;
      setSelectedCity(changedCity);
      if (changedCity === 'Select a city') {
        setRestaurants(Restaurants);
        setHotels(Hotels);
      } else {
      let filteredRestaurants = Restaurants.filter(function(restaurant){return restaurant.city == changedCity})
      setRestaurants(filteredRestaurants)
      let filteredHotels = Hotels.filter(function(hotel){return hotel.city == changedCity})
      setHotels(filteredHotels)

    }}
    return (
<>
<Form.Select id='filterForm' onChange={handelChange} value={selectedCity}>
      <option value="Select a city">Select a city</option>
      {Cities.map((city) => (
          <option value={city.name}>
            {city.name}
          </option>
        ))}
    </Form.Select>
    <h4 class="section-heading"> Restaurants </h4>
    <div className="cardContainer">
          {restaurants.map((restaurant) => (
          <CardComp 
          image={restaurant.image_url} 
          title={restaurant.name} 
          city ={restaurant.city}
          address={restaurant.address}
          rating= {restaurant.rating}
          showDetails={false}
          showAddress={true}
          showRating={true}
          showFavorites={true}
          />
        ))}
    </div>
    <h4 class="section-heading"> Hotels </h4>
    <div className="cardContainer">
         {hotels.map((hotel) => (
          <CardComp
           image={hotel.image_url}
           title={hotel.name} 
           city ={hotel.city} 
           address={hotel.address}
           rating= {hotel.rating}
           showDetails={false}
           showAddress={true}
           showRating={true}
           showFavorites={true}
          />
        ))}

      </div>
      
</>    )}
export default  Destinations;