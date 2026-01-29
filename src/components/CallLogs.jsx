// src/components/CallLogs.jsx
import { Phone, PhoneIncoming, PhoneMissed, Clock } from "lucide-react";
import "./callLogs.css";

export function CallLogs() {
  const calls = [
    {
      id: 1,
      caller: "John Smith",
      phone: "(555) 123-4567",
      type: "incoming",
      duration: "4:32",
      time: "10:45 AM",
      status: "completed",
      reason: "Screen Repair Inquiry",
    },
    {
      id: 2,
      caller: "Sarah Johnson",
      phone: "(555) 987-6543",
      type: "incoming",
      duration: "2:18",
      time: "10:30 AM",
      status: "completed",
      reason: "Battery Replacement",
    },
    {
      id: 3,
      caller: "Mike Davis",
      phone: "(555) 456-7890",
      type: "missed",
      duration: "0:00",
      time: "10:15 AM",
      status: "missed",
      reason: "Unknown",
    },
  ];

  return (
    <div className="call-logs-wrapper">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="page-title">Call Logs</h2>

        <div className="d-flex gap-3">
          <select className="form-select filter-select">
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>

          <button className="btn export-btn">
            Export Logs
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="row g-3 mb-4">
        <StatCard icon={<Phone />} label="Total Calls" value="127" color="green" />
        <StatCard icon={<PhoneIncoming />} label="Answered" value="121" color="blue" />
        <StatCard icon={<PhoneMissed />} label="Missed" value="red" />
        <StatCard icon={<Clock />} label="Avg Duration" value="3:42" color="purple" />
      </div>

      {/* Table */}
      <div className="table-card">
        <table className="table table-borderless mb-0 call-logs-table">
          <thead>
            <tr>
              <th>Caller</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Duration</th>
              <th>Time</th>
              <th>Reason</th>
            </tr>
          </thead>

          <tbody>
            {calls.map((call) => (
              <tr key={call.id}>
                <td>
                  <div className="d-flex align-items-center gap-3">
                    <div className="avatar">
                      {call.caller
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <span className="text-white">{call.caller}</span>
                  </div>
                </td>

                <td className="textColor">{call.phone}</td>

                <td>
                  <span
                    className={`status-badge ${
                      call.status === "completed"
                        ? "status-success"
                        : "status-danger"
                    }`}
                  >
                    {call.type === "missed" ? (
                      <PhoneMissed size={14} />
                    ) : (
                      <Phone size={14} />
                    )}
                    {call.status}
                  </span>
                </td>

                <td className="text-white">{call.duration}</td>
                <td className="textColor">{call.time}</td>
                <td className="text-white">{call.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* Small stat card */
function StatCard({ icon, label, value, color }) {
  return (
    <div className="col-md-3">
      <div className="stat-card">
        <div className="d-flex align-items-center gap-2 mb-2">
          <span className={`stat-icon ${color}`}>{icon}</span>
          <span className="stat-label">{label}</span>
        </div>
        <div className="stat-value">{value}</div>
      </div>
    </div>
  );
}