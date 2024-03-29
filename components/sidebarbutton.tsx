import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const sideBarButtonVariants = cva(
  "inline-flex items-center justify-left whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        active:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        inactive: " text-slate-500 hover:bg-accent",
      },
      size: {
        default: "h-10 px-3 py-6 rounded-lg",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "active",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof sideBarButtonVariants> {
  asChild?: boolean
}

const SideBarButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(sideBarButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
SideBarButton.displayName = "Button"

export { SideBarButton, sideBarButtonVariants }
