import Header from "../Header";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function NoteEditor() {
  return (
    <>
      <Header />
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>
              <h1 className="text-center">Note Editor</h1>
            </Card.Title>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default NoteEditor;
