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
            <Card.Title>
              <h1 className="text-center">NotesList</h1>
            </Card.Title>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                Note 1...
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Note 2...
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                Note 3...
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default NotesList;
