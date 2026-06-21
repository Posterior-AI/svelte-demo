<script lang="ts">
  import { cn } from '$lib/utils';

  export let variant: 'default' | 'outline' | 'secondary' | 'ghost' = 'default';
  export let size: 'default' | 'sm' | 'lg' = 'default';

  let className = '';
  export { className as class };

  const variants = {
    default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
    outline: 'border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
  };

  const sizes = {
    default: 'h-9 px-4 py-2',
    sm: 'h-8 rounded-md px-3 text-xs',
    lg: 'h-10 rounded-md px-6',
  };
</script>

<button
  class={cn(
    'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
    variants[variant],
    sizes[size],
    className
  )}
  {...$$restProps}
>
  <slot />
</button>
