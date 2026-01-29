// StatCard.jsx
import React from "react";
import './StatCard.css'
export function StatCard({ title, value, change, isNegative, icon, gradient }) {
  return (
    <div className="stat-card ">
      {/* Title */}
      <p className="stat-title">{title}</p>

      {/* Value */}
      <p className="stat-value">{value}</p>

      {/* Change */}
      <p className={`stat-change ${isNegative ? "negative" : "positive"}`}>
        {change}
      </p>

      {/* Icon */}
      <div className="stat-icon" style={{ background: gradient }}>
        {icon}
      </div>
    </div>
  );
}
