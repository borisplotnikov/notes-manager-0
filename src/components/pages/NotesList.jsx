import Header from "../Header";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

function NotesList() {
  return (
    <>
      <Header />
      <h1 className="text-center">NotesList</h1>
      <Container>
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
      </Container>
    </>
  );
}

export default NotesList;
