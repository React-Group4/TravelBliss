import { Card, Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Destinations from './destinations';
import { useNavigate } from 'react-router-dom';  


function CardComp (props){
  const [show, setShow] = useState(false);
  let {user} = useAuth0()
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
    arr.push({...props, email:user.email})
    let stringData = JSON.stringify(arr)
    localStorage.setItem("Favorites",stringData)}
    else{
      let arr = []
      arr.push({...props, email:user.email})
      let stringData = JSON.stringify(arr)
      localStorage.setItem("Favorites",stringData)} 

    } 
    function navigateToDestination() {
      
      navigate('/destination');
    }

return(
  <>
    <Card style={{ width: '18rem', backgroundColor:'#e0e0e0' }}>
    <Card.Img
      variant="top"
      src={props.image} 
      style={{ height: '200px', objectFit: 'cover' }} 
    />
    <Card.Body>
    <Card.Title ><b><i>{props.title}</i></b></Card.Title>
    <Card.Text><p>{props.city}</p></Card.Text>
    {props.reviews && (<Card.Text><p><b>Reviews: {props.reviews}</b></p></Card.Text>) }
   {props.showRating &&( <Card.Text> {generateStarRating(props.rating)}</Card.Text> )   }
   {props.showDetails? <Button variant="primary" onClick={handleshow} style={{ backgroundColor: '#005b96', color: 'White' }}>Show Details</Button>
   : <Button variant="primary" onClick={handleshow} style={{display:"none"}}>Show Details</Button>
   }
   {props.showAddress? <Button variant="primary" onClick={handleshow} style={{ backgroundColor: '#005b96', color: 'White' }} >Show Address</Button>
   : <Button variant="primary" onClick={handleshow} style={{display:"none"}}>Show Address</Button>
   }
   {props.showFavorites? <Button variant="primary" onClick={saveToLocalStorage} style={{ backgroundColor: '#e5e5e5',border: '#e4edf2', color: '#e4edf2',marginLeft:'80px' }}>❤️</Button>
   : <Button variant="primary" onClick={saveToLocalStorage} style={{display:"none"}}>Add To Favorites</Button>}
   {props.showRemove? <Button variant="primary" onClick={props.RemoveFromFavorites} style={{ backgroundColor: '#990000', color: 'white', border: '#3498db', borderRadius: '100%' }}><b>Remove</b></Button>
    : <Button variant="primary" onClick={props.RemoveFromFavorites} style={{display:"none" }}>Remove</Button> }
    </Card.Body>
    </Card>
        <Modal show={show} onHide={handleshow}>
        <Modal.Header closeButton  style={{backgroundColor:'#005b96', color: 'White'}}>
        <Modal.Title ><h3><b>{props.title}</b></h3></Modal.Title>
      </Modal.Header>
        <Modal.Body style={{backgroundColor:'#F8F8F8'}}>{props.description}<b><i>{props.address}</i></b> </Modal.Body>
      <Modal.Footer  style={{backgroundColor:'#F8F8F8'}}>
      {props.showGoToDestinationButton && (
          <Button variant='primary' onClick={navigateToDestination} style={{ backgroundColor: '#005b96', color: 'White' }}>
          Go To Destinations
        </Button>
      )}
        <Button variant="secondary" onClick={handleshow} style={{ backgroundColor: '#990000', color: 'white', border: '#3498db' ,borderRadius: '100%' }}>
            <b>Close</b>
          </Button>
      </Modal.Footer>
        </Modal>
   </>

)

}
export default CardComp;