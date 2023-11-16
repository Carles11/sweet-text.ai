// @ts-nocheck
'use client'

import React, { useState } from 'react'
import Script from 'next/script'

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
      </Head>
      <Script
        src="https://my.hellobar.com/ad70057c85f0c544997c44ae0968d20f1b802252.js"
        type="text/javascript"
        charSet="utf-8"
      ></Script>
      <body>
        <div className="min-h-screen relative w-full md:flex md:flex-row">
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
      </body>
      {/* <NextScript /> */}
    </html>
  )
}

export default RootLayout
