import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import NotebookPen from "lucide-react/icons/notebook-pen";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";

function Template({ title, children }) {
  return (
    <>
      <Navbar className="bg-body-secondary" data-bs-theme="dark">
        <Container className="bg-body-tertiary rounded-3 py-2">
          <Navbar.Brand>
            <NotebookPen size={32} color="red" strokeWidth={3} aria-hidden="true" />
            Primitive React Notes Manager
          </Navbar.Brand>

          <Button>New Note</Button>
        </Container>
      </Navbar>

      <Container>
        <Card>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            {children}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Template;
