
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  FacebookIcon, 
  TwitterIcon, 
  InstagramIcon, 
  LinkedinIcon,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-sentinel-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-xl">S</span>
              </div>
              <span className="text-xl font-semibold">Sentinel</span>
            </Link>
            <p className="text-gray-600 mb-6">
              AI-powered supply chain risk management for medium-sized businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-sentinel-600 transition-colors">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sentinel-600 transition-colors">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sentinel-600 transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sentinel-600 transition-colors">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Platform
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/features" className="text-gray-600 hover:text-sentinel-600 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/supplier-risk" className="text-gray-600 hover:text-sentinel-600 transition-colors">
                  Supplier Risk
                </Link>
              </li>
              <li>
                <Link to="/logistics" className="text-gray-600 hover:text-sentinel-600 transition-colors">
                  Logistics
                </Link>
              </li>
              <li>
                <Link to="/scenario-planning" className="text-gray-600 hover:text-sentinel-600 transition-colors">
                  Scenario Planning
                </Link>
              </li>
              <li>
                <Link to="/alerts" className="text-gray-600 hover:text-sentinel-600 transition-colors">
                  Intelligent Alerts
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-sentinel-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-sentinel-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sentinel-600 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sentinel-600 transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sentinel-600 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-sentinel-600 mr-3 mt-0.5" />
                <span className="text-gray-600">
                  123 Supply Chain Blvd.<br />
                  Suite 200<br />
                  San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-sentinel-600 mr-3" />
                <a href="mailto:info@sentinelai.com" className="text-gray-600 hover:text-sentinel-600 transition-colors">
                  info@sentinelai.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-sentinel-600 mr-3" />
                <a href="tel:+15550123456" className="text-gray-600 hover:text-sentinel-600 transition-colors">
                  +1 (555) 012-3456
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} Sentinel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
