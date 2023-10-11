import { Card, Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import Destinations from './destinations';
import { useNavigate } from 'react-router-dom';  




function CardComp (props){
  const [show, setShow] = useState(false);
  const navigate = useNavigate();  
  function handleshow(){
      setShow(!show)
  }

  function generateStarRating(rating) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i}>&#9733;</span>); // Filled star
      } else {
        stars.push(<span key={i}>&#9734;</span>); // Empty star
      }
    }
    return stars;
  }

  function saveToLocalStorage(){
    if(localStorage.getItem("Favorites")){
    let arr = JSON.parse(localStorage.getItem("Favorites"))
    arr.push(props)
    let stringData = JSON.stringify(arr)
    localStorage.setItem("Favorites",stringData)}
    else{
      let arr = []
      arr.push(props)
      let stringData = JSON.stringify(arr)
      localStorage.setItem("Favorites",stringData)} 

    } 
    function navigateToDestination() {
      
      navigate('/destination');
    }

return(
  <>
    <Card style={{ width: '18rem' }}>
    <Card.Img
      variant="top"
      src={props.image} 
      style={{ height: '200px', objectFit: 'cover' }} 
    />
    <Card.Body>
    <Card.Title ><b><i>{props.title}</i></b></Card.Title>
    <Card.Text><p>{props.city}</p></Card.Text>
   {props.showRating &&( <Card.Text> {generateStarRating(props.rating)}</Card.Text> )   }
   {props.showDetails? <Button variant="primary" onClick={handleshow} style={{ backgroundColor: '#008CBA', color: 'White' }}>Show Details</Button>
   : <Button variant="primary" onClick={handleshow} style={{display:"none"}}>Show Details</Button>
   }
   {props.showAddress? <Button variant="primary" onClick={handleshow} style={{ backgroundColor: '#008CBA', color: 'White' }} >Show Address</Button>
   : <Button variant="primary" onClick={handleshow} style={{display:"none"}}>Show Address</Button>
   }
   {props.showFavorites? <Button variant="primary" onClick={saveToLocalStorage} style={{ backgroundColor: '#008CBA', color: 'White', marginTop:'1%' }}>Add To Favorites</Button>
   : <Button variant="primary" onClick={saveToLocalStorage} style={{display:"none"}}>Add To Favorites</Button>}
   {props.showRemove? <Button variant="primary" onClick={props.RemoveFromFavorites} style={{ backgroundColor: '#c04a4a', color: 'white', border: '#3498db', borderRadius: '100%' }}><b>Remove</b></Button>
    : <Button variant="primary" onClick={props.RemoveFromFavorites} style={{display:"none" }}>Remove</Button> }
    </Card.Body>
    </Card>
        <Modal show={show} onHide={handleshow}>
        <Modal.Header closeButton>
        <Modal.Title><h3><b>{props.title}</b></h3></Modal.Title>
      </Modal.Header>
        <Modal.Body>{props.description} <br></br> <b><i>{props.address}</i></b> </Modal.Body>
      <Modal.Footer>
      {props.showGoToDestinationButton && (
          <Button variant='primary' onClick={navigateToDestination} style={{ backgroundColor: '#008CBA', color: 'White' }}>
          Go To Destinations
        </Button>
      )}
        <Button variant="secondary" onClick={handleshow} style={{ backgroundColor: '#c04a4a', color: 'white', border: '#3498db' ,borderRadius: '100%' }}>
            <b>Close</b>
          </Button>
      </Modal.Footer>
        </Modal>
   </>

)

}
export default CardComp;

