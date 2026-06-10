import React from "react";
import { AlertTriangle, AlertCircle, Info, ShieldAlert } from "lucide-react";

const severityConfig = {
  critical: { icon: ShieldAlert, color: "text-red-400", bg: "bg-red-400/10", border: "border-red-400/30", dot: "bg-red-400" },
  high: { icon: AlertTriangle, color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/30", dot: "bg-orange-400" },
  medium: { icon: AlertCircle, color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/30", dot: "bg-amber-400" },
  low: { icon: Info, color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/30", dot: "bg-blue-400" },
};

export default function AlertPanel({ alerts = [] }) {
  if (!alerts.length) {
    return (
      <div className="flex items-center justify-center h-32 text-muted-foreground text-sm">
        No active alerts
      </div>
    );
  }

  return (
    <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
      {alerts.map((alert) => {
        const config = severityConfig[alert.severity] || severityConfig.low;
        const Icon = config.icon;
        return (
          <div key={alert.id} className={`flex items-start gap-3 p-3 rounded-lg border ${config.border} ${config.bg}`}>
            <Icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${config.color}`} />
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-medium ${config.color}`}>{alert.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5 truncate">{alert.message}</p>
            </div>
            <div className={`w-2 h-2 rounded-full mt-1.5 ${config.dot} animate-pulse-glow`} />
          </div>
        );
      })}
    </div>
  );
}
