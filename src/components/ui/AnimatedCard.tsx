
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  className, 
  delay = 0,
  hoverEffect = true,
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      viewport={{ once: true }}
      whileHover={hoverEffect ? { 
        y: -5,
        transition: { duration: 0.2, ease: 'easeOut' }
      } : undefined}
      className={cn(
        "rounded-lg bg-white shadow-elevated transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
