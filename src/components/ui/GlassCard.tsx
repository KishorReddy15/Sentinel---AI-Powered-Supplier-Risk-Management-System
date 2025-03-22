
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
  blur?: 'sm' | 'md' | 'lg';
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  hover = true, 
  blur = 'md',
  className,
  ...props 
}) => {
  const blurValue = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
  };

  return (
    <div
      className={cn(
        "bg-white/80 border border-white/20 rounded-lg shadow-glass",
        blurValue[blur],
        hover && "transition-all hover:shadow-glass-hover hover:bg-white/90",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
