import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import ParticlesBackground from "../components/ParticlesBackground";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll"; // Lenis ইমপোর্ট করা হলো

export const metadata = {
  title: "Joyassroy Barua | Software Engineer",
  description: "Portfolio of Joyassroy Barua, a Results-driven Software Engineer.",
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