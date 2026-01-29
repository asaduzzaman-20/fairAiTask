// // App.jsx
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './dashboard.css';
// import Sidebar from './Sidebar';
// import Dashboard from './Dashboard';

// export default function App() {
//   return (
//     <div className="d-flex dashboard-root">
//       <Sidebar />
//       <Dashboard />
//     </div>
//   );
// }

// // Sidebar.jsx
// import DashboardIcon from './icons/dashboard.svg';
// import CallIcon from './icons/call.svg';
// import CalendarIcon from './icons/calendar.svg';
// import SettingsIcon from './icons/settings.svg';

// export default function Sidebar() {
//   return (
//     <aside className="sidebar text-white p-3">
//       <div className="logo mb-4">⚡</div>
//       <ul className="nav flex-column gap-2">
//         <li className="nav-item active d-flex align-items-center gap-2">
//           <img src={DashboardIcon} width="18" /> Dashboard Overview
//         </li>
//         <li className="nav-item d-flex align-items-center gap-2">
//           <img src={CallIcon} width="18" /> Call Logs
//         </li>
//         <li className="nav-item d-flex align-items-center gap-2">
//           <img src={CalendarIcon} width="18" /> Appointments
//         </li>
//         <li className="nav-item d-flex align-items-center gap-2">
//           <img src={SettingsIcon} width="18" /> Settings
//         </li>
//       </ul>
//     </aside>
//   );
// }

// // Dashboard.jsx
// export default function Dashboard() {
//   return (
//     <main className="flex-grow-1 p-4 text-white">
//       <h4 className="mb-4">Dashboard Overview</h4>

//       <div className="row g-3">
//         <Stat title="Total Calls" value="127" percent="+12%" />
//         <Stat title="AI-handled Calls" value="98" percent="+7%" />
//         <Stat title="Warm Transfer" value="23" percent="+18%" />
//       </div>

//       <div className="row g-3 mt-2">
//         <Stat title="Appointments Booked" value="34" percent="+8%" />
//         <Stat title="Missed Calls" value="6" percent="-3%" />
//         <Stat title="Avg Call Duration" value="3:42" percent="+15%" />
//       </div>

//       <div className="card dark-card mt-4 p-4">
//         <h6>Call Trends - This Week</h6>
//         <div className="chart-placeholder">(Chart এখানে বসবে)</div>
//       </div>

//       <div className="row mt-4 g-3">
//         <div className="col-md-6">
//           <div className="card dark-card p-3">Recent Activity</div>
//         </div>
//         <div className="col-md-6">
//           <div className="card dark-card p-3">Top Repair Requests</div>
//         </div>
//       </div>
//     </main>
//   );
// }

// function Stat({ title, value, percent }) {
//   return (
//     <div className="col-md-4">
//       <div className="card dark-card p-3">
//         <small className="text-muted">{title}</small>
//         <h3 className="mb-0">{value}</h3>
//         <small className="text-success">{percent}</small>
//       </div>
//     </div>
//   );
// }

// // dashboard.css
// .dashboard-root {
//   min-height: 100vh;
//   background: radial-gradient(circle at top, #15235a, #050b25);
// }

// .sidebar {
//   width: 240px;
//   background: linear-gradient(180deg, #0b1437, #070d26);
// }

// .sidebar .nav-item {
//   padding: 10px 12px;
//   border-radius: 10px;
//   cursor: pointer;
//   opacity: 0.85;
// }

// .sidebar .nav-item.active,
// .sidebar .nav-item:hover {
//   background: rgba(255,255,255,0.08);
//   opacity: 1;
// }

// .dark-card {
//   background: linear-gradient(180deg, #101b44, #0a1235);
//   border-radius: 16px;
//   border: none;
// }

// .chart-placeholder {
//   height: 220px;
//   margin-top: 20px;
//   background: rgba(255,255,255,0.05);
//   border-radius: 12px;
// }
