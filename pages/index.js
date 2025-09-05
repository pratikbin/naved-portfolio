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

const projects = [
  { title: "Personal", info: "Expense Tracker", image: "/design/expense_tracker.png" },
  { title: "Personal", info: "Info Card", image: "/design/info_card.png" },
  { title: "Personal", info: "Ecom App", image: "/design/ecom_app.png" },
  { title: "Personal", info: "Search", image: "/design/search.png" },
  { title: "Personal", info: "Reader App", image: "/design/reader_app.png" },
  { title: "Personal", info: "To Do App", image: "/design/to_do_app.png" },
  { title: "Personal", info: "Form Builder", image: "/design/form_builder.png" },
  { title: "Personal", info: "Work Louder", image: "/design/work_louder.png" },
  { title: "Personal", info: "Library App", image: "/design/library_app.png" },
  { title: "Personal", info: "Email App", image: "/design/email_app.png" },
  { title: "Personal", info: "News App", image: "/design/news_app.png" },
  { title: "Personal", info: "Search Experince", image: "/design/search_experience.png" },
  // { title: "Personal", info: "Parent Control App", image: "/design/parent_control.png" },
  // { title: "Personal", info: "Fitness App", image: "/design/fitness_app.png" },
  // { title: "Personal", info: "Ratings", image: "/design/ratings.png" },
  // { title: "Personal", info: "Cource Details", image: "/design/course_details.png" },
  // { title: "Personal", info: "Cancel Subscription", image: "/design/cancel_subscription.png" },
  // { title: "Personal", info: "Empty State", image: "/design/empty_state.png" },
  // { title: "Personal", info: "Flight Booking App", image: "/design/flight_booking.png" },
  // { title: "Personal", info: "Note Taking App", image: "/design/note_taking_app.png" },
  // { title: "Personal", info: "Fintech Onboarding", image: "/design/fintech_onboarding.png" },
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
<main className="bg-[#ffffff] text-[#000000] min-h-screen px-6 md:px-12 lg:px-20 py-12 font-inter space-y-20">
      {/* <Navbar /> */}

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mb-12 flex flex-col md:flex-row justify-between items-start gap-6"
      >
        <div className="max-w-lg">
          <p className="text-sm leading-relaxed">
            <span className="text-black block">Hello, I'm Naved Alam</span>
            <span className="text-[#7a7a7a] block mt-1">A product designer and a builder.</span>
          </p>
          <p className="mt-12 text-sm text-[#7a7a7a]">
            Email <span onClick={copyEmail} className="underline cursor-pointer text-black relative">
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
        <p className="text-sm text-[#666666] mb-4">I've worked with ambitious teams like</p>
        <div className="relative w-full h-16 overflow-hidden">
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-[#ffffff] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-[#ffffff] to-transparent z-10 pointer-events-none"></div>
          {/* <div className="flex animate-scroll space-x-12 w-max"> */}
          <InfiniteCarousel>

            {[...logos, ...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex items-center justify-center w-40 h-12 rounded hover:bg-[#f0f0f0] transition duration-500">
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
        {projects.map((project, i) => (
          <Card key={i} title={project.title} info={project.info} image={project.image} />
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
