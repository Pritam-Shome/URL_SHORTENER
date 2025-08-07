import React from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slice/authSlice';
import { logoutUser } from '../api/user.api';
import { persistor } from '../store/store';

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Clear Redux state first
      dispatch(logout());
      // Clear persisted state
      await persistor.purge();
      // Clear localStorage manually as backup
      localStorage.removeItem('persist:auth');
      // Then call server logout
      await logoutUser();
      navigate({ to: '/landing' });
    } catch (error) {
      console.error('Logout failed:', error);
      // Still logout locally even if server request fails
      dispatch(logout());
      await persistor.purge();
      localStorage.removeItem('persist:auth');
      navigate({ to: '/landing' });
    }
  };
  return (
    <nav className="bg-white border border-b-black">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - App Name */}
          <div className="flex items-center">
            <Link to={isAuthenticated ? "/shorten" : "/landing"} className="text-xl font-bold text-gray-800">
              URL Shortener
            </Link>
          </div>
          
          {/* Right side - Auth buttons */}
          <div className="flex items-center">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Welcome, {user?.name || 'User'}</span>
                <Link
                  to="/shorten"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Shorten URL
                </Link>
                <Link
                  to="/dashboard"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;