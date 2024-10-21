import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"

export const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
    return (
      <span
        className={cn("bg-accent/30 hover:bg-accent/50 transition-colors font-mono text-primary border border-accent py-1", className)}
        {...props}
      />
    )
  }