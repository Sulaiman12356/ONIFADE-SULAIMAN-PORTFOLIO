import React, { useState } from 'react';
import {
  Inbox,
  Mail,
  Trash2,
  CheckCircle2,
  Clock,
  Archive,
  ExternalLink,
  MessageSquare,
  Search,
} from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { ContactMessage } from '../../types';

export const AdminMessagesTab: React.FC = () => {
  const { contactMessages, updateContactMessageStatus, deleteContactMessage } = usePortfolio();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'All' | 'New' | 'Replied' | 'Archived'>('All');

  const filteredMessages = contactMessages.filter((msg) => {
    const matchesSearch =
      msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (msg.subject && msg.subject.toLowerCase().includes(searchTerm.toLowerCase())) ||
      msg.message.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = filterStatus === 'All' || msg.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleDelete = async (id: string) => {
    if (confirm('Delete this message permanently?')) {
      await deleteContactMessage(id);
    }
  };

  const handleReplyEmail = (msg: ContactMessage) => {
    const subject = encodeURIComponent(`Re: ${msg.subject || 'Inquiry from Mr. Clarity Portfolio'}`);
    const body = encodeURIComponent(`Hi ${msg.name},\n\nThank you for reaching out!\n\nBest regards,\nOnifade Sulaiman (Mr. Clarity)`);
    window.open(`mailto:${msg.email}?subject=${subject}&body=${body}`, '_blank');
    updateContactMessageStatus(msg.id, 'Replied');
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-[#08183A] to-[#0B5ED7] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <Inbox className="w-6 h-6 text-[#00D2FF]" />
            <h2 className="text-xl sm:text-2xl font-black">Direct Contact Messages</h2>
          </div>
          <p className="text-xs text-slate-300 mt-1">
            Real-time inquiries and messages submitted through the website's Contact section.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-xl bg-white/10 text-xs font-extrabold text-[#00D2FF]">
            {contactMessages.filter((m) => m.status === 'New').length} New Unread
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-white/10 text-xs font-semibold text-slate-300">
            {contactMessages.length} Total
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search messages by name, email, keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#0B5ED7]"
          />
        </div>

        <div className="flex items-center gap-1.5 self-start sm:self-auto">
          {(['All', 'New', 'Replied', 'Archived'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-colors ${
                filterStatus === status
                  ? 'bg-[#0B5ED7] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Messages List */}
      <div className="space-y-4">
        {filteredMessages.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 text-slate-400">
            <Mail className="w-12 h-12 mx-auto mb-3 opacity-40 text-[#0B5ED7]" />
            <p className="font-bold text-slate-600">No messages found.</p>
            <p className="text-xs mt-1">Inquiries sent via the website contact form appear here in real time.</p>
          </div>
        ) : (
          filteredMessages.map((msg) => (
            <div
              key={msg.id}
              className={`p-5 rounded-2xl bg-white border transition-all flex flex-col gap-4 ${
                msg.status === 'New'
                  ? 'border-[#0B5ED7]/40 shadow-sm bg-blue-50/20'
                  : 'border-slate-200'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#08183A] to-[#0B5ED7] text-white flex items-center justify-center font-black text-sm shrink-0">
                    {msg.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-slate-900 text-sm">{msg.name}</span>
                      <span
                        className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                          msg.status === 'New'
                            ? 'bg-blue-100 text-[#0B5ED7]'
                            : msg.status === 'Replied'
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {msg.status}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500">{msg.email}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  {new Date(msg.date).toLocaleDateString()} at {new Date(msg.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>

              {msg.subject && (
                <div className="font-bold text-slate-800 text-xs flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#0B5ED7]" />
                  Subject: {msg.subject}
                </div>
              )}

              <div className="p-3.5 rounded-xl bg-slate-50 text-slate-700 text-xs leading-relaxed border border-slate-100 whitespace-pre-wrap">
                {msg.message}
              </div>

              {/* Status Controls & Quick Reply */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-bold text-slate-500 mr-1">Status:</span>
                  {(['New', 'Replied', 'Archived'] as const).map((st) => (
                    <button
                      key={st}
                      onClick={() => updateContactMessageStatus(msg.id, st)}
                      className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-colors ${
                        msg.status === st
                          ? 'bg-[#08183A] text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleReplyEmail(msg)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0B5ED7] text-white text-xs font-bold hover:bg-[#084298] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Reply via Email
                  </button>

                  <button
                    onClick={() => handleDelete(msg.id)}
                    className="p-1.5 rounded-xl hover:bg-rose-50 text-rose-600 transition-colors"
                    title="Delete Message"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
