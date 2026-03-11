export default function sitemap() {
  return [
    {
      url: 'https://joyassroy-barua.me',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    // আপনার যদি আলাদা প্রজেক্ট বা অ্যাবাউট পেজ থাকে, তবে নিচে এভাবে যুক্ত করতে পারেন:
    // {
    //   url: 'https://joyassroy-barua.me/projects',
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.8,
    // },
  ]
}