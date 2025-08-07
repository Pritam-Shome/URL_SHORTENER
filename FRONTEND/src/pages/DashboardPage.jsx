import React from 'react'
import UserUrl from '../components/UserUrl'

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Dashboard</h1>
            <p className="text-gray-600">View and manage your shortened URLs</p>
          </div>
          <UserUrl/>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage