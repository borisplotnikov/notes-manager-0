import Header from "../Header";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function NotesList() {
  return (
    <>
      <Header />
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>My notes:</Card.Title>
            <ListGroup>
              <ListGroup.Item action>Note 1...</ListGroup.Item>
              <ListGroup.Item action>Note 2...</ListGroup.Item>
              <ListGroup.Item action>Note 3...</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default NotesList;
