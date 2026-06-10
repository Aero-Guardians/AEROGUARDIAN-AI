import React from "react";

export default function StatusCard({ icon: Icon, label, value, sub, color = "primary" }) {
  const colorMap = {
    primary: "text-primary bg-primary/10 border-primary/20",
    green: "text-green-400 bg-green-400/10 border-green-400/20",
    amber: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    red: "text-red-400 bg-red-400/10 border-red-400/20",
    purple: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  };

  return (
    <div className="bg-card rounded-lg border border-border p-4 flex items-start gap-4">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorMap[color]?.split(" ").slice(1).join(" ") || "bg-primary/10"}`}>
        <Icon className={`w-5 h-5 ${colorMap[color]?.split(" ")[0] || "text-primary"}`} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{label}</p>
        <p className="text-2xl font-heading font-bold mt-0.5">{value}</p>
        {sub && <p className="text-xs text-muted-foreground mt-1">{sub}</p>}
      </div>
    </div>
  );
}
