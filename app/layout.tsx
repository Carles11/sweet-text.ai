// @ts-nocheck
'use client'

import { ScriptProps } from 'next/script'
import { SIDEBAR_ITEMS } from 'constants/menuItems'
import Sidebar from 'components/menus/sideBar'
import Head from 'next/head'
import './globals.css'

const RootLayout: React.FC<ScriptProps> = ({ children, title }) => {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/sweet-text-logo.png" />
        <meta
          name="title"
          content="sweet-text.ai: An Open Source AT text-generator"
        />
        <meta
          name="description"
          content="sweet-text.ai is an open-source alternative to Jasper, providing powerful AI-driven content generation for marketers,
            writers, and businesses. Discover the potential of AI-powered content creation with sweet-text.ai"
        />
        <meta property="og:site_name" content="sweet-text.ai" />

        <meta
          property="og:title"
          content="sweet-text.ai: An Open Source AT text-generator"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Generate any UI component in seconds."
        />
        <meta
          name="twitter:description"
          content="sweet-text.ai is an open-source alternative to Jasper, providing powerful AI-driven content generation for marketers, writers, and businesses."
        />
        <meta
          property="og:image"
          content="https://www.sweet-text.ai/sweet-text.ai.png"
        />
        <meta
          name="twitter:image"
          content="https://www.sweet-text.ai/sweet-text.ai.png"
        />
        <script
          src="https://my.hellobar.com/ad70057c85f0c544997c44ae0968d20f1b802252.js"
          type="text/javascript"
          charSet="utf-8"
        ></script>
      </Head>
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
      {/* <NextScript /> */}
    </html>
  )
}

export default RootLayout
