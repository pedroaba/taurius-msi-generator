import { cn } from '@renderer/lib/shadcn.ts'
import * as React from 'react'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[6.5rem] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          'flex h-10 w-full rounded-md bg-zinc-700 px-3 py-2 border-2 border-transparent text-sm text-zinc-50 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-design-system-schemes-inverse-on-surface/40 focus-visible:outline-none focus-visible:border-zinc-800 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Textarea.displayName = 'Textarea'

export { Textarea }
