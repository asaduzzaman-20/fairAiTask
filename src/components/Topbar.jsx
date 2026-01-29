import { Container } from "react-bootstrap";
import "../components/topbar.css";
import imgElipse6 from "../assets/icons/AvatarStyle.png"; // path ঠিক করে নিও
import notification from "../assets/icons/notifications.svg";
const Header = () => {
  return (
    <header className="header-bar">
      <Container fluid className="header-inner container">

        {/* Title */}
        <h1 className="header-title">Dashboard Overview</h1>

        {/* Right Section */}
        <div className="header-actions">

          {/* Notification */}
          <button className="notification-btn">
            <img
              src={notification}
              alt="Notifications"
              className="notification-icon"
            />
          </button>

          {/* Avatar */}
          <div className="avatar">
            <img src={imgElipse6} alt="User" />
          </div>

        </div>
      </Container>
    </header>
  );
};

export default Header;
