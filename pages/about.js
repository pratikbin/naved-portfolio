import { motion } from 'framer-motion';
import Navbar from "../components/Navbar";

const experiences = [
  { company: "NodeOps", period: "2024 - Ongoing" },
  { company: "Metaforms AI", period: "2024 - 2024" },
  { company: "Fold Health", period: "2023 - 2024" },
  { company: "Fileverse", period: "2022 - 2023" },
  { company: "AyuRythm", period: "2021 - 2023" },
  { company: "BotX Automations", period: "2021 - 2021" },
];

export default function AboutPage() {
  return (
    <main className="bg-[#0e0e0e] text-[#d4d4d4] min-h-screen px-6 md:px-12 lg:px-20 py-12 font-inter space-y-20">
      <Navbar />

      <section className="flex flex-col md:grid md:grid-cols-3 gap-[80px] items-start">
        {/* Experience Column */}
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
              <li key={idx}>
                <a href="#" className="font-medium text-xs text-[#d4d4d4] hover:underline">{exp.company}</a>
                <p className="text-xs text-[#7a7a7a] mt-1">{exp.period}</p>
              </li>
            ))}
          </ul>
        </motion.div>
        {/* Bio Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-right"
        >
          <p className="text-xl leading-relaxed text-[#7a7a7a] max-w-2xl mb-8">
            I’m a designer based in India, passionate about clean interfaces, systems thinking, and storytelling. I bridge design, code, and communication and I’ve spent the last few years working with dev-first products, AI tools, and Web3 infra.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-[#1a1a1a] aspect-[5/8] rounded" />
            <div className="bg-[#1a1a1a] aspect-[5/8] rounded" />
          </div>

          <p className="text-xl leading-relaxed text-[#7a7a7a] max-w-2xl">
            I’m a designer based in India, passionate about clean interfaces, systems thinking, and storytelling. I bridge design, code, and communication and I’ve spent the last few years working with dev-first products, AI tools, and Web3 infra.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
