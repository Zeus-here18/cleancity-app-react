import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, MapPin, Users, FileText, Shield, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Leaf },
    { name: 'Report Issue', href: '/report', icon: MapPin },
    { name: 'Issues Dashboard', href: '/dashboard', icon: FileText },
    { name: 'Volunteer', href: '/volunteer', icon: Users },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Admin', href: '/admin', icon: Shield },
    { name: 'Contact', href: '/contact', icon: Phone },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl group-hover:shadow-lg transition">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Clean City
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Urban Care Initiative</p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
