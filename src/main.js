import { useState } from "react";
import CardComp from "./card";
import './card.css';
import Cities from './Cities.json';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './searchStyles.css';

function Main(){
    
    let [country, setCuontry] = useState(Cities)

    function handleSubmit(event){
        event.preventDefault()
        let searchedValue = event.target.search.value;
        let filteredCountry = Cities.filter(function(country){return  country.name.toLowerCase().includes(searchedValue.toLowerCase())})
        setCuontry(filteredCountry)

    }

return (
    <>
      <Form className="d-flex fixed-search" onSubmit={handleSubmit} id="searchForm">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name='search'
            />
            <Button variant="outline-success" type="submit" >Search</Button>
          </Form>

        <div className="cardContainer">

        {country.length !==0 ?country.map(function (city) {
          return (
            <CardComp
              image={city.image_url}
              title={city.name}
              description={city.description}
              showDetails={true}
              showAddress={false}
              showRating={false}
              showGoToDestinationButton={true}  
              key={city.name}  
            />
          );
        }
        ) :<h2 style={{ textAlign: 'center', margin: '0 auto',color:"#474747" }}>No search results</h2>
      }
      </div>
    </>
  );
}

export default Main;