import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0',
        destructive:
          'bg-red-500 text-white hover:bg-red-600',
        outline:
          'border border-border bg-transparent hover:bg-muted/50 hover:text-foreground hover:border-primary/50',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost:
          'hover:bg-muted/50 hover:text-foreground',
        link:
          'text-primary underline-offset-4 hover:underline',
        glow:
          'bg-gradient-to-r from-teal-600 via-teal-500 to-cyan-500 text-white font-bold shadow-[0_4px_20px_var(--color-accent-glow)] hover:shadow-[0_6px_28px_var(--color-accent-glow)] hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 transition-all',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-12 rounded-lg px-6 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
