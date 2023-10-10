import { Card, Button, Modal } from 'react-bootstrap';
import { useState } from 'react';

function CardComp (props){
  const [show, setShow] = useState(false);
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
return(
  <>
    <Card style={{ width: '18rem' }}>
    <Card.Img
      variant="top"
      src={props.image}
      style={{ height: '200px', objectFit: 'cover' }} 
    />
    <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>{props.city}</Card.Text>
   {props.showRating &&( <Card.Text>Rating: {generateStarRating(props.rating)}</Card.Text> )   }
   {props.showDetails? <Button variant="primary" onClick={handleshow} >Show Details</Button>
   : <Button variant="primary" onClick={handleshow} style={{display:"none"}}>Show Details</Button>
   }
   {props.showAddress? <Button variant="primary" onClick={handleshow} >Show Address</Button>
   : <Button variant="primary" onClick={handleshow} style={{display:"none"}}>Show Address</Button>
   }
    </Card.Body>
    </Card>
        <Modal show={show} onHide={handleshow}>
        <Modal.Header closeButton>
        <Modal.Title><h3><b>{props.title}</b></h3></Modal.Title>
      </Modal.Header>
        <Modal.Body>{props.description} <br></br> {props.address} </Modal.Body>
      <Modal.Footer>
          <Button variant="secondary" onClick={handleshow} style={{backgroundColor:"black"}}>
            Close
          </Button>
      </Modal.Footer>
        </Modal>
   </>

)

}
export default CardComp;

