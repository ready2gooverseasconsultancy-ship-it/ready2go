import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { useInquiryForm } from '../lib/useInquiryForm';

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    visaType: 'Student Visa',
    message: '',
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const { status, error, submit } = useInquiryForm();

  const validate = (): boolean => {
    const errors: FieldErrors = {};
    if (!form.name.trim()) errors.name = 'Name is required';
    if (!form.email.trim()) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Please enter a valid email';
    if (!form.message.trim()) errors.message = 'Message is required';
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const clearError = (field: keyof FieldErrors) => {
    setFieldErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    const ok = await submit({
      name: form.name,
      email: form.email,
      phone: form.phone,
      visaType: form.visaType,
      message: form.message,
    });
    if (ok) {
      setForm({ name: '', email: '', phone: '', visaType: 'Student Visa', message: '' });
      setFieldErrors({});
    }
  };

  const fClass = (field: keyof FieldErrors) =>
    `w-full px-6 py-4 rounded-2xl outline-none transition-all ${
      fieldErrors[field]
        ? 'bg-red-50 border-2 border-red-300 focus:ring-2 focus:ring-red-400'
        : 'bg-slate-50 border-2 border-transparent focus:ring-2 focus:ring-brand-blue focus:border-brand-blue'
    }`;

  return (
    <section id="contact" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background World Map */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=2000"
          alt="World Map"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          loading="lazy"
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
                  <a
                    href="https://share.google/xT2X5ECKgQw399HcF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-brand-orange transition-colors"
                  >
                    <p>F-16, Ground Floor, "Gayathri Towers"</p>
                    <p>Main Road, Green Hills Colony, Kothapet, Saroornagar Mandal</p>
                    <p>Ranga Reddy District, Telangana - 500035</p>
                  </a>
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
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1" htmlFor="section-name">Full Name <span className="text-red-500">*</span></label>
                  <input
                    id="section-name"
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    required
                    aria-required="true"
                    aria-invalid={!!fieldErrors.name}
                    onChange={(e) => { setForm((prev) => ({ ...prev, name: e.target.value })); clearError('name'); }}
                    className={fClass('name')}
                  />
                  {fieldErrors.name && <p className="text-xs font-semibold text-red-500 ml-1" role="alert">{fieldErrors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1" htmlFor="section-email">Email Address <span className="text-red-500">*</span></label>
                  <input
                    id="section-email"
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    required
                    aria-required="true"
                    aria-invalid={!!fieldErrors.email}
                    onChange={(e) => { setForm((prev) => ({ ...prev, email: e.target.value })); clearError('email'); }}
                    className={fClass('email')}
                  />
                  {fieldErrors.email && <p className="text-xs font-semibold text-red-500 ml-1" role="alert">{fieldErrors.email}</p>}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1" htmlFor="section-phone">Phone Number</label>
                  <input
                    id="section-phone"
                    type="tel"
                    placeholder="+1 234 567 890"
                    value={form.phone}
                    onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1" htmlFor="section-visa-type">Visa Type</label>
                  <select
                    id="section-visa-type"
                    value={form.visaType}
                    onChange={(e) => setForm((prev) => ({ ...prev, visaType: e.target.value }))}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all appearance-none"
                  >
                    <option>Student Visa</option>
                    <option>Work Visa</option>
                    <option>Tourist Visa</option>
                    <option>Immigration</option>
                  </select>
                </div>
              </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1" htmlFor="section-message">Your Message <span className="text-red-500">*</span></label>
                  <textarea
                    id="section-message"
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    value={form.message}
                    required
                    aria-required="true"
                    aria-invalid={!!fieldErrors.message}
                    onChange={(e) => { setForm((prev) => ({ ...prev, message: e.target.value })); clearError('message'); }}
                    className={fClass('message')}
                  ></textarea>
                  {fieldErrors.message && <p className="text-xs font-semibold text-red-500 ml-1" role="alert">{fieldErrors.message}</p>}
                </div>
                <button type="submit" disabled={status === 'sending'} className="w-full bg-brand-orange text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-blue transition-all flex items-center justify-center gap-3 shadow-lg shadow-brand-orange/20 group disabled:opacity-70">
                  {status === 'sending' ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      Book Free Consultation
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
                {status === 'success' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-semibold text-emerald-600 text-center">Thanks! Your message has been sent.</motion.p>
                )}
                {status === 'error' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm font-semibold text-red-600 text-center">{error}</motion.p>
                )}
              </form>
            </motion.div>
          </div>
      </div>
    </section>
  );
};
