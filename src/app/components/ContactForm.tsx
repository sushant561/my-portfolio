'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import motion components with no SSR
const MotionForm = dynamic(() => import('framer-motion').then(mod => mod.motion.form), { ssr: false });
const MotionInput = dynamic(() => import('framer-motion').then(mod => mod.motion.input), { ssr: false });
const MotionTextarea = dynamic(() => import('framer-motion').then(mod => mod.motion.textarea), { ssr: false });
const MotionButton = dynamic(() => import('framer-motion').then(mod => mod.motion.button), { ssr: false });

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <MotionForm 
      className="space-y-6"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Name
        </label>
        <MotionInput
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
          whileFocus={{ scale: 1.01 }}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Email
        </label>
        <MotionInput
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
          whileFocus={{ scale: 1.01 }}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Message
        </label>
        <MotionTextarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
          whileFocus={{ scale: 1.01 }}
        />
      </div>
      <MotionButton
        type="submit"
        className="w-full px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Send Message
      </MotionButton>
    </MotionForm>
  );
} 