
import '../components/sidebar.css'
import home from '../assets/icons/Calender.svg';
import DashboardIcon from '../assets/icons/home.svg';
import CallIcon from '../assets/icons/call.svg';
import CalendarIcon from '../assets/icons/Appointments.svg';
import SettingsIcon from '../assets/icons/settings.svg';
import Logout from '../assets/icons/logout.svg';
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-box">
        <i className="bi bi-lightning-charge-fill logo-icon"><img src={home} /></i>
      </div>

      <div className="menu">
        <div className="menu-item active custom-box">
          <i className="logo-icon"> <img src={DashboardIcon} className='img-size' /></i>
          <span>Dashboard Overview</span>
        </div>

        <div className="menu-item">
          <i className="logo-icon"><img src={CallIcon} className='img-size' /></i>
          <span>Call Logs</span>
        </div>

        <div className="menu-item">
          <i className="logo-icon"> <img src={CalendarIcon} className='img-size' /></i>
          <span>Appointments</span>
        </div>

        <div className="menu-item">
          <i className="logo-icon"><img src={SettingsIcon} className='img-size' /></i>
          <span>Settings</span>
        </div>

        <div className="logout">
          <i className="logo-icon"><img src={Logout} className='img-size' /></i>
          <span>Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
