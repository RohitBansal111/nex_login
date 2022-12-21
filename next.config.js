/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ApiKey: process.env.ApiKey,
    AuthDomain: process.env.AuthDomain,
    projectId: process.env.projectId,
    Client_id:process.env.Client_id,
  }
}

module.exports = nextConfig
