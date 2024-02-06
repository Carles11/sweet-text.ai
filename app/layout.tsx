// @ts-nocheck
'use client'

import React, { useState } from 'react'
// import { Analytics } from '@vercel/analytics/react'

import { SIDEBAR_ITEMS } from 'constants/menuItems'
import GoProPopup from 'components/goProPopup'

import Sidebar from 'components/menus/sideBar'
import Footer from 'components/footer'
import Head from 'next/head'
import './globals.css'

const RootLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) => {
  const [showPopup, setShowPopup] = useState(false)

  const handlePopup = () => {
    setShowPopup(!showPopup)
  }
  return (
    <html lang="en">
      <Head>
        <meta name="robots" content="all" />
        <link rel="icon" href="/images/sweet-text-logo.png" />
        <title>sweet-text.ai | An Opensource AI-powered text-generator</title>
        <meta
          name="title"
          content="sweet-text.ai | An Opensource AI-powered text-generator"
        />
        <meta
          name="description"
          content="sweet-text.ai is an open-source app, providing powerful AI-driven content generation for marketers,
            writers, and businesses. Discover the potential of AI-powered content creation with sweet-text.ai"
        />
        <meta property="og:site_name" content="sweet-text.ai" />

        <meta
          property="og:title"
          content="sweet-text.ai | An Opensource AI-powered text-generator"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Generate any UI component in seconds."
        />
        <meta
          name="twitter:description"
          content="sweet-text.ai is an open-source app, providing powerful AI-driven content generation for marketers, writers, and businesses."
        />
        <meta
          property="og:image"
          content="https://www.sweet-text.ai/sweet-text.ai.png"
        />
        <meta
          name="twitter:image"
          content="https://www.sweet-text.ai/sweet-text.ai.png"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="194x194"
          href="/favicons/favicon-194x194.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicons/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <body>
        <div className="min-h-screen relative w-full md:flex md:flex-row mt-16 md:mt-0">
          <div className="md:hidden z-10 fixed left-0 top-0 h-full">
            <Sidebar onShowPopup={handlePopup} items={SIDEBAR_ITEMS} />
          </div>
          <div className="hidden md:block md:relative ">
            <Sidebar onShowPopup={handlePopup} items={SIDEBAR_ITEMS} />
          </div>
          <main className="w-full md:flex-grow">{children}</main>
          {showPopup && <GoProPopup onClose={() => setShowPopup(false)} />}
        </div>
        <Footer />
        {/* <Analytics /> */}
      </body>
      {/* <NextScript /> */}
    </html>
  )
}

export default RootLayout
