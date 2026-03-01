/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // এই লাইনটি অবশ্যই যোগ করুন
  images: {
    unoptimized: true, // স্ট্যাটিক হোস্টিংয়ের জন্য এটি দরকার
  },
  /* config options here */
};

export default nextConfig;
