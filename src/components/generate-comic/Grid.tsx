"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/generate-comic/cn";
import { useStore } from "@/store/useComic";

export function Grid({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  const zoomLevel = useStore((state) => state.zoomLevel);

  return (
    <div
      // the "fixed" width ensure our comic keeps a consistent ratio
      className={cn(`w-full h-full grid`, className)}
      style={{
        gap: `${(zoomLevel / 100) * 0.7}vw`,
      }}
    >
      {children}
    </div>
  );
}
