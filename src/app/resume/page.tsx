'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaDownload } from 'react-icons/fa';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Company',
    period: '2020 - Present',
    description: [
      'Led development of multiple full-stack applications',
      'Mentored junior developers and conducted code reviews',
      'Implemented CI/CD pipelines and improved deployment processes',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Another Tech Company',
    period: '2018 - 2020',
    description: [
      'Developed and maintained web applications using React and Node.js',
      'Collaborated with cross-functional teams to deliver features',
      'Improved application performance by 40%',
    ],
  },
];

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'University Name',
    period: '2016 - 2018',
    description: 'Specialized in Software Engineering and Distributed Systems',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University Name',
    period: '2012 - 2016',
    description: 'Graduated with honors, GPA: 3.8/4.0',
  },
];

export default function Resume() {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Resume
          </h1>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaDownload className="w-4 h-4" />
            <span>Download CV</span>
          </a>
        </div>

        <div className="space-y-12">
          <section>
            <div className="flex items-center gap-2 mb-6">
              <FaBriefcase className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Work Experience
              </h2>
            </div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <div className="text-blue-600 dark:text-blue-400 mb-2">
                    {exp.company}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 mb-4">
                    {exp.period}
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-6">
              <FaGraduationCap className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Education
              </h2>
            </div>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {edu.degree}
                  </h3>
                  <div className="text-blue-600 dark:text-blue-400 mb-2">
                    {edu.school}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 mb-4">
                    {edu.period}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
} 