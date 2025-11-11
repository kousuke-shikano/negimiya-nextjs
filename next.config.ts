// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // ← これが最重要！！静的出力強制
  trailingSlash: true,     // ← 404防止
  images: {
    unoptimized: true      // ← next/imageを静的対応（Vercel無料プランで楽）
  }
};

module.exports = nextConfig;