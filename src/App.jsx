/*import 'bootstrap/dist/css/bootstrap.min.css';
import './pages/dashboard.css';
import './App.css';
import Sidebar from './components/Sidebar.jsx';
import Topbar from './components/Topbar.jsx';
import { StatsGrid } from './components/StatsGrid.jsx';
import { StatCard } from './components/StatCard.jsx';
import CallTrendsChart from './components/CallTrendsChart.jsx';
import {TopRepairRequests, RecentActivity} from './components/Activities.jsx'
import { CallLogs } from './components/CallLogs.jsx';
import { Layout } from './components/Layout.jsx';

export default function App() {
  return (
    <div className="dashboard-root dasbordPosition ">


      <div className="className='sidbarPosition'">
        <Sidebar />
      </div>
      <div className="main-area topbarPosition">
        <Topbar />
        {/* এখানে পরে Dashboard / Routes যাবে 
      </div>
      {/* <div className="page-content statsgridPosition">    --------------------------------
        <StatsGrid  />

      </div>
      <div className="page-content CallTrendsChart ">
        <CallTrendsChart/>

      </div>
      <div className="page-content  recentActivity ">
        <TopRepairRequests className='cardBox'/>
        <RecentActivity className='cardBox'/> 

      </div>
      <div className="page-content   calllogsStyle">
       <CallLogs/>
       </div> 
      <div className="page-content   calllogsStyle">
       <Layout/>

      </div>
    </div>
  );
}
*/




import { Routes, Route } from "react-router-dom";


import { Layout } from "./components/Layout";

import Dashboard from "./pages/Dashbord.jsx";
import {CallLogs} from "../src/components/CallLogs.jsx";
import Appointments from "./pages/Appointments";
// import Appointments from "../src/components/Activities.jsx";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="call-logs" element={<CallLogs />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}