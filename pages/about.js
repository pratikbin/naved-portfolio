import { motion } from 'framer-motion';
import Navbar from "../components/Navbar";

const experiences = [
  { company: "NodeOps", period: "2024 - Ongoing", url: "https://nodeops.network" },
  { company: "Metaforms AI", period: "2024 - 2024", url: "https://metaforms.ai" },
  { company: "Fold Health", period: "2023 - 2024", url: "https://fold.health" },
  { company: "Fileverse", period: "2022 - 2023", url: "https://fileverse.io" },
  { company: "AyuRythm", period: "2021 - 2023", url: "https://ayurythm.com" },
  { company: "BotX Automations", period: "2021 - 2021", url: "https://botx.co.in/" },
];

export default function AboutPage() {
  return (
    <main className="bg-[#0e0e0e] text-[#d4d4d4] min-h-screen px-6 md:px-12 lg:px-20 py-12 font-inter space-y-20">


      <section className="flex flex-col-reverse md:grid md:grid-cols-2 gap-[80px] items-start">
 
        {/* Experience Column */}
       <div className='md:grid md:grid-cols-2 gap-[80px]'>
       <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p className="text-xs text-[#7a7a7a] mb-6">Experience</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col space-y-6"
        >
          <ul className="space-y-6 text-left">
            {experiences.map((exp, idx) => (
              <li key={idx} className="group">
                <a href={exp.url} target="_blank" rel="noopener noreferrer" className="font-medium text-xs text-[#d4d4d4] hover:underline flex items-center gap-1">
                  {exp.company}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    ↗
                  </span>
                </a>
                <p className="text-xs text-[#7a7a7a] mt-1">{exp.period}</p>
              </li>
            ))}
          </ul>
        </motion.div>
       </div>

               {/* Bio Column */}
               <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-right"
        >
          <p className="text-xl leading-relaxed text-[#7a7a7a] max-w-2xl mb-8">
          I’m a designer from India who loves crafting clean, thoughtful interfaces and telling stories through design. Over the past few years, I’ve worked across UI/UX, branding, and marketing, helping teams turn ideas into meaningful products.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="aspect-[5/8] rounded overflow-hidden">
              <img src="/design/profile1.png" alt="Profile 1" className="object-cover w-full h-full" />
            </div>
            <div className="aspect-[5/8] rounded overflow-hidden">
              <img src="/design/profile2.png" alt="Profile 2" className="object-cover w-full h-full" />
            </div>
          </div>

          <p className="text-xl leading-relaxed text-[#7a7a7a] max-w-2xl">
          I’ve worked with some amazing teams in the AI, Web3, and developer tools space - designing dashboards, building design systems, and creating products that feel as good as they look.
          </p>
          <br />
          <p className="text-xl leading-relaxed text-[#7a7a7a] max-w-2xl">
          Along the way, I also spent time designing for healthcare startups, helping make complex health tools feel simple and easy to use for both patients and professionals. 
          </p>
          <br />
          <p className="text-xl leading-relaxed text-[#7a7a7a] max-w-2xl">
          These days, I’m spending more time learning how to build my own designs - getting hands-on with React and Tailwind CSS. I love the idea of not just imagining how something should look, but actually making it work.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
