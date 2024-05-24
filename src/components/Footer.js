import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Footer Column 1 */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="font-bold mb-2">Company</h5>
            <ul>
              <li className="mb-1"><Link to="/about" className="hover:underline">About Us</Link></li>
              <li className="mb-1"><Link to="/careers" className="hover:underline">Careers</Link></li>
              <li className="mb-1"><Link to="/blog" className="hover:underline">Blog</Link></li>
            </ul>
          </div>
          {/* Footer Column 2 */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="font-bold mb-2">Support</h5>
            <ul>
              <li className="mb-1"><Link to="/contact" className="hover:underline">Contact Us</Link></li>
              <li className="mb-1"><Link to="/faq" className="hover:underline">FAQ</Link></li>
              <li className="mb-1"><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
            </ul>
          </div>
          {/* Footer Column 3 */}
          <div className="w-full md:w-1/3">
            <h5 className="font-bold mb-2">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-gray-400" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..."></path></svg>
              </a>
              <a href="https://twitter.com" className="hover:text-gray-400" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..."></path></svg>
              </a>
              <a href="https://instagram.com" className="hover:text-gray-400" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..."></path></svg>
              </a>
              <a href="https://linkedin.com" className="hover:text-gray-400" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..."></path></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} MyCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
