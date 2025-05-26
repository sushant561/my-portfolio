'use client';

import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useActiveSection } from './components/ActiveSectionContext';
import type { Section } from './components/ActiveSectionContext';
import { FaGithub, FaLinkedin, FaTwitter, FaPython, FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaChartBar } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiCplusplus, SiJavascript, SiPandas, SiNumpy } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
}

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard = ({ skill, index }: SkillCardProps) => {
  const Icon = skill.icon;
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: [0, 1, 0],
        x: ['100%', '0%', '-100%'],
        transition: {
          duration: 2,
          delay: index * 0.1,
          ease: 'easeInOut'
        }
      });
    }
  }, [controls, inView, index]);

  return (
    <motion.div
      ref={ref}
      className="relative p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg group hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
      whileHover={{ scale: 1.05 }}
      style={{
        background: `linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)`,
      }}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffffff20] to-transparent"
        animate={controls}
      />
      <div className="relative flex flex-col items-center gap-4">
        <Icon className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" style={{ color: skill.color }} />
        <h3 className="text-xl font-semibold text-center capitalize">{skill.name}</h3>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const { activeSection, setActiveSection } = useActiveSection();

  const scrollToSection = (sectionId: Section) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // height of navbar
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  const skills = [
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'Pandas', icon: SiPandas, color: '#150458' },
    { name: 'Matplotlib', icon: FaChartBar, color: '#11557C' },
    { name: 'NumPy', icon: SiNumpy, color: '#013243' },
    { name: 'C++', icon: SiCplusplus, color: '#00599C' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' }
  ];

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
            <div className="flex gap-4 pt-4">
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </motion.button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96 group">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/sushant.jpg"
                  alt="Sushant Bhagat"
                  fill
                  className="object-cover hover:rotate-6 transition-transform duration-300"
                  priority
                />
              </div>
              <div className="absolute inset-0 rounded-full ring-2 ring-blue-500 ring-offset-4 ring-offset-white dark:ring-offset-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
            Skilled in web development, UI/UX design, and problem-solving, delivering modern, <br/>
            responsive, and user-centric digital solutions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
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
