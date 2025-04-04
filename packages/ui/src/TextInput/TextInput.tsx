import React from "react";
import { cn } from "../utils/cn";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full bg-surface rounded-3xl p-4 border-2 border-gray-200 placeholder-on-surface font-semibold",
          className
        )}
        {...props}
      />
    );
  }
);

TextInput.displayName = "TextInput";
