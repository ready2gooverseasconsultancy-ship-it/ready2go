import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { sendContactMessage } from '../lib/contactApi';

export const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    visaType: 'Student Visa',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    setError('');

    try {
      await sendContactMessage({
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: `${form.message}\nVisa Type: ${form.visaType}`,
      });
      setStatus('success');
      setForm({
        name: '',
        email: '',
        phone: '',
        visaType: 'Student Visa',
        message: '',
      });
    } catch (submitError) {
      setStatus('error');
      setError(submitError instanceof Error ? submitError.message : 'Failed to send message');
    }
  };

  return (
    <section id="contact" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background World Map */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=2000" 
          alt="World Map" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-4">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Ready to Start Your Journey?</h3>
            <p className="text-slate-600 text-lg mb-12 leading-relaxed">
              Have questions about your visa application? Our experts are here to help. Share your goals and we will respond within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                  <p className="text-slate-500">+91 77025 58704</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                  <p className="text-slate-500">info@ready2gooverseas.com</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Visit Us</h4>
                  <p className="text-slate-500">F-16, Ground Floor, \u201cGayathri Towers\u201d</p>
                  <p className="text-slate-500">Main Road, Green Hills Colony, Kothapet, Saroornagar Mandal</p>
                  <p className="text-slate-500">Ranga Reddy District, Telangana \u2013 500035</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+1 234 567 890"
                    value={form.phone}
                    onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Visa Type</label>
                  <select
                    value={form.visaType}
                    onChange={(e) => setForm((prev) => ({ ...prev, visaType: e.target.value }))}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none transition-all appearance-none"
                  >
                    <option>Student Visa</option>
                    <option>Work Visa</option>
                    <option>Tourist Visa</option>
                    <option>Immigration</option>
                  </select>
                </div>
              </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    value={form.message}
                    onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button type="submit" disabled={status === 'sending'} className="w-full bg-brand-orange text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-blue transition-all flex items-center justify-center gap-3 shadow-lg shadow-brand-orange/20 group disabled:opacity-70">
                  {status === 'sending' ? 'Sending...' : 'Book Free Consultation'}
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                {status === 'success' && (
                  <p className="text-sm font-semibold text-emerald-600">Thanks! Your message has been sent.</p>
                )}
                {status === 'error' && (
                  <p className="text-sm font-semibold text-red-600">{error}</p>
                )}
              </form>
            </motion.div>
          </div>
      </div>
    </section>
  );
};
