import React from "react";
import { ImageIcon } from "lucide-react";

export default function AirportImageSlots({ image1, image2 }) {
  const renderSlot = (url, label) => {
    if (url) {
      return <img src={url} alt={label} className="w-full h-40 object-cover rounded-lg border border-border" />;
    }
    return (
      <div className="w-full h-40 rounded-lg border border-dashed border-border flex flex-col items-center justify-center text-muted-foreground bg-secondary/30">
        <ImageIcon className="w-8 h-8 mb-2 opacity-50" />
        <span className="text-xs">{label}</span>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      {renderSlot(image1, "Airport Image 1")}
      {renderSlot(image2, "Airport Image 2")}
    </div>
  );
}
