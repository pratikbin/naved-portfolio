import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X } from 'phosphor-react';

export default function Navbar() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const copyEmail = () => {
    navigator.clipboard.writeText('navedux@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
   <>
     <header className="fixed top-0 left-0 right-0 flex items-center w-full h-16 z-50 bg-[#0e0e0e]/70 backdrop-blur-md">
      <div className="flex w-full justify-between items-center px-6 md:px-12 lg:px-20">
        <Link href="/" className="text-sm font-medium">Naved</Link>
        <button 
          className="sm:hidden p-2 z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={24} weight="bold" />
          ) : (
            <List size={24} weight="bold" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex flex-wrap gap-4 text-sm">
          <a href="https://peerlist.io/naved" className="hover:underline transition duration-200">Peerlist</a>
          <a href="https://twitter.com/navedux" className="hover:underline transition duration-200">Twitter</a>
          <a href="https://www.linkedin.com/in/navedux/" className="hover:underline transition duration-200">LinkedIn</a>
          <a href="https://t.me/navedux" className="hover:underline transition duration-200">Telegram</a>
        </nav>
        
        <div className="hidden sm:flex gap-1 text-xs bg-[#1a1a1a] p-1 rounded-full">
          <Link href="/"><button className={`px-4 py-1 rounded-full transition duration-200 ${router.pathname === '/' ? 'bg-[#2a2a2a] text-white' : 'text-[#a1a1a1]'}`}>Work</button></Link>
          <Link href="/about"><button className={`px-4 py-1 rounded-full transition duration-200 ${router.pathname === '/about' ? 'bg-[#2a2a2a] text-white' : 'text-[#a1a1a1]'}`}>About</button></Link>
          <Link href="https://t.me/navedux"><button className={`px-4 py-1 rounded-full transition duration-200 ${router.pathname === '/contact' ? 'bg-[#2a2a2a] text-white' : 'text-[#a1a1a1]'}`}>Say hi</button></Link>
        </div>
      </div>

   
    </header>

       {/* Mobile Menu Overlay */}
       <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed sm:hidden inset-0 bg-[#0e0e0e]/80 backdrop-blur-md text-white z-40 flex flex-col justify-between p-6 pt-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <div>
                <div className="flex justify-between items-center mb-10">

               
                </div>
                <div className="flex flex-col gap-6 text-2xl mb-12">
                  <Link href="/" onClick={() => setIsMenuOpen(false)}>Work</Link>
                  <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                  <Link href="https://t.me/navedux" onClick={() => setIsMenuOpen(false)}>Say hi</Link>
                </div>
              </div>
            </motion.div>
            <div>
              <div className="mb-6">
                <p className="text-sm text-[#a1a1a1] mb-1">Email</p>
                <p className="text-sm">navedux@gmail.com</p>
              </div>
              <div>
                <p className="text-sm text-[#a1a1a1] mb-1">Social</p>
                <div className="flex flex-col gap-4 text-sm">
               
                  <a href="https://peerlist.io/naved" onClick={() => setIsMenuOpen(false)}>Peerlist</a>
                  <a href="https://twitter.com/navedux" onClick={() => setIsMenuOpen(false)}>Twitter</a>
                  <a href="https://www.linkedin.com/in/navedux/" onClick={() => setIsMenuOpen(false)}>LinkedIn</a>
                  <a href="https://t.me/navedux" onClick={() => setIsMenuOpen(false)}>Telegram</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
   </>
  );
}
