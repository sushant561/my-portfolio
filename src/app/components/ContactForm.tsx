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
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const inputClasses = "mt-1 block w-full rounded-lg border border-gray-300 bg-white shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 py-3 px-4 text-base text-gray-900 transition-all duration-200 hover:border-blue-400";

  return (
    <>
      <MotionForm 
        className="space-y-8"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Name
          </label>
          <MotionInput
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClasses}
            whileFocus={{ scale: 1.01 }}
            disabled={status === 'loading'}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <MotionInput
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClasses}
            whileFocus={{ scale: 1.01 }}
            disabled={status === 'loading'}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Message
          </label>
          <MotionTextarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            required
            className={inputClasses}
            whileFocus={{ scale: 1.01 }}
            disabled={status === 'loading'}
          />
        </div>
        {status === 'error' && (
          <div className="text-red-500 text-sm">{errorMessage}</div>
        )}
        {status === 'success' && (
          <div className="text-green-500 text-sm">Message sent successfully!</div>
        )}
        <MotionButton
          type="submit"
          className={`w-full px-6 py-4 rounded-lg text-white transition-colors text-lg font-medium shadow-lg hover:shadow-xl ${
            status === 'loading' 
              ? 'bg-blue-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
          whileHover={status !== 'loading' ? { scale: 1.02 } : undefined}
          whileTap={status !== 'loading' ? { scale: 0.98 } : undefined}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </MotionButton>
      </MotionForm>
    </>
  );
} 