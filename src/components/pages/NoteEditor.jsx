import Header from "../Header";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

function NoteEditor() {
  return (
    <>
      <Header />
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>Compose/edit your note:</Card.Title>
            <Form.Group className="mb-3">
              <Form.Control as="textarea" rows={5} placeholder="Enter your text..." />
            </Form.Group>
            <ButtonToolbar className="justify-content-end" aria-label="button toolbar">
              <ButtonGroup className="me-2" aria-label="button group">
                <Button variant="link" type="submit" active>
                  Save
                </Button>
                <Button variant="link" type="button">
                  Delete
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default NoteEditor;
