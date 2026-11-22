import MainLayout from "../layouts/MainLayout";
import ListGroup from "react-bootstrap/ListGroup";

function NotesList() {
  return (
    <MainLayout title="My notes:">
      <ListGroup>
        <ListGroup.Item action>Note 1...</ListGroup.Item>
        <ListGroup.Item action>Note 2...</ListGroup.Item>
        <ListGroup.Item action>Note 3...</ListGroup.Item>
      </ListGroup>
    </MainLayout>
  );
}

export default NotesList;
