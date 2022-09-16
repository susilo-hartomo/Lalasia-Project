/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['hifolks-dev.s3.ap-southeast-1.amazonaws.com'],
		formats: ['image/avif', 'image/webp'],
	},
	trailingSlash: false,
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
};

module.exports = nextConfig;
