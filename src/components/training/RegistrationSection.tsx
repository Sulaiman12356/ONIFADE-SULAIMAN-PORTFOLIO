import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  Smartphone,
  Laptop,
  Layers,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Lock,
} from 'lucide-react';
import { db } from '../../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

export interface RegistrationData {
  fullName: string;
  email: string;
  whatsapp: string;
  device: 'Smartphone' | 'Laptop' | 'Both';
  experience: 'Complete beginner' | "I've used Canva before" | 'Intermediate';
  learningGoal: string;
  registrationCode: string;
  registeredAt: string;
}

interface RegistrationSectionProps {
  onSuccess: (data: RegistrationData) => void;
}

export const RegistrationSection: React.FC<RegistrationSectionProps> = ({ onSuccess }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [device, setDevice] = useState<'Smartphone' | 'Laptop' | 'Both'>('Smartphone');
  const [experience, setExperience] = useState<'Complete beginner' | "I've used Canva before" | 'Intermediate'>('Complete beginner');
  const [learningGoal, setLearningGoal] = useState('Everything');
  const [agreed, setAgreed] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!whatsapp.trim() || whatsapp.trim().length < 8) {
      setErrorMessage('Please enter your WhatsApp phone number.');
      return;
    }

    if (!agreed) {
      setErrorMessage('Please agree to receive cohort updates to proceed.');
      return;
    }

    setIsSubmitting(true);

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const regCode = `CDA-2026-${randomNum}`;
    const timestamp = new Date().toISOString();

    const registrationRecord: RegistrationData = {
      fullName: fullName.trim(),
      email: email.trim(),
      whatsapp: whatsapp.trim(),
      device,
      experience,
      learningGoal,
      registrationCode: regCode,
      registeredAt: timestamp,
    };

    try {
      // 1. Save to Local Storage for instant offline-resilient access
      const existing = JSON.parse(localStorage.getItem('canva_registrations') || '[]');
      existing.unshift(registrationRecord);
      localStorage.setItem('canva_registrations', JSON.stringify(existing));

      // 2. Persist to Firestore messages collection if available
      try {
        if (db) {
          await addDoc(collection(db, 'messages'), {
            name: fullName.trim(),
            email: email.trim(),
            message: `[Canva 3-Day Training Registration]\nAttendee Code: ${regCode}\nWhatsApp: ${whatsapp.trim()}\nDevice: ${device}\nCanva Experience: ${experience}\nGoal: ${learningGoal}`,
            createdAt: timestamp,
          });
        }
      } catch (cloudErr) {
        console.warn('Could not sync to cloud database, cached locally:', cloudErr);
      }

      setIsSubmitting(false);
      onSuccess(registrationRecord);
    } catch (err: any) {
      setIsSubmitting(false);
      setErrorMessage('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <section id="ready-section" className="py-20 sm:py-24 bg-gradient-to-b from-white via-slate-50/70 to-slate-100/50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header matching Ready.png */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#0B5ED7] font-bold text-xs uppercase tracking-wider border border-blue-100 mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0B5ED7]" />
            SECURE YOUR SEAT • 100% FREE
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0B1F3A] tracking-tight uppercase leading-tight">
            READY TO GIVE YOURSELF <br className="hidden sm:inline" />
            <span className="text-[#0B5ED7]">3 DAYS?</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
            It's 100% free. It's hands-on practical. And you can join with the smartphone or laptop you already own.
          </p>
        </div>

        {/* Form Card matching Ready.png */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-6 sm:p-10 md:p-12 relative">
          {/* Card Top Header Strip */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-6 mb-8 border-b border-slate-100">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700">
              <Lock className="w-4 h-4 text-emerald-600" />
              <span>Instant Seat Allocation</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Free Access • Next Cohort Starting Soon</span>
            </div>
          </div>

          {errorMessage && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-semibold">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 1. Full Name */}
            <div>
              <label htmlFor="reg-name" className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                FULL NAME <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-5 h-5" />
                </div>
                <input
                  id="reg-name"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Onifade Sulaiman"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#0B5ED7] focus:ring-2 focus:ring-blue-500/20 text-slate-900 placeholder:text-slate-400 text-sm sm:text-base outline-none transition-all"
                />
              </div>
            </div>

            {/* 2. Email Address */}
            <div>
              <label htmlFor="reg-email" className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                EMAIL ADDRESS <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  id="reg-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. sulaiman@example.com"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#0B5ED7] focus:ring-2 focus:ring-blue-500/20 text-slate-900 placeholder:text-slate-400 text-sm sm:text-base outline-none transition-all"
                />
              </div>
            </div>

            {/* 3. WhatsApp Number */}
            <div>
              <label htmlFor="reg-whatsapp" className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                WHATSAPP NUMBER <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Phone className="w-5 h-5" />
                </div>
                <input
                  id="reg-whatsapp"
                  type="tel"
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="e.g. 08051780169 or +234..."
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 focus:border-[#0B5ED7] focus:ring-2 focus:ring-blue-500/20 text-slate-900 placeholder:text-slate-400 text-sm sm:text-base outline-none transition-all"
                />
              </div>
              <p className="mt-1.5 text-[11px] text-slate-500">
                Nigerian & international numbers accepted
              </p>
            </div>

            {/* 4. Device Selection Toggle Buttons */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                DEVICE <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setDevice('Smartphone')}
                  className={`py-3 px-3 sm:px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                    device === 'Smartphone'
                      ? 'bg-[#0B5ED7] text-white border-[#0B5ED7] shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Smartphone</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDevice('Laptop')}
                  className={`py-3 px-3 sm:px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                    device === 'Laptop'
                      ? 'bg-[#0B5ED7] text-white border-[#0B5ED7] shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <Laptop className="w-4 h-4" />
                  <span>Laptop</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDevice('Both')}
                  className={`py-3 px-3 sm:px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                    device === 'Both'
                      ? 'bg-[#0B5ED7] text-white border-[#0B5ED7] shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  <span>Both</span>
                </button>
              </div>
            </div>

            {/* 5. Canva Experience Selection Toggle Buttons */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                CANVA EXPERIENCE <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setExperience('Complete beginner')}
                  className={`py-3 px-3 sm:px-4 rounded-xl font-bold text-xs sm:text-sm border transition-all text-center cursor-pointer ${
                    experience === 'Complete beginner'
                      ? 'bg-blue-50 text-[#0B5ED7] border-[#0B5ED7] ring-1 ring-blue-500'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  Complete beginner
                </button>

                <button
                  type="button"
                  onClick={() => setExperience("I've used Canva before")}
                  className={`py-3 px-3 sm:px-4 rounded-xl font-bold text-xs sm:text-sm border transition-all text-center cursor-pointer ${
                    experience === "I've used Canva before"
                      ? 'bg-blue-50 text-[#0B5ED7] border-[#0B5ED7] ring-1 ring-blue-500'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  I've used Canva before
                </button>

                <button
                  type="button"
                  onClick={() => setExperience('Intermediate')}
                  className={`py-3 px-3 sm:px-4 rounded-xl font-bold text-xs sm:text-sm border transition-all text-center cursor-pointer ${
                    experience === 'Intermediate'
                      ? 'bg-blue-50 text-[#0B5ED7] border-[#0B5ED7] ring-1 ring-blue-500'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  Intermediate
                </button>
              </div>
            </div>

            {/* 6. What Do You Want To Learn? Dropdown */}
            <div>
              <label htmlFor="reg-learning-goal" className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                WHAT DO YOU WANT TO LEARN? <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="reg-learning-goal"
                  value={learningGoal}
                  onChange={(e) => setLearningGoal(e.target.value)}
                  className="w-full appearance-none pl-4 pr-10 py-3.5 rounded-xl border border-slate-200 focus:border-[#0B5ED7] focus:ring-2 focus:ring-blue-500/20 text-slate-900 text-sm sm:text-base outline-none transition-all bg-white cursor-pointer"
                >
                  <option value="Everything">Everything</option>
                  <option value="Social Media Graphics & Flyers">Social Media Graphics & Flyers</option>
                  <option value="Business & Brand Identity Logos">Business & Brand Identity Logos</option>
                  <option value="Carousels & Presentation Slides">Carousels & Presentation Slides</option>
                  <option value="Monetizing Canva Skills / Freelancing">Monetizing Canva Skills / Freelancing</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* 7. Agreement Checkbox */}
            <div className="flex items-start gap-3 pt-2">
              <input
                id="reg-agree-checkbox"
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-5 h-5 rounded border-slate-300 text-[#0B5ED7] focus:ring-blue-500 mt-0.5 cursor-pointer"
              />
              <label htmlFor="reg-agree-checkbox" className="text-xs sm:text-sm text-slate-600 select-none cursor-pointer">
                I agree to receive important class updates and learning information through email and WhatsApp.
              </label>
            </div>

            {/* 8. Reserve My Free Spot Submit CTA */}
            <div className="pt-2">
              <button
                id="submit-reserve-free-spot-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 sm:py-4.5 rounded-xl bg-[#0B5ED7] hover:bg-blue-600 text-white font-extrabold text-base sm:text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                <span>{isSubmitting ? 'Securing Your Seat...' : 'RESERVE MY FREE SPOT'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* 9. Micro Trust Indicators */}
            <div className="text-center pt-2 text-xs text-slate-500 flex items-center justify-center gap-2 flex-wrap">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Free Class • Zero hidden fees • No credit card required</span>
            </div>

            {/* 10. Privacy & Terms Disclaimer */}
            <div className="text-center pt-2 border-t border-slate-100 text-[11px] text-slate-400">
              Your contact details are strictly kept private and used only for training cohort communication.{' '}
              <span className="underline cursor-pointer">Privacy Policy</span> •{' '}
              <span className="underline cursor-pointer">Terms of Participation</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
