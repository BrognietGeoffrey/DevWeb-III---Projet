import React from 'react';
import { Container, Form, Button, Card} from 'react-bootstrap';
import {Link} from "react-router-dom";

function PagePrincipale(){

    return (
        <Container className="PagePrincipale">

            {/*<div>
                ['Note1', 'Note2'].map((note, idx) => (
                <Card key={idx} variant={note} style={{width: '18rem'}}>
                    <Card.Img variant="top"/>
                    <Card.Body>
                        <Card.Title>{temp[idx]}</Card.Title>
                        <Card.Text>
                            Lorem ipsum blablabla test de la note 1.
                        </Card.Text>
                        <Button variant="primary">Éditer</Button>
                    </Card.Body>
                </Card>
            </div>
            ));*/}
            <div>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" />
                  <Card.Body>
                    <Card.Title>Note 1</Card.Title>
                    <Card.Text>
                      Lorem ipsum blablabla test de la note 1.
                    </Card.Text>
                    <Link to="/Notes" className="btn btn-primary">Éditer</Link>
                  </Card.Body>
                </Card>
            </div>

            <div>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" />
                  <Card.Body>
                    <Card.Title>Note 2</Card.Title>
                    <Card.Text>
                      Lorem ipsum blablabla test de la note 2.
                    </Card.Text>
                    <Link to="/Notes" className="btn btn-primary">Éditer</Link>
                  </Card.Body>
                </Card>
            </div>
        </Container>
    );
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