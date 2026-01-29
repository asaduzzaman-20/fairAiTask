import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Bell, Globe, Lock, User } from "lucide-react";
import "./settings.css";

export default function Settings() {
  return (
    <Container fluid className="settings-page">
      <h2 className="settings-title">Settings</h2>

      {/* Profile Settings */}
      <Card className="settings-card">
        <Card.Header className="card-header">
          <User size={22} /> Profile Settings
        </Card.Header>
        <Card.Body>
          <Row className="g-4">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Full Name</Form.Label>
                <Form.Control defaultValue="John Doe" />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" defaultValue="john.doe@example.com" />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control defaultValue="+1 (555) 123-4567" />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Role</Form.Label>
                <Form.Control defaultValue="Administrator" disabled />
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Notification Settings */}
      <Card className="settings-card">
        <Card.Header className="card-header">
          <Bell size={22} /> Notification Settings
        </Card.Header>
        <Card.Body className="notification-list">
          {[
            "Email Notifications",
            "SMS Notifications",
            "Push Notifications",
            "Call Alerts",
          ].map((label, index) => (
            <div key={index} className="notification-item">
              <span>{label}</span>
              <Form.Check type="switch" defaultChecked={index !== 3} />
            </div>
          ))}
        </Card.Body>
      </Card>

      {/* System Settings */}
      <Row className="g-4">
        <Col md={6}>
          <Card className="settings-card">
            <Card.Header className="card-header">
              <Globe size={22} /> Regional Settings
            </Card.Header>
            <Card.Body>
              <Form.Group className="mb-3">
                <Form.Label>Language</Form.Label>
                <Form.Select>
                  <option>English (US)</option>
                  <option>Spanish</option>
                  <option>French</option>
                </Form.Select>
              </Form.Group>

              <Form.Group>
                <Form.Label>Time Zone</Form.Label>
                <Form.Select>
                  <option>PST (UTC-8)</option>
                  <option>EST (UTC-5)</option>
                  <option>CST (UTC-6)</option>
                </Form.Select>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="settings-card">
            <Card.Header className="card-header">
              <Lock size={22} /> Security
            </Card.Header>
            <Card.Body className="security-actions">
              <Button variant="outline-primary">Change Password</Button>
              <Button variant="outline-success">Enable 2FA</Button>
              <Button variant="outline-danger">View Login History</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Save Button */}
      <div className="save-btn-wrap">
        <Button className="save-btn">Save Changes</Button>
      </div>
    </Container>
  );
}