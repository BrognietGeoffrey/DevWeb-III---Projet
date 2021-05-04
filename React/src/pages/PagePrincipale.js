import React from 'react';
import { Container, Card} from 'react-bootstrap';
import {Link} from "react-router-dom";

function afficheCards() {
    //Recup données

    return(
        //mise en forme
        ["test 1", "test 2", "test 3"]
    );
}

function PagePrincipale(){

    let listeNotes = [];
    let i;
    for (i=1; i < afficheCards().length+1; i++){
        listeNotes[i] = (
            <div>
                <Card style={{ width: '18rem', backgroundColor:"#23272A" }}>
                  <Card.Img variant="top" />
                  <Card.Body>
                    <Card.Title>{afficheCards()[i-1]}</Card.Title>
                    <Link to="/Notes" className="btn btn-primary">Éditer</Link>
                  </Card.Body>
                </Card>
            </div>
        );
    }
    return (<Container className="PagePrincipale">{listeNotes} </Container>);
}

export default PagePrincipale;

{/*
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/286px180" />
  <Card.Body>
    <Card.Title>Note X</Card.Title>
    <Card.Text>
      Lorem ipsum blablabla test de la note 1.
    </Card.Text>
    <Button variant="primary">Éditer</Button>
  </Card.Body>
</Card>
*/}