import { cn } from '@renderer/lib/shadcn.ts'
import * as React from 'react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md bg-zinc-700 px-3 py-2 border-2 border-transparent text-sm text-zinc-50 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-design-system-schemes-inverse-on-surface/40 focus-visible:outline-none focus-visible:border-zinc-800 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
