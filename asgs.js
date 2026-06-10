import React from "react";
import { Battery, MapPin, Gauge, ArrowUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const statusColors = {
  in_flight: "bg-green-400",
  idle: "bg-gray-400",
  returning: "bg-amber-400",
  charging: "bg-blue-400",
  maintenance: "bg-purple-400",
  emergency: "bg-red-400",
};

export default function DroneStatusList({ drones = [] }) {
  if (!drones.length) {
    return <p className="text-center text-muted-foreground text-sm py-8">No drones registered</p>;
  }

  return (
    <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
      {drones.map((drone) => (
        <div key={drone.id} className="bg-secondary/50 rounded-lg p-3 border border-border">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${statusColors[drone.status] || "bg-gray-400"} ${drone.status === "in_flight" ? "animate-pulse-glow" : ""}`} />
              <span className="text-sm font-medium">{drone.name}</span>
            </div>
            <span className="text-xs text-muted-foreground uppercase tracking-wide">{drone.status?.replace("_", " ")}</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Battery className="w-3 h-3" />
              <span>{drone.battery_level}%</span>
            </div>
            <div className="flex items-center gap-1">
              <ArrowUp className="w-3 h-3" />
              <span>{drone.altitude}m</span>
            </div>
            <div className="flex items-center gap-1">
              <Gauge className="w-3 h-3" />
              <span>{drone.speed} km/h</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>{drone.zone?.replace("_", " ")}</span>
            </div>
          </div>
          <div className="mt-2">
            <Progress value={drone.battery_level} className="h-1" />
          </div>
        </div>
      ))}
    </div>
  );
}
