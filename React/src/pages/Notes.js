import React from 'react';
import { Container, Form, Button} from 'react-bootstrap';
import "./Notes.css";

function save(){
    return null;
}

function Notes(){
    return (
        <Container className="Notes">
            <Form.Group controlId="notesTextArea">
                <Form.Label>Notes</Form.Label>
                <Form.Control as="textarea" rows={25} style={{backgroundColor: "#23272A", color:"#FFF"}}/>
            </Form.Group>
            <Button variant="outline-primary" onClick={() => save()}>Save</Button>{' '}
        </Container>
    );
}

export default Notes;