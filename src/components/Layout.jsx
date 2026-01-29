import { Link, Outlet, useLocation } from "react-router-dom";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import { Home, Phone, Calendar, Settings as SettingsIcon, LogOut } from "lucide-react";
import imgElipse6 from "../assets/img.jpg";
import svgPaths from "../assets/svg";
import "./layout.css";

export function Layout() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Dashboard Overview", icon: Home },
    { path: "/call-logs", label: "Call Logs", icon: Phone },
    { path: "/appointments", label: "Appointments", icon: Calendar },
    { path: "/settings", label: "Settings", icon: SettingsIcon },
  ];

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <Container fluid className="layout-root">
      <Row className="h-100">
        {/* Sidebar */}
        <Col xs="auto" className="sidebar">
          <Nav className="flex-column nav-menu">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Nav.Item key={path}>
                <Link
                  to={path}
                  className={`nav-link-custom ${isActive(path) ? "active" : ""}`}
                >
                  <Icon size={28} />
                  <span>{label}</span>
                </Link>
              </Nav.Item>
            ))}
          </Nav>

          <div className="logout-box">
            <Button variant="link" className="logout-btn">
              <LogOut size={28} />
              <span>Log Out</span>
            </Button>
          </div>
        </Col>

        {/* Main */}
        <Col className="main-area p-0">
          <header className="header">
            <h1>Dashboard Overview</h1>
            <div className="header-right">
              <div className="avatar">
                <img src={imgElipse6} alt="User" />
              </div>
            </div>
          </header>

          <main className="content">
            <Outlet />
          </main>
        </Col>
      </Row>
    </Container>
  );
}