// src/components/ActivityWidgets.jsx
import "./activities.css";

export function RecentActivity() {
  const activities = [
    {
      text: "AI booked appointment for iPhone 13 screen repair",
      time: "2 min ago",
      color: "#00ff88",
    },
    {
      text: "Warm transfer to technician - Software issue",
      time: "5 min ago",
      color: "#ffa500",
    },
    {
      text: "Quote provided for iPad battery replacement",
      time: "8 min ago",
      color: "#00ff88",
    },
    {
      text: "Call dropped after 12 seconds",
      time: "15 min ago",
      color: "#fd244a",
    },
  ];

  return (
    <div className="card-box">
      <h3 className="card-title">Recent Activity</h3>

      <div className="activity-list">
        {activities.map((item, i) => (
          <div className="activity-item" key={i}>
            <span
              className="activity-dot"
              style={{ backgroundColor: item.color }}
            ></span>

            <div className="activity-text">
              <p>{item.text}</p>
              <small>{item.time}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TopRepairRequests() {
  const requests = [
    { name: "Screen Repair", count: 156, color: "#00ff88", percent: 85 },
    { name: "Battery Replacement", count: 89, color: "#2b7fff", percent: 48 },
    { name: "Back Glass Repair", count: 67, color: "#ad46ff", percent: 36 },
    { name: "Software Issues", count: 45, color: "#ff6900", percent: 24 },
  ];

  return (
    <div className="card-box">
      <h3 className="card-title">Top Repair Requests</h3>

      <div className="request-list">
        {requests.map((item, i) => (
          <div className="request-item" key={i}>
            <div className="d-flex justify-content-between mb-2">
              <span className="request-name">{item.name}</span>
              <span className="request-count">
                {item.count} requests
              </span>
            </div>

            <div className="progress-bar-wrapper">
              <div
                className="progress-bar-fill"
                style={{
                  width: `${item.percent}%`,
                  backgroundColor: item.color,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}