import React from "react";
import { cn } from "@/lib/utils";
const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "bg-gradient-to-br shadow-neutral-900/60 shadow-md relative to-gray-800/80 p-6 from-gray-950/80 backdrop-blur-sm border rounded-lg border-neutral-400 overflow-hidden",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
