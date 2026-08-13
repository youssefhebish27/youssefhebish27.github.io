import React, { useEffect } from 'react';
import { X, Award, CheckCircle2, ShieldCheck, Printer } from 'lucide-react';
import { CertificationItem } from '../types';
import { ActionButton } from './ActionButton';

interface CertificateModalProps {
  cert: CertificationItem | null;
  onClose: () => void;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  if (!cert) return null;

  // Listen for Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white text-gray-900 rounded-2xl shadow-2xl overflow-hidden my-4 sm:my-8 border border-teal-200 animate-in fade-in zoom-in duration-200 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Top Control Bar */}
        <div className="sticky top-0 z-30 flex justify-between items-center px-4 sm:px-6 py-3.5 bg-slate-900 text-white border-b border-slate-800 shadow-md">
          <div className="flex items-center gap-2">
            <Award className="text-teal-400 shrink-0" size={20} />
            <span className="font-semibold text-xs sm:text-base line-clamp-1">Verified Certificate</span>
            <span className="hidden md:inline-block px-2.5 py-0.5 text-xs bg-teal-500/20 text-teal-300 rounded-full border border-teal-500/30 shrink-0">
              Official Verification
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <ActionButton
              label="Print / Save PDF"
              icon={Printer}
              onClick={handlePrint}
              variant="outline"
              size="sm"
              className="!bg-slate-800 hover:!bg-slate-700 !text-slate-200 !border-slate-700"
            />
            <ActionButton
              label="Close"
              icon={X}
              onClick={onClose}
              variant="primary"
              size="sm"
            />
          </div>
        </div>

        {/* Certificate Display Area */}
        <div className="p-3 sm:p-8 bg-slate-100 dark:bg-slate-950 flex justify-center overflow-y-auto flex-1">
          {/* Certificate Frame (Authentic Graphic Frame) */}
          <div className="w-full bg-white rounded-lg shadow-xl border-4 sm:border-8 border-teal-500/80 p-4 sm:p-10 relative overflow-hidden text-center select-none max-w-3xl">
            {/* Background Geometric Watermark Accents */}
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-teal-500/10 rounded-full blur-xl pointer-events-none"></div>
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-teal-500/10 rounded-full blur-xl pointer-events-none"></div>
            
            {/* Decorative Corner Accents */}
            <div className="absolute top-2 left-2 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-teal-600"></div>
            <div className="absolute top-2 right-2 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-teal-600"></div>
            <div className="absolute bottom-2 left-2 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-teal-600"></div>
            <div className="absolute bottom-2 right-2 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-teal-600"></div>

            {/* Certificate Header */}
            <div className="mb-4 sm:mb-6">
              <h1 className="text-2xl sm:text-5xl font-serif font-extrabold tracking-wide text-slate-900 mb-1">
                CERTIFICATE
              </h1>
              <h2 className="text-sm sm:text-2xl font-serif font-bold tracking-widest text-teal-700 uppercase mb-3 sm:mb-4">
                OF COMPLETION
              </h2>
              <p className="text-[10px] sm:text-sm font-semibold tracking-wider text-teal-600 uppercase">
                THIS IS TO CERTIFY THAT :
              </p>
            </div>

            {/* Recipient Name */}
            <div className="my-4 sm:my-6 py-2 border-b-2 border-teal-200 max-w-lg mx-auto">
              <span className="text-xl sm:text-4xl font-serif italic font-bold text-slate-900 tracking-wide font-serif">
                {cert.certificateDetails?.recipientName || 'Youssef Mohamed Hebish'}
              </span>
            </div>

            {/* Certificate Statement */}
            <div className="mb-6 sm:mb-8 max-w-2xl mx-auto space-y-2 sm:space-y-3">
              <p className="text-xs sm:text-base font-bold text-slate-800 tracking-wide uppercase">
                {cert.certificateDetails?.description || 'HAS SUCCESSFULLY ATTENDED & COMPLETED INTERN AS QC MEMBER'}
              </p>
              <p className="text-xs sm:text-lg font-medium text-slate-700 font-serif">
                {cert.certificateDetails?.period || 'For 3 Months (1 January - 1 April 2026)'}
              </p>
            </div>

            {/* Bottom Footer: Logo & Signatory */}
            <div className="pt-6 sm:pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 px-2 sm:px-4">
              {/* Organization Logo */}
              <div className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-teal-500/40 bg-teal-50 flex items-center justify-center p-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-teal-600 flex items-center justify-center text-[10px] font-bold text-teal-800">
                    MS
                  </div>
                </div>
                <div>
                  <div className="text-base sm:text-lg font-bold text-teal-700 tracking-tight leading-none uppercase">
                    MEDICA
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-slate-500 tracking-widest leading-none">
                    space
                  </div>
                </div>
              </div>

              {/* Certified Badge Stamp */}
              <div className="hidden md:flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-teal-600 text-white flex flex-col items-center justify-center shadow-md border-2 border-white">
                  <ShieldCheck size={24} />
                  <span className="text-[8px] font-bold tracking-tighter uppercase mt-0.5">VERIFIED</span>
                </div>
              </div>

              {/* Signatory */}
              <div className="text-center sm:text-right flex flex-col items-center sm:items-end">
                <div className="italic font-serif text-lg sm:text-2xl text-slate-900 font-bold mb-1 border-b border-slate-900 pb-1 px-4">
                  Osama Helmy
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                  CEO & Founder
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Information & Close Button */}
        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-slate-900 text-white border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-300 text-center sm:text-left">
            <CheckCircle2 className="text-teal-400 shrink-0" size={16} />
            <span>Official 3-Month QC Member Internship Certificate issued by MedicaSpace.</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <ActionButton
              label="Visit MedicaSpace"
              href="https://medicaspace.com"
              target="_blank"
              variant="outline"
              size="sm"
              showExternalIcon
              className="!text-teal-400 !border-slate-700 hover:!bg-slate-800"
            />

            <ActionButton
              label="Close Window"
              onClick={onClose}
              variant="secondary"
              size="sm"
              className="!bg-slate-800 hover:!bg-slate-700 !text-white !border-slate-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
