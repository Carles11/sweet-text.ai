/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   serverActions: true,
  //   nextScriptWorkers: true,
  // },
  reactStrictMode: true,
  distDir: 'out',
  env: {
    EMAIL_JS_SERVICE_ID: process.env.EMAIL_JS_SERVICE_ID,
    EMAIL_JS_TEMPLATE_ID: process.env.EMAIL_JS_TEMPLATE_ID,
    EMAIL_JS_USER_ID: process.env.EMAIL_JS_USER_ID,
  },
}

module.exports = nextConfig
