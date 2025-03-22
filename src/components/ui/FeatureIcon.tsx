
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface FeatureIconProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  className?: string;
  iconClassName?: string;
  pulse?: boolean;
}

const FeatureIcon: React.FC<FeatureIconProps> = ({
  icon: Icon,
  className,
  iconClassName,
  pulse = true,
}) => {
  return (
    <div className={cn(
      "w-12 h-12 rounded-lg bg-sentinel-50 flex items-center justify-center",
      className
    )}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <Icon className={cn(
          "w-6 h-6 text-sentinel-600", 
          pulse && "animate-pulse-slow",
          iconClassName
        )} />
      </motion.div>
    </div>
  );
};

export default FeatureIcon;
