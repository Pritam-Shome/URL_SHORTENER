import React from 'react';
import { Link } from '@tanstack/react-router';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Shorten Your URLs
            <span className="text-blue-600"> Instantly</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create short, memorable links that are easy to share. Track clicks, manage your URLs, and boost your productivity with our powerful URL shortener.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 text-3xl mb-4">🔗</div>
            <h3 className="text-lg font-semibold mb-2">Custom Short URLs</h3>
            <p className="text-gray-600">Create branded short links with custom slugs that reflect your brand.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 text-3xl mb-4">📊</div>
            <h3 className="text-lg font-semibold mb-2">Analytics & Tracking</h3>
            <p className="text-gray-600">Monitor click-through rates and track the performance of your links.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 text-3xl mb-4">🔒</div>
            <h3 className="text-lg font-semibold mb-2">Secure & Reliable</h3>
            <p className="text-gray-600">Your links are safe with us. Enterprise-grade security and 99.9% uptime.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-gray-600 mb-6">
            Sign up now to start shortening URLs and tracking your links!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/auth"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors text-center"
            >
              Get Started Free
            </Link>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/auth" className="text-blue-600 hover:text-blue-700 font-medium">
                Sign In
              </Link>
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-gray-500">
          <p>Join thousands of users who trust our URL shortener</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
