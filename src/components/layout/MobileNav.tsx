
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BarChart2, Users, Truck, GitBranch, Bell, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';

const MobileNav: React.FC = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 md:hidden z-50">
      <div className="flex justify-around items-center">
        <NavItem 
          to="/dashboard" 
          icon={<Home className="w-5 h-5" />} 
          label="Home" 
          active={location.pathname === '/dashboard'} 
        />
        <NavItem 
          to="/supplier-risk" 
          icon={<Users className="w-5 h-5" />} 
          label="Suppliers" 
          active={location.pathname === '/supplier-risk'} 
        />
        <NavItem 
          to="/logistics" 
          icon={<Truck className="w-5 h-5" />} 
          label="Logistics" 
          active={location.pathname === '/logistics'} 
        />
        <NavItem 
          to="/scenario-planning" 
          icon={<GitBranch className="w-5 h-5" />} 
          label="Scenarios" 
          active={location.pathname === '/scenario-planning'} 
        />
        <NavItem 
          to="/alerts" 
          icon={<Bell className="w-5 h-5" />} 
          label="Alerts" 
          active={location.pathname === '/alerts'} 
        />
      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label, active }) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "flex flex-col items-center justify-center rounded-md p-1.5",
        active ? "text-primary" : "text-gray-500 hover:text-gray-900"
      )}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
};

export default MobileNav;
