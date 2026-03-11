import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import ParticlesBackground from "../components/ParticlesBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll"; // Lenis ইমপোর্ট করা হলো

export const metadata = {
  title: 'Joyassroy Barua | Full Stack Web Developer & Software Engineer',
  description: 'Portfolio of Joyassroy Barua, a Machine Learning enthusiast and Web Developer. Explore my projects like Crop Mate and Emergency Service Directory.',
  keywords: ['Joyassroy Barua', 'ijb','jb', 'Machine Learning', 'Next.js Developer','Full Stack Developer','MERN Stack Developer', 'React', 'Stripe Api', 'Portfolio'],
  openGraph: {
    title: 'Joyassroy Barua | Portfolio',
    description: 'Explore the portfolio and projects of Joyassroy Barua.',
    url: 'https://joyassroy-barua.me',
    siteName: 'Joyassroy Barua Portfolio',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="antialiased transition-colors duration-500 dark:bg-[#0a0a0a] dark:text-gray-100 bg-gray-50 text-gray-900 overflow-x-hidden">
        <SmoothScroll>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            <ParticlesBackground />
            <Navbar />
            
            <main className="relative min-h-screen z-10 pt-16">
              {children}
            </main>

            <Footer />
          </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}