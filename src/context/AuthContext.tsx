
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

// Demo user
const DEMO_USER = {
  id: '1',
  email: 'demo@sentinelai.com',
  firstName: 'Demo',
  lastName: 'User',
  company: 'Acme Supply Co.',
  role: 'Supply Chain Manager',
};

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, firstName: string, lastName: string, company: string) => Promise<void>;
  logout: () => void;
  demoLogin: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Check for saved user on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('sentinelUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simple validation
      if (email.trim() === '' || password.trim() === '') {
        throw new Error('Please enter both email and password');
      }
      
      // For demo purposes, allow any login with valid email format
      if (!/\S+@\S+\.\S+/.test(email)) {
        throw new Error('Please enter a valid email address');
      }
      
      // Create a custom user based on input
      const newUser = {
        id: '1',
        email,
        firstName: email.split('@')[0],
        lastName: 'User',
        company: 'Your Company',
        role: 'Supply Chain Manager',
      };
      
      setUser(newUser);
      localStorage.setItem('sentinelUser', JSON.stringify(newUser));
      toast.success('Successfully logged in');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Login failed');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (
    email: string, 
    password: string, 
    firstName: string, 
    lastName: string, 
    company: string
  ) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simple validation
      if (email.trim() === '' || password.trim() === '') {
        throw new Error('Please fill in all required fields');
      }
      
      if (!/\S+@\S+\.\S+/.test(email)) {
        throw new Error('Please enter a valid email address');
      }
      
      const newUser = {
        id: '1',
        email,
        firstName: firstName || email.split('@')[0],
        lastName: lastName || 'User',
        company: company || 'Your Company',
        role: 'Supply Chain Manager',
      };
      
      setUser(newUser);
      localStorage.setItem('sentinelUser', JSON.stringify(newUser));
      toast.success('Account created successfully');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Signup failed');
      console.error('Signup error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const demoLogin = () => {
    setUser(DEMO_USER);
    localStorage.setItem('sentinelUser', JSON.stringify(DEMO_USER));
    toast.success('Successfully logged in with demo account');
    navigate('/dashboard');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('sentinelUser');
    toast.info('Successfully logged out');
    navigate('/');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        signup,
        logout,
        demoLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
