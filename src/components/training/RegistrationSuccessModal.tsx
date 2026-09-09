import React from 'react';
import { CheckCircle2, Calendar, MessageCircle, Copy, Check, X, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { RegistrationData } from './RegistrationSection';

interface RegistrationSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: RegistrationData | null;
}

export const RegistrationSuccessModal: React.FC<RegistrationSuccessModalProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen || !data) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(data.registrationCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Mr. Clarity! I just registered for the 3-Day Free Canva Design Training.\n\nName: ${data.fullName}\nAttendee Code: ${data.registrationCode}\nDevice: ${data.device}\n\nPlease add me to the VIP Cohort WhatsApp group!`
  );

  const whatsappGroupUrl = `https://wa.me/2348051780169?text=${whatsappMessage}`;

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    '3-Day Free Canva Design Training with Mr. Clarity'
  )}&dates=20260910T193000Z/20260912T210000Z&details=${encodeURIComponent(
    `Canva Design Live Training with Onifade Sulaiman (Mr. Clarity).\nAttendee Code: ${data.registrationCode}\nWhatsApp: ${data.whatsapp}`
  )}&location=${encodeURIComponent('Online (Google Meet / Zoom & WhatsApp)')}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Celebration Header */}
        <div className="bg-[#0B1930] text-white p-6 sm:p-8 text-center relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>SEAT ALLOCATED SUCCESSFULLY</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            You're In, {data.fullName.split(' ')[0]}! 🎉
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Your free spot has been secured for the upcoming cohort.
          </p>
        </div>

        {/* Ticket Details Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Attendee Pass Box */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                YOUR ATTENDEE CODE
              </div>
              <div className="font-mono text-lg font-black text-[#0B5ED7]">
                {data.registrationCode}
              </div>
            </div>
            <button
              onClick={handleCopyCode}
              className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-1 cursor-pointer transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Next Steps Instructions */}
          <div className="space-y-3">
            <div className="text-xs font-black uppercase tracking-wider text-slate-400">
              IMPORTANT NEXT STEP:
            </div>
            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              Class links, daily design assets, font templates, and replay access are distributed directly inside
              our private <strong>WhatsApp VIP Cohort Group</strong>.
            </p>
          </div>

          {/* Primary Action: Join WhatsApp Group */}
          <a
            href={whatsappGroupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2.5 transition-all cursor-pointer text-center"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Join WhatsApp VIP Cohort Group</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Secondary Action: Add to Calendar */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer text-center"
            >
              <Calendar className="w-4 h-4 text-blue-600" />
              <span>Add to Google Calendar</span>
            </a>

            <button
              onClick={onClose}
              className="flex-1 py-3 px-4 rounded-xl border border-slate-200 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Done / Return to Site
            </button>
          </div>

          {/* Trust footnote */}
          <div className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Check your WhatsApp/SMS for immediate cohort confirmation.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
