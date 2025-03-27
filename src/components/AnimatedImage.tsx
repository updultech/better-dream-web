
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

interface AnimatedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  placeholderColor?: string;
  aspectRatio?: string;
}

const AnimatedImage = React.forwardRef<HTMLImageElement, AnimatedImageProps>(
  ({ src, alt, className, placeholderColor = "#f3f4f6", aspectRatio = "aspect-video", ...props }, ref) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      const img = new Image();
      img.src = src as string;
      img.onload = () => {
        setIsLoaded(true);
      };
    }, [src]);

    return (
      <div className={cn("overflow-hidden relative", aspectRatio)}>
        <div
          className={cn(
            "absolute inset-0 bg-muted",
            { "opacity-0": isLoaded },
            "transition-opacity duration-500 ease-in-out"
          )}
          style={{ backgroundColor: placeholderColor }}
        />
        <img
          ref={ref}
          src={src}
          alt={alt}
          className={cn(
            "w-full h-full object-cover transition-all duration-500",
            { "opacity-0 scale-105 blur-sm": !isLoaded, "opacity-100 scale-100 blur-0": isLoaded },
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

AnimatedImage.displayName = "AnimatedImage";

export default AnimatedImage;
