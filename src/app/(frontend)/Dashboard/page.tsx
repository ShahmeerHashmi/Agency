'use client'
import React from 'react'
import Link from 'next/link'

export default function DashboardPage() {
  async function handleLogout() {
    await fetch('/api/users/logout', { method: 'POST', credentials: 'include' })
    window.location.href = '/login'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 p-8">
      <div className="max-w-4xl mx-auto bg-white/90 rounded-2xl shadow-xl p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-purple-800">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Logout
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-purple-100 rounded-xl p-6 shadow flex flex-col items-center">
            <span className="text-5xl mb-2">📊</span>
            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p className="text-gray-700 text-center">
              Quick stats and analytics about your platform. (Customize this section with real
              data!)
            </p>
          </div>
          <div className="bg-indigo-100 rounded-xl p-6 shadow flex flex-col items-center">
            <span className="text-5xl mb-2">👤</span>
            <h2 className="text-xl font-semibold mb-2">Users</h2>
            <p className="text-gray-700 text-center">
              Manage users, view activity, and more. (Link to user management features here.)
            </p>
          </div>
          <div className="bg-green-100 rounded-xl p-6 shadow flex flex-col items-center">
            <span className="text-5xl mb-2">🛒</span>
            <h2 className="text-xl font-semibold mb-2">Products</h2>
            <p className="text-gray-700 text-center mb-2">View and manage your product listings.</p>
            <Link href="/Dashboard/ProductListing">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
                Go to Product Listing
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-10 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Webnity Studio Admin
        </div>
      </div>
    </div>
  )
}
