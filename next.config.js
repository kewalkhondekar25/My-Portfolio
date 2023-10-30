/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'export',
    images:{
        domains:['res.cloudinary.com'],
        unoptimized:true
    }
}

module.exports = nextConfig
