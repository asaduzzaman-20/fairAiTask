import "../pages/dashboard.css";
import { StatsGrid } from "../components/StatsGrid";
import CallTrendsChart from "../components/CallTrendsChart";
import { TopRepairRequests, RecentActivity } from "../components/Activities";
import { CallLogs } from "../components/CallLogs";

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      
      {/* Stats */}
      <section className="dashboard-section">
        <StatsGrid />
      </section>

      {/* Chart */}
      <section className="dashboard-section">
        <CallTrendsChart />
      </section>

      {/* Activities */}
      <section className="dashboard-section two-col">
        <TopRepairRequests />
        <RecentActivity />
      </section>

      {/* Call Logs */}
      <section className="dashboard-section">
        <CallLogs />
      </section>

    </div>
  );
}