'use client';

import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useActiveSection } from './components/ActiveSectionContext';
import type { Section } from './components/ActiveSectionContext';
import { FaGithub, FaLinkedin, FaTwitter, FaPython, FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaChartBar } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiCplusplus, SiJavascript, SiPandas, SiNumpy } from 'react-icons/si';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import ContactForm from './components/ContactForm';
import dynamic from 'next/dynamic';
import { TypeAnimation } from 'react-type-animation';

// Dynamically import motion components with no SSR
// const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });
const MotionButton = dynamic(() => import('framer-motion').then(mod => mod.motion.button), { ssr: false });

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
              Hi, I'm <br/>{' '}
              <span className="text-blue-600 dark:text-blue-400 inline-block">
                <TypeAnimation
                  sequence={[
                    'Sushant Bhagat',
                    4000,
                    'Developer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="inline-block type-cursor"
                  style={{ 
                    display: 'inline-block',
                    '--cursor-width': '2px'
                  } as React.CSSProperties}
                />
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
            Computer Science undergraduate at Delhi University
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            Fueled by a love for learning, I build scalable web apps and explore AI-driven technologies 
            to create meaningful, forward-thinking digital solutions.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/sushant561" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/sushant-bhagat-9a3587329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/Sushant1864?t=-Cz316oQrgtUDbIO_nyOoA&s=08 " target="_blank" rel="noopener noreferrer" className="social-icon">
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
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Showcasing a selection of innovative projects that highlight my skills, creativity, <br/> and passion for impactful digital solutions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Modern College Web Portal",
                description: "Developed a responsive college website using HTML, CSS, and JavaScript, featuring interactive design, smooth navigation, and essential functionalities.",
                image: "/images/project1.png",
                tech: ["html", "Css", "JavaScript"],
                github: "https://github.com/sushant561/collage-website",
                demo: "https://willowy-brioche-3160f6.netlify.app/"
              },
              {
                title: "AI Exam Prep Platform",
                description: "Created an advanced exam preparation website using modern tech stack, integrating AI features, secure backend, and responsive, user-friendly interface.",
                image: "/images/project2.png",
                tech: ['Next.js', 'JavaScript', 'Express.js', 'Cloudinary', 'TailwindCSS', 'TypeScript'],
                github: "https://github.com/sushant561/ionia-Institute",
                demo: "https://www.ionia.sbs/"
              },
              {
                title: "College Recruitment Web Portal",
                description: "Designed a clean, responsive college recruitment website using HTML and CSS to streamline application processes and improve user engagement.",
                image: "/images/project3.png",
                tech: ["html", "Css"],
                github: "https://github.com/sushant561/it-cell-arsd",
                demo: "https://it-cell-arsd.vercel.app/"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub className="w-5 h-5" />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Resume</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
            Download my resume to learn more about my skills, experience, and qualifications.
          </p>
          <div className="flex justify-center">
            <MotionButton
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/images/resume.pdf';
                link.download = 'Sushant_Bhagat_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              Download Resume
            </MotionButton>
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
          
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {/* Location Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">New Delhi, India</p>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a href="mailto:your.email@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                sushantbhagat561@gmail.com
              </a>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <a href="tel:+1234567890" className="text-blue-600 dark:text-blue-400 hover:underline">
                +91 8102406701
              </a>
            </motion.div>
          </div>

          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex gap-4">
              <a href="https://github.com/sushant561" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/sushant-bhagat-9a3587329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/Sushant1864?t=-Cz316oQrgtUDbIO_nyOoA&s=08 " target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} Sushant Bhagat. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
