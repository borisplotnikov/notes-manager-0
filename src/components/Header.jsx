import NotebookPen from "lucide-react/icons/notebook-pen";

function Header() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <NotebookPen size={48} color="red" strokeWidth={3} />
          Navbar
        </a>
        <button className="btn btn-outline-success">New Note</button>
      </div>
    </nav>
  );
}

export default Header;
