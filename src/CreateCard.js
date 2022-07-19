import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Countrys from './Countrys';

function CreateCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{}</Card.Title>
        <Card.Text>
          yaser rifai 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CreateCard;