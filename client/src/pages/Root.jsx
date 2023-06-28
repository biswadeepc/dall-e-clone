import React from 'react'
import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const Root = () => {
  return (
    <>
        <MainNavigation/>
        <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
            <Outlet/>
        </main>
    </>
  )
}

export default Root;