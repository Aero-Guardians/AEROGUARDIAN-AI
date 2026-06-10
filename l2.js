import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard, Plane, Radar, AlertTriangle, Clock, ShieldAlert,
  Car, Wrench, HeartPulse, FileText, ChevronLeft, ChevronRight,
  Radio, Settings, LogOut
} from "lucide-react";
import { base44 } from "@/api/base44Client";

const navItems = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/drone-fleet", label: "Drone Fleet", icon: Radio },
  { path: "/radar", label: "Radar System", icon: Radar },
  { path: "/runway-ops", label: "Runway Ops", icon: Plane },
  { path: "/delay-predictor", label: "AI Delay Predictor", icon: Clock },
  { path: "/flight-risk", label: "Flight Risk", icon: ShieldAlert },
  { path: "/vehicle-tracking", label: "Vehicle Tracking", icon: Car },
  { path: "/aircraft-health", label: "Aircraft Health", icon: HeartPulse },
  { path: "/engineer-reports", label: "Engineer Reports", icon: Wrench },
  { path: "/alerts", label: "Alerts", icon: AlertTriangle },
  { path: "/logs", label: "System Logs", icon: FileText },
  { path: "/settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside className={`h-screen sticky top-0 flex flex-col bg-sidebar border-r border-sidebar-border transition-all duration-300 ${collapsed ? "w-16" : "w-60"}`}>
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <Radar className="w-5 h-5 text-primary" />
            </div>
            <span className="font-display text-sm font-bold text-primary tracking-wider">AMS·AI</span>
          </div>
        )}
        <button onClick={() => setCollapsed(!collapsed)} className="p-1 rounded hover:bg-sidebar-accent text-muted-foreground">
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      <nav className="flex-1 py-3 space-y-0.5 overflow-y-auto px-2">
        {navItems.map(item => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-all ${
                isActive
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
              title={collapsed ? item.label : undefined}
            >
              <item.icon className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-primary" : ""}`} />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="p-3 border-t border-sidebar-border">
        <button
          onClick={() => base44.auth.logout("/")}
          className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-sidebar-accent hover:text-destructive w-full transition-colors"
          title={collapsed ? "Logout" : undefined}
        >
          <LogOut className="w-4 h-4 flex-shrink-0" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
