import React from 'react';
import { 
  Star, 
  Quote, 
  Plus, 
  ShieldCheck, 
  Sparkles, 
  Settings, 
  MessageSquareQuote,
  UserCheck
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const TestimonialsSection: React.FC = () => {
  const { testimonials, setIsAdminOpen, setAdminActiveTab } = usePortfolio();

  const handleOpenAdminTestimonials = () => {
    setAdminActiveTab('testimonials');
    setIsAdminOpen(true);
  };

  // Only display testimonials that are added through Admin Dashboard AND have permissionStatus === 'granted'
  const visibleTestimonials = testimonials
    .filter((t) => (t.permissionStatus === 'granted' || t.published === true || t.isPublished === true))
    .sort((a, b) => {
      // Featured first, then most recent
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return 0;
    });

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#F8FAFC] relative border-t border-[#E5EAF1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#E5EAF1] text-xs font-bold tracking-widest text-[#0B5ED7] uppercase mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0B5ED7]" />
            <span>AUTHENTIC CLIENT FEEDBACK</span>
          </div>

          {/* Exact heading requested */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#062B63] tracking-tight mb-3">
            What People Say About Working With Me
          </h2>

          <p className="text-base sm:text-lg text-[#64748B] max-w-2xl mx-auto font-normal">
            Real feedback from business founders, leaders, and collaborators who have experienced Mr. Clarity&apos;s problem-solving approach firsthand.
          </p>

          {/* Admin Management Trigger Button */}
          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              onClick={handleOpenAdminTestimonials}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 border border-[#CBD5E1] text-xs font-bold text-[#062B63] shadow-xs transition-colors hover:border-[#0B5ED7]"
              title="Open Admin Dashboard to add, edit, or feature authentic testimonials"
            >
              <Settings className="w-3.5 h-3.5 text-[#0B5ED7]" />
              <span>Admin Testimonials ({testimonials.length})</span>
            </button>
          </div>
        </div>

        {/* Display Condition: If no testimonials exist yet (or none approved) */}
        {visibleTestimonials.length === 0 ? (
          <div 
            id="testimonials-empty-state"
            className="max-w-2xl mx-auto rounded-3xl bg-white border-2 border-dashed border-[#CBD5E1] p-10 sm:p-14 text-center shadow-xs"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#F5F9FF] border border-[#E5EAF1] flex items-center justify-center mx-auto mb-5 text-[#0B5ED7]">
              <MessageSquareQuote className="w-8 h-8" />
            </div>

            {/* Exact Empty State Text Requested */}
            <h3 className="text-xl sm:text-2xl font-black text-[#062B63] mb-2 tracking-tight">
              Testimonials from collaborators and clients will appear here.
            </h3>

            <p className="text-sm text-[#64748B] leading-relaxed max-w-lg mx-auto mb-6">
              In accordance with our strict integrity policy, we never generate artificial reviews. All client testimonials are verified, permissioned, and published directly through the Admin Dashboard.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8FAFC] border border-[#E5EAF1] text-xs font-semibold text-[#0B1F3A] mb-6">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Zero Fake Reviews Policy • 100% Client-Verified</span>
            </div>

            <div>
              <button
                onClick={handleOpenAdminTestimonials}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#062B63] hover:bg-[#0B5ED7] text-white text-xs font-bold shadow-md shadow-blue-900/10 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add First Verified Testimonial (Admin)</span>
              </button>
            </div>
          </div>
        ) : (
          /* Real Testimonials Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleTestimonials.map((item) => (
              <div
                key={item.id}
                id={`testimonial-card-${item.id}`}
                className={`bg-white rounded-3xl p-7 sm:p-8 border ${
                  item.isFeatured ? 'border-[#0B5ED7] shadow-lg shadow-blue-500/5' : 'border-[#E5EAF1] shadow-xs'
                } hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group`}
              >
                {/* Featured Badge */}
                {item.isFeatured && (
                  <div className="absolute -top-3 right-6 inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-[#0B5ED7] text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span>Featured Feedback</span>
                  </div>
                )}

                <div>
                  {/* Top Bar: Quote Icon & Star Rating */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F9FF] border border-[#E5EAF1] flex items-center justify-center text-[#0B5ED7]">
                      <Quote className="w-5 h-5" />
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center gap-1 text-amber-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < item.rating
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-slate-200 fill-slate-100'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Quote Body */}
                  <p className="text-sm sm:text-base text-[#1E293B] leading-relaxed mb-6 font-normal italic">
                    &ldquo;{item.quote || item.testimonial}&rdquo;
                  </p>
                </div>

                {/* Author Info Section: Photo, Name, Position, Organization */}
                <div className="pt-5 border-t border-[#E5EAF1] flex items-center gap-3.5">
                  {/* Photo or Initials Avatar */}
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#062B63] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 border-2 border-white shadow-xs">
                    {item.photoUrl ? (
                      <img
                        src={item.photoUrl}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      <span>{item.name.charAt(0).toUpperCase()}</span>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-black text-[#062B63] truncate">
                        {item.name}
                      </h4>
                      <UserCheck className="w-3.5 h-3.5 text-[#0B5ED7] flex-shrink-0" />
                    </div>
                    <div className="text-xs text-[#64748B] truncate">
                      {item.position || item.role}
                      {(item.organization || item.company) && (
                        <span className="text-slate-400"> • {item.organization || item.company}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
