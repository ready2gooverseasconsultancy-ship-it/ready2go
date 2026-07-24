import React from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
}

export function Section({ children, className = '', dark = false, id }: SectionProps) {
  return (
    <section
      id={id}
      className={`content-section relative overflow-hidden ${dark ? 'bg-slate-900 text-white' : 'bg-white'} ${className}`}
    >
      <div className="max-w-7xl mx-auto relative z-10">{children}</div>
    </section>
  );
}

export function SectionHeader({ label, title, description, className = '' }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 md:mb-20 ${className}`}>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-label mb-4"
      >
        {label}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="section-title mb-6 text-balance"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
