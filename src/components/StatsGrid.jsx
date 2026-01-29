// StatsGrid.jsx
import React from "react";
import { StatCard } from "./StatCard";

import { Phone, Bot, Repeat, XCircle, Calendar, Clock } from "lucide-react";



export function StatsGrid() {
  const stats = [
    {
      title: "Total Calls Today",
      value: 127,
      change: "+12%",
      icon: <Phone size={24} color="white" />,
      gradient: "linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(0, 184, 219) 100%)",
    },
    {
      title: "AI-Handled Calls",
      value: 98,
      change: "+77%",
      icon: <Bot size={24} color="white" />,
      gradient: "linear-gradient(135deg, rgb(173, 70, 255) 0%, rgb(246, 51, 154) 100%)",
    },
    {
      title: "Warm Transfer",
      value: 23,
      change: "+18%",
      icon: <Repeat size={24} color="white" />,
      gradient: "linear-gradient(135deg, rgb(255, 105, 0) 0%, rgb(251, 44, 54) 100%)",
    },
    {
      title: "Appointments Booked",
      value: 34,
      change: "+8%",
      icon: <Calendar size={24} color="white" />,
      gradient: "linear-gradient(135deg, rgb(0, 201, 80) 0%, rgb(0, 188, 125) 100%)",
    },
    {
      title: "Missed/Failed Calls",
      value: 6,
      change: "-3%",
      isNegative: true,
      icon: <XCircle size={24} color="white" />,
      gradient: "linear-gradient(135deg, rgb(251, 44, 54) 0%, rgb(255, 32, 86) 100%)",
    },
    {
      title: "Avg Call Duration",
      value: "3:42",
      change: "+15%",
      icon: <Clock size={24} color="white" />,
      gradient: "linear-gradient(135deg, rgb(97, 95, 255) 0%, rgb(43, 127, 255) 100%)",
    },
  ];

  return (
    <div className="row g-3">
      {stats.map((stat, index) => (
        <div className="col-sm-6 col-lg-4" key={index}>
          <StatCard {...stat} />
        </div>
      ))}
    </div>
  );
}
