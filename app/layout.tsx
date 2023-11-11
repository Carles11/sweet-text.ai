// @ts-nocheck

import { ScriptProps } from 'next/script'
import { Fragment } from 'react'
import { SIDEBAR_ITEMS } from './constants'
import Sidebar from './components/menus/sideBar'

import './globals.css'

const Layout: React.FC<ScriptProps> = ({ children, title }) => {
  return (
    <html>
      <body>
        <div className="min-h-screen relative w-full md:flex md:flex-row">
          <div className="md:hidden z-10 fixed left-0 top-0 h-full">
            <Sidebar items={SIDEBAR_ITEMS} />
          </div>
          <div className="hidden md:block md:relative ">
            <Sidebar items={SIDEBAR_ITEMS} />
          </div>
          <main className="w-full md:flex-grow">
            {title && (
              <h1 className="text-black text-2xl font-bold mb-4 mt-10 pr-4 pl-4 pt-4">
                {title}
              </h1>
            )}{' '}
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

export default Layout
