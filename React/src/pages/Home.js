import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';



function Home() {
    return (
        <Container className="Home">
            <div id="homeWrapper">
                <br />
                <Col md={{ span: 8, offset: 2 }}>
                    <Row>
                        <div className="h1">
                            Bienvenue
                        </div>
                    </Row>
                    <Row>
                        <div className="h5">
                            <span id="AfficheUserName" ><br /></span>
                        </div>
                    </Row>
                    <Row>
                        <br /><br />
                        Vous voici sur EasyNotes. <br/>
                        L'application web pour gérer en simplicité vos Notes partagées.
                    </Row>
                </Col>
            </div>
        </Container>
    );
}

export default Home;