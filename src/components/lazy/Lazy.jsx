import React, { Suspense } from 'react'
// import Button from '../usable/Button';
import { NavLink, Outlet } from 'react-router';

const LazyHome = React.lazy(() => import('./Home'))
const LazyAbout = React.lazy(() => import('./About'))
const LazyContact = React.lazy(() => import('./Contact'))

function Lazy() {
  return (
  <>
      <div className="flex min-h-screen bg-gray-100">
      <div className="w-64 bg-gray-400 text-white">
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Dashboard</h2>
        </div>
        <nav className="mt-6">
          <ul>
                <li>
                  <NavLink to={'home'}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={'about'}>About</NavLink>
                </li>
                <li>
                  <NavLink to={'contact'}>Contact</NavLink>
                </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 p-8">
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet/>
        </Suspense>
      </div>
    </div>
  </>)
}

export default Lazy
