import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const FloatingContact = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      <motion.a
        href="https://wa.me/917702558704?text=Hello%20Ready2Go%20Overseas%20Consultancy%2C%0AI%20want%20information%20about%20study%20abroad.%0APlease%20guide%20me."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-emerald-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-emerald-600 transition-colors"
      >
        <MessageCircle className="w-8 h-8" />
      </motion.a>
    </div>
  );
};
