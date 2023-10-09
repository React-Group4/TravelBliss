import Form from 'react-bootstrap/Form';
import Cities from './Cities.json';
import Restaurants from './Restaurants.json'
import Hotels from './Hotels.json'
import {useEffect, useState } from 'react';
import Cardcomp from './card';
import './card.css';

function Destinations(){
    const [res, setRes] = useState([]);
    const [hot, sethot] = useState([]);
    const [selectedCity, setSelectedCity] = useState('Select a city');

    useEffect(() => {
        setRes(Restaurants);
        sethot(Hotels);
      }, []);

    function handelChange(event){
      const changedValue = event.target.value;
      setSelectedCity(changedValue);
      if (changedValue === 'Select a city') {
        setRes(Restaurants);
        sethot(Hotels);
      } else {
      let filteredRestaurants = Restaurants.filter(function(restaurant){return restaurant.city == changedValue})
      setRes(filteredRestaurants)
      let filteredHotels = Hotels.filter(function(hotel){return hotel.city == changedValue})
      sethot(filteredHotels)

    }}
    return (
<>
<Form.Select aria-label="Default select example" onChange={handelChange} value={selectedCity}>
      <option value="Select a city">Select a city</option>
      {Cities.map((city) => (
          <option value={city.name}>
            {city.name}
          </option>
        ))}
    </Form.Select>
    <div className="cardContainer">
        {res.map((item) => (
          <Cardcomp image_url={item.image_url} title={item.name}  city ={item.city} 
        
          />
        ))}
         {hot.map((item) => (
          <Cardcomp image_url={item.image_url} title={item.name}  city ={item.city} 
        
          />
        ))}

      </div>
      
</>    )}
export default  Destinations;