'use client'
import React, { useState } from 'react';
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { Menu, X } from 'lucide-react';

function Layout({ children }: { children: React.ReactNode }) {
  // State to manage sidebar visibility on mobile
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='bg-slate-100 min-h-screen'>
      {/* Sidebar for larger screens */}
      <div className='md:w-64 hidden md:block fixed'>
        <SideNav />
      </div>

      {/* Main content area */}
      <div className={`md:ml-64 p-4 transition-all duration-300`}>
        <Header />
        {children}
      </div>

      {/* Button to toggle sidebar on mobile */}
      <div className='md:hidden fixed top-4 left-4 z-50'>
        <button
          className='p-2 bg-primary text-white rounded-md'
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
        </button>
      </div>

      {/* Overlay when sidebar is open on mobile */}
      {sidebarOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-40'
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar for mobile with slide-in effect */}
      <div
        className={`fixed inset-y-0 left-0 bg-white w-64 z-50 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300`}
      >
        <SideNav />
      </div>
    </div>
  );
}

export default Layout;
