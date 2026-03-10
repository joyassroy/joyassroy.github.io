"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, AlertTriangle } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactSection() {
  const form = useRef();
  const recaptchaRef = useRef();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isCooldown, setIsCooldown] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

  useEffect(() => {
    emailjs.init({
      publicKey: '_kcwQa',
      limitRate: {
        id: 'portfolio_contact',
        throttle: 60000, 
      },
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    if (e.target.botcheck.value) {
      setSubmitStatus('error');
      return; 
    }

    if (isCooldown) {
      alert("একটু অপেক্ষা করুন! আপনি কিছুক্ষণ আগেই একটি মেসেজ পাঠিয়েছেন। ⏳");
      return;
    }

    if (!captchaToken) {
      alert("দয়া করে প্রমাণ করুন যে আপনি রোবট নন! 🤖");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.sendForm(
      'service_larp6pt', 
      'template_0d5w9uf', 
      form.current, 
      '_kcwQa' 
    )
    .then((result) => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        form.current.reset(); 
        
        recaptchaRef.current.reset();
        setCaptchaToken(null);
        
        setIsCooldown(true);
        setTimeout(() => setIsCooldown(false), 60000); 

        setTimeout(() => setSubmitStatus(null), 5000);
    }, (error) => {
        setIsSubmitting(false);
        setSubmitStatus('error');
        recaptchaRef.current.reset();
        setCaptchaToken(null);
        setTimeout(() => setSubmitStatus(null), 5000);
    });
  };

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden bg-transparent">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-4 tracking-tight">
            Get In Touch
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full shadow-[0_0_15px_rgba(6,182,212,0.4)]"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group p-8 md:p-12 rounded-[2.5rem] bg-white/40 dark:bg-white/[0.03] backdrop-blur-3xl border border-white/20 dark:border-white/10 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-lg">
                I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-8">
                {[
                  { icon: <Mail size={24} />, label: "Email", value: "nadimbadsha4@gmail.com", href: "mailto:nadimbadsha4@gmail.com" },
                  { icon: <Phone size={24} />, label: "Phone", value: "+8801403926676", href: "tel:+8801403926676" },
                  { icon: <MapPin size={24} />, label: "Location", value: "Gazipur, Dhaka, Bangladesh", href: "#" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-5 group/item">
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 group-hover/item:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-500">{item.label}</p>
                      <a href={item.href} className="text-gray-900 dark:text-white font-bold text-lg hover:text-cyan-500 transition-colors break-all">
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-10 flex gap-4">
               <a href="https://linkedin.com/in/joyassroy-barua" target="_blank" className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all active:scale-95">
                 <Linkedin size={20} /> LinkedIn
               </a>
               <a href="https://github.com/joyassroy" target="_blank" className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-bold hover:bg-cyan-500 hover:text-white transition-all">
                 <Github size={20} /> GitHub
               </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-12 rounded-[2.5rem] bg-white/40 dark:bg-white/[0.03] backdrop-blur-3xl border border-white/20 dark:border-white/10 shadow-2xl relative overflow-hidden"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6 relative z-10"> 
              <input type="text" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

              <div className="space-y-3"> 
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Full Name</label>
                <input 
                  type="text" 
                  name="from_name" 
                  required
                  placeholder="Enter your name" 
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-900 dark:text-white transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600" 
                />
              </div>
              <div className="space-y-3"> 
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Email Address</label>
                <input 
                  type="email" 
                  name="reply_to" 
                  required
                  placeholder="name@example.com" 
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-900 dark:text-white transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600" 
                />
              </div>
              <div className="space-y-3"> 
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Message</label>
                <textarea 
                  name="message" 
                  required
                  rows="4" 
                  placeholder="Write your message here..." 
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-900 dark:text-white transition-all resize-none placeholder:text-gray-400 dark:placeholder:text-gray-600"
                ></textarea>
              </div>

              <div className="flex justify-center w-full py-1 overflow-hidden rounded-xl">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6Ld5MYUsAAAAAKpHXFe6UeNMUf1Vj88zW3xnObKN"
                  onChange={(token) => setCaptchaToken(token)}
                  onExpired={() => setCaptchaToken(null)}
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting || isCooldown || !captchaToken}
                className={`group w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-extrabold text-lg shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-3 ${(isSubmitting || isCooldown || !captchaToken) ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-cyan-500/40 active:scale-95'}`}
              >
                {isSubmitting ? 'Sending...' : isCooldown ? 'Sent! Please wait...' : !captchaToken ? 'Complete Captcha First' : 'Send Message'} 
                {(!isSubmitting && !isCooldown && captchaToken) && <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>

            <AnimatePresence>
              {submitStatus && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 50 }}
                  transition={{ type: "spring", stiffness: 120, damping: 15 }}
                  className={`absolute bottom-8 left-1/2 -translate-x-1/2 w-max max-w-[90%] z-20 flex items-center gap-3 px-6 py-3.5 rounded-full backdrop-blur-xl border shadow-2xl ${submitStatus === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400' : 'bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400'}`}
                >
                  {submitStatus === 'success' ? <CheckCircle size={22} className="animate-pulse" /> : <AlertTriangle size={22} className="animate-pulse" />}
                  <span className="font-bold text-sm tracking-wide">
                    {submitStatus === 'success' ? 'Message sent successfully!' : 'Failed to send. Try again.'}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}