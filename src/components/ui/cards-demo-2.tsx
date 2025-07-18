"use client";
import { cn } from "@/lib/utils";

interface AssetCardProps {
  title: string;
  description: string;
  backgroundImage?: string;
}

export function AssetCard({ 
  title, 
  description, 
  backgroundImage = "https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
}: AssetCardProps) {
  return (
    <div className="w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative h-64 rounded-xl shadow-xl flex items-center justify-center p-6 bg-cover bg-center",
        )}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* White overlay - high opacity by default, low opacity on hover to show colors */}
        <div className="absolute w-full h-full top-0 left-0 bg-white transition-opacity duration-300 opacity-90 group-hover/card:opacity-30"></div>
        
        {/* Content - Title and subtitle, centered */}
        <div className="relative z-10 text-center">
          <h3 className="text-2xl md:text-3xl font-medium tracking-tighter text-foreground mb-2">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CardDemo() {
  return (
    <AssetCard
      title="Private Equity"
      description="Identify co-investors for mid-market software deals"
    />
  );
}