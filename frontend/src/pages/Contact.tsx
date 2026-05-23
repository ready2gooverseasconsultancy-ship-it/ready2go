import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';

export const Contact = () => {
  return (
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
              { title: "Visit Us", info: "F-16, Ground Floor, \u201cGayathri Towers\u201d", sub: "Main Road, Green Hills Colony, Kothapet, Saroornagar Mandal, Ranga Reddy District, Telangana \u2013 500035", icon: MapPin, color: "bg-emerald-50 text-emerald-600" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 text-center group hover:shadow-xl transition-all"
              >
                <div className={`w-20 h-20 rounded-3xl ${item.color} flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-900 font-semibold mb-1">{item.info}</p>
                <p className="text-slate-500 text-sm">{item.sub}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-slate-100"
            >
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
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
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Visa Type</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none transition-all appearance-none">
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
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-blue outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-brand-orange text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-blue transition-all flex items-center justify-center gap-3 shadow-lg shadow-brand-orange/20 group">
                  Book Free Consultation
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
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
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                    title="Google Maps"
                  ></iframe>
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
  );
};
