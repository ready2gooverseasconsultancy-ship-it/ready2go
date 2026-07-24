import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';
import { useInquiryForm } from '../lib/useInquiryForm';
import { SeoHead } from '../components/Seo Head';

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validateRequired(value: string, label: string): string | undefined {
  return value.trim() ? undefined : `${label} is required`;
}

function validateEmail(value: string): string | undefined {
  if (!value.trim()) return 'Email is required';
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? undefined : 'Please enter a valid email';
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
    errors.name = validateRequired(form.name, 'Name');
    errors.email = validateEmail(form.email);
    errors.message = validateRequired(form.message, 'Message');
    const filtered = Object.fromEntries(
      Object.entries(errors).filter(([, v]) => v !== undefined),
    ) as FieldErrors;
    setFieldErrors(filtered);
    return Object.keys(filtered).length === 0;
  };

  const clearFieldError = (field: keyof FieldErrors) => {
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
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
      setForm({
        name: '',
        email: '',
        phone: '',
        visaType: 'Student Visa',
        message: '',
      });
      setFieldErrors({});
    }
  };

  const fieldClass = (field: keyof FieldErrors) =>
    `w-full px-6 py-4 rounded-2xl outline-none transition-all ${
      fieldErrors[field]
        ? 'bg-red-50 border-2 border-red-300 focus:ring-2 focus:ring-red-400'
        : 'bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue'
    }`;

  return (
    <>
      <SeoHead
        title="Contact Us | Ready2Go Overseas Consultancy"
        description="Get in touch with Ready2Go Overseas for expert visa and immigration guidance. Call, email, or visit our office. Free consultation available."
        canonicalPath="/contact"
      />

      <div className="pt-32">
        <section className="section-padding bg-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">Contact Us</h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                We're here to help you navigate your journey abroad. Get in touch with our experts today.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 mb-20">
              {[
                { title: "Call Us", info: "+91 77025 58704", sub: "Mon-Sat, 9am-7pm", icon: Phone, color: "bg-blue-50 text-brand-blue" },
                { title: "Email Us", info: "info@ready2gooverseas.com", sub: "24/7 Support", icon: Mail, color: "bg-orange-50 text-brand-orange" },
                { title: "Visit Us", info: "F-16, Ground Floor, Gayathri Towers", sub: "Main Road, Green Hills Colony, Kothapet, Saroornagar Mandal, Ranga Reddy District, Telangana 500035", icon: MapPin, color: "bg-emerald-50 text-emerald-600", mapLink: "https://share.google/xT2X5ECKgQw399HcF" }
              ].map((item, i) => {
                const Card = (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 text-center group hover:shadow-xl transition-all ${item.mapLink ? 'cursor-pointer' : ''}`}
                  >
                    <div className={`w-20 h-20 rounded-3xl ${item.color} flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-900 font-semibold mb-1">{item.info}</p>
                    <p className="text-slate-500 text-sm">{item.sub}</p>
                  </motion.div>
                );
                return item.mapLink ? (
                  <a key={i} href={item.mapLink} target="_blank" rel="noopener noreferrer">
                    {Card}
                  </a>
                ) : (
                  Card
                );
              })}
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-slate-100"
              >
                <h3 className="text-3xl font-bold text-slate-900 mb-8">Send Us a Message</h3>
                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1" htmlFor="contact-name">Full Name <span className="text-red-500">*</span></label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="John Doe"
                        value={form.name}
                        required
                        aria-required="true"
                        aria-invalid={!!fieldErrors.name}
                        aria-describedby={fieldErrors.name ? 'contact-name-error' : undefined}
                        onChange={(e) => { setForm((prev) => ({ ...prev, name: e.target.value })); clearFieldError('name'); }}
                        className={fieldClass('name')}
                      />
                      {fieldErrors.name && <p id="contact-name-error" className="text-xs font-semibold text-red-500 ml-1" role="alert">{fieldErrors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1" htmlFor="contact-email">Email Address <span className="text-red-500">*</span></label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="john@example.com"
                        value={form.email}
                        required
                        aria-required="true"
                        aria-invalid={!!fieldErrors.email}
                        aria-describedby={fieldErrors.email ? 'contact-email-error' : undefined}
                        onChange={(e) => { setForm((prev) => ({ ...prev, email: e.target.value })); clearFieldError('email'); }}
                        className={fieldClass('email')}
                      />
                      {fieldErrors.email && <p id="contact-email-error" className="text-xs font-semibold text-red-500 ml-1" role="alert">{fieldErrors.email}</p>}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1" htmlFor="contact-phone">Phone Number</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="+1 234 567 890"
                        value={form.phone}
                        onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1" htmlFor="contact-visa-type">Visa Type</label>
                      <select
                        id="contact-visa-type"
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
                    <label className="text-sm font-bold text-slate-700 ml-1" htmlFor="contact-message">Your Message <span className="text-red-500">*</span></label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Tell us about your requirements..."
                      value={form.message}
                      required
                      aria-required="true"
                      aria-invalid={!!fieldErrors.message}
                      aria-describedby={fieldErrors.message ? 'contact-message-error' : undefined}
                      onChange={(e) => { setForm((prev) => ({ ...prev, message: e.target.value })); clearFieldError('message'); }}
                      className={fieldClass('message')}
                    ></textarea>
                    {fieldErrors.message && <p id="contact-message-error" className="text-xs font-semibold text-red-500 ml-1" role="alert">{fieldErrors.message}</p>}
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

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-8">Our Location</h3>
                  <div className="w-full h-[400px] rounded-[3rem] overflow-hidden shadow-xl border-8 border-white">
                    <iframe
                      src="https://www.google.com/maps?q=F-16%2C%20Ground%20Floor%2C%20Gayathri%20Towers%2C%20Main%20Road%2C%20Green%20Hills%20Colony%2C%20Kothapet%2C%20Saroornagar%20Mandal%2C%20Ranga%20Reddy%20District%2C%20Telangana%20500035&output=embed"
                      width="100%" height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      title="Google Maps"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Working Hours</h4>
                      <p className="text-slate-500 text-sm">Mon-Sat: 9am - 6pm</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0">
                      <Globe className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Global Support</h4>
                      <p className="text-slate-500 text-sm">Available in 50+ countries</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
