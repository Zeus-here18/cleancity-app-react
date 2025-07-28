import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Clean City</h1>
                <p className="text-xs text-gray-400">Urban Care Initiative</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Making our cities cleaner and more sustainable through community engagement and civic responsibility.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/report" className="block text-gray-300 hover:text-green-400 transition-colors text-sm">
                Report Issue
              </Link>
              <Link to="/dashboard" className="block text-gray-300 hover:text-green-400 transition-colors text-sm">
                Issue Dashboard
              </Link>
              <Link to="/volunteer" className="block text-gray-300 hover:text-green-400 transition-colors text-sm">
                Volunteer
              </Link>
              <Link to="/blog" className="block text-gray-300 hover:text-green-400 transition-colors text-sm">
                Blog
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <Link to="/contact" className="block text-gray-300 hover:text-green-400 transition-colors text-sm">
                Contact Us
              </Link>
              <a href="#" className="block text-gray-300 hover:text-green-400 transition-colors text-sm">
                Help Center
              </a>
              <a href="#" className="block text-gray-300 hover:text-green-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-300 hover:text-green-400 transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Clean City Initiative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;