'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useActiveSection } from './components/ActiveSectionContext';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Home() {
  const { activeSection, setActiveSection } = useActiveSection();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId as any);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-20 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Sushant Bhagat</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              Full Stack Developer
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
              I'm a passionate developer who loves creating beautiful and functional web applications.
              With expertise in modern technologies, I bring ideas to life through clean and efficient code.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <Image
                src="/profile-placeholder.jpg"
                alt="Profile"
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'SQL', 'AWS', 'Docker'].map((skill) => (
              <div key={skill} className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg">
                <h3 className="text-xl font-semibold text-center">{skill}</h3>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={`/project-${project}.jpg`}
                    alt={`Project ${project}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Title {project}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    A brief description of the project and the technologies used.
                  </p>
                  <div className="mt-4 flex gap-4">
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Demo
                    </a>
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex gap-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
