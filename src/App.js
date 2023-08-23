import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { MdAppRegistration } from "react-icons/md"; // Ícones Material Icons
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"; // Importando estilos personalizados

function SidebarExample() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const sidebarClass = sidebarVisible ? "show-sidebar" : "hide-sidebar";

  return (
    <div className={`d-flex ${sidebarClass}`}>
      {/* Sidebar */}
      <div className="border-end bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading border-bottom bg-light">STOK</div>
        <div className="list-group list-group-flush">
          <a
            className="list-group-item list-group-item-action list-group-item-light p-3"
            href="/entrada.js"
          >
            {sidebarVisible ? <>Entrada</> : <MdAppRegistration size="2em" />}
          </a>
          <a
            className="list-group-item list-group-item-action list-group-item-light p-3"
            href="#!"
          >
            {sidebarVisible ? "Shortcuts" : ""}
          </a>
          <a
            className="list-group-item list-group-item-action list-group-item-light p-3"
            href="#!"
          >
            {sidebarVisible ? "Overview" : ""}
          </a>
          <a
            className="list-group-item list-group-item-action list-group-item-light p-3"
            href="#!"
          >
            {sidebarVisible ? "Events" : ""}
          </a>
          <a
            className="list-group-item list-group-item-action list-group-item-light p-3"
            href="#!"
          >
            {sidebarVisible ? "Profile" : ""}
          </a>
          <a
            className="list-group-item list-group-item-action list-group-item-light p-3"
            href="#!"
          >
            {sidebarVisible ? "Status" : ""}
          </a>
        </div>
      </div>
      {/* Page content wrapper */}
      <div id="page-content-wrapper">
        {/* Top navigation */}
        <Navbar expand="lg" className="navbar-light bg-light border-bottom">
          <div className="container-fluid">
            <Button
              variant="secondary"
              id="sidebarToggle"
              onClick={toggleSidebar}
            >
              {sidebarVisible ? "Hide" : "Show"} Menu
            </Button>
            <Navbar.Toggle aria-controls="navbarSupportedContent" />
            <Navbar.Collapse id="navbarSupportedContent">
              <Nav className="ms-auto mt-2 mt-lg-0">
                <Nav.Item className="nav-item active">
                  <Nav.Link href="#!">Sair</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        {/* Page content */}
        <div className="container-fluid">
          <h1 className="mt-4">Simple Sidebar</h1>
          <p>
            The starting state of the menu will appear collapsed on smaller
            screens, and will appear non-collapsed on larger screens. When
            toggled using the button below, the menu will change.
          </p>
          <p>
            Make sure to keep all page content within the
            <code>#page-content-wrapper</code>. The top navbar is optional, and
            just for demonstration. Just create an element with the
            <code>#sidebarToggle</code>
            ID which will toggle the menu when clicked.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SidebarExample;
