import NotebookPen from "lucide-react/icons/notebook-pen";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar className="bg-body-secondary" data-bs-theme="dark">
      <Container className="bg-body-tertiary rounded-3 py-2">
        <Navbar.Brand>
          <NotebookPen size={32} color="red" strokeWidth={3} aria-hidden="true" />
          Navbar
        </Navbar.Brand>
        <Button>New Note</Button>
      </Container>
    </Navbar>
  );
}

export default Header;
