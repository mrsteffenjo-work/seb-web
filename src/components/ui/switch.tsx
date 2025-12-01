import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: { track: 'w-10 h-5', knob: 'w-4 h-4', translate: 'translate-x-5' },
  md: { track: 'w-14 h-7', knob: 'w-6 h-6', translate: 'translate-x-7' },
  lg: { track: 'w-16 h-8', knob: 'w-7 h-7', translate: 'translate-x-8' },
};

export const Switch: React.FC<SwitchProps> = ({ checked, onCheckedChange, className, size = 'md' }) => {
  const s = sizes[size];
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onCheckedChange(!checked)}
      className={cn(
        'relative inline-flex items-center rounded-full transition-colors border border-zinc-300 dark:border-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 select-none',
        checked ? 'bg-zinc-900 dark:bg-zinc-100' : 'bg-white dark:bg-zinc-800',
        s.track,
        className
      )}
    >
      {/* Knob */}
      <div
        className={cn(
          ' flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-900 shadow transition-transform text-[10px] md:text-xs',
          s.knob,
          checked ? s.translate : 'translate-x-0'
        )}
      >
        {checked ? '🌙' : '☀️'}
      </div>
    </button>
  );
};

export default Switch;
