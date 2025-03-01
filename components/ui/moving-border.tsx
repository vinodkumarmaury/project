"use client";

import React from "react";
import { Button as ButtonBase, ButtonProps as ButtonBaseProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonBaseProps {
  movingBorder?: boolean;
  borderRadius?: string;
  className?: string;
  as?: React.ElementType;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, movingBorder = true, borderRadius = "0.5rem", as: Component = ButtonBase, children, ...props }, ref) => {
    const borderRadiusValue = borderRadius;
    
    return movingBorder ? (
      <div
        className="moving-border-container"
        style={{
          "--border-radius": borderRadiusValue,
        } as React.CSSProperties}
      >
        <Component
          ref={ref}
          className={cn("relative z-10", className)}
          {...props}
        >
          {children}
        </Component>
      </div>
    ) : (
      <Component ref={ref} className={className} {...props}>
        {children}
      </Component>
    );
  }
);

Button.displayName = "MovingBorderButton";