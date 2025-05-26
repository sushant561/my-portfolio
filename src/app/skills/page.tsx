'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaTools } from 'react-icons/fa';

const skills = {
  frontend: [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'Tailwind CSS', level: 85 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Java', level: 70 },
  ],
  database: [
    { name: 'MongoDB', level: 85 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'Redis', level: 70 },
  ],
  tools: [
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 75 },
    { name: 'AWS', level: 70 },
  ],
};

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-gray-700 dark:text-gray-300">{name}</span>
      <span className="text-gray-600 dark:text-gray-400">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
      <motion.div
        className="bg-blue-600 h-2.5 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
    </div>
  </div>
);

export default function Skills() {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          My Skills
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-2 mb-4">
              <FaReact className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Frontend Development
              </h2>
            </div>
            {skills.frontend.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-2 mb-4">
              <FaNodeJs className="w-6 h-6 text-green-600" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Backend Development
              </h2>
            </div>
            {skills.backend.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-2 mb-4">
              <FaDatabase className="w-6 h-6 text-purple-600" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Database
              </h2>
            </div>
            {skills.database.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-2 mb-4">
              <FaTools className="w-6 h-6 text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Tools & Platforms
              </h2>
            </div>
            {skills.tools.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
} 