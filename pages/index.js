import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { InfiniteCarousel } from "../components/InfiniteCarousel";

const logos = [
  { name: "Monkey DAO", src: "/logos/monkeydao.png" },
  { name: "Portal", src: "/logos/portal.png" },
  { name: "Fileverse", src: "/logos/fileverse.png" },
  { name: "Superteam India", src: "/logos/superteam-india.png" },
  { name: "Foldhealth", src: "/logos/foldhealth.png" },
  { name: "Metaforms", src: "/logos/metaforms.png" },
  { name: "Superteam Talent", src: "/logos/superteam-talent.png" },
  { name: "NodeOps", src: "/logos/nodeops.png" },
  { name: "Autonomint", src: "/logos/autonomint.png" },
  { name: "Superteam Mobile", src: "/logos/superteam-mobile.png" }
];

export default function HomePage() {
  const [copied, setCopied] = useState(false);
  
  const copyEmail = () => {
    navigator.clipboard.writeText('navedux@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  
  return (
<main className="bg-[#0e0e0e] text-[#d4d4d4] min-h-screen px-6 md:px-12 lg:px-20 py-12 font-inter space-y-20">
      {/* <Navbar /> */}

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mb-12 flex flex-col md:flex-row justify-between items-start gap-6"
      >
        <div className="max-w-lg">
          <p className="text-sm leading-relaxed">
            <span className="text-white block">Hello, I'm Naved Alam</span>
            <span className="text-[#7a7a7a] block mt-1">A product designer and a builder.</span>
          </p>
          <p className="mt-12 text-sm text-[#7a7a7a]">
            Email <span onClick={copyEmail} className="underline cursor-pointer text-white relative">
              navedux@gmail.com
              {copied && (
                <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white text-black text-xs px-2 py-0.5 rounded shadow">
                  Copied
                </span>
              )}
            </span>
          </p>
        </div>
        <div className="max-w-lg md:text-right md:ml-auto">
          <p className="text-sm text-[#7a7a7a]">
            Welcome to my space on the internet, where I showcase my work, and a variety of other things I'm currently exploring.
          </p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mb-12 overflow-hidden"
      >
        <p className="text-sm text-[#7a7a7a] mb-4">I've worked with ambitious teams like</p>
        <div className="relative w-full h-16 overflow-hidden">
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-[#0e0e0e] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-[#0e0e0e] to-transparent z-10 pointer-events-none"></div>
          {/* <div className="flex animate-scroll space-x-12 w-max"> */}
          <InfiniteCarousel>

            {[...logos, ...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex items-center justify-center w-40 h-12 rounded hover:bg-[#2a2a2a] transition duration-500">
                <img src={logo.src} alt={logo.name} className="max-h-8 object-contain" />
              </div>
            ))}
            </InfiniteCarousel>
          {/* </div> */}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        id="work"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 scroll-mt-28"
      >
        {[...Array(6)].map((_, i) => (
          <Card key={i} />
        ))}
      </motion.section>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
      `}</style>
    </main>
  );
}
