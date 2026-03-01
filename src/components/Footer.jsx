export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-[#0a0a0a]/50 backdrop-blur-md py-8 text-center mt-20 relative z-10">
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Joyassroy Barua. All rights reserved.
      </p>
    </footer>
  );
}