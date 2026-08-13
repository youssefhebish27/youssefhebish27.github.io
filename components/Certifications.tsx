import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { CERTIFICATIONS } from '../constants';
import { CertificationItem } from '../types';
import CertificateModal from './CertificateModal';
import { ActionButton, DocumentActionGroup } from './ActionButton';
import { Award, CheckCircle2, ShieldCheck, Eye, Sparkles, Building2, Calendar, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const openCertificateModal = (cert: CertificationItem) => {
    if (cert.hasModal) {
      setSelectedCert(cert);
    }
  };

  return (
    <>
      <SectionWrapper id="certifications" className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-100 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 rounded-full text-xs font-bold mb-4 border border-teal-200 dark:border-teal-700">
            <Award size={16} />
            Verified Credentials & Internships
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certified <span className="text-teal-600 dark:text-teal-400">Achievements</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Official certifications and internship credentials validating my hands-on Quality Assurance expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {CERTIFICATIONS.map((cert, index) => {
            const isFeatured = cert.hasModal;

            return (
              <motion.div
                key={cert.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`
                  relative rounded-2xl p-8 transition-all duration-300 border flex flex-col justify-between
                  ${isFeatured 
                    ? 'bg-gradient-to-br from-white via-teal-50/40 to-emerald-50/20 dark:from-gray-800 dark:via-teal-950/30 dark:to-gray-800 border-teal-300 dark:border-teal-700/70 shadow-xl hover:shadow-teal-500/10' 
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg'
                  }
                `}
              >
                {/* Ribbon Tag for Featured Certificate */}
                {isFeatured && (
                  <div className="absolute -top-3 right-6 bg-gradient-to-r from-teal-600 to-emerald-600 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md flex items-center gap-1 tracking-wider">
                    <Sparkles size={12} />
                    Verified Internship
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="p-3.5 rounded-xl bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300">
                      {isFeatured ? <ShieldCheck size={28} /> : <Award size={28} />}
                    </div>

                    <span className={`px-3 py-1 text-xs font-bold rounded-full border ${
                      cert.status === 'Completed & Certified'
                        ? 'bg-teal-100 text-teal-800 border-teal-300 dark:bg-teal-900/40 dark:text-teal-300 dark:border-teal-700'
                        : 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-900/40 dark:text-amber-300 dark:border-amber-700'
                    }`}>
                      {cert.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                    {cert.title}
                  </h3>

                  {/* Organization & Date Meta */}
                  <div className="space-y-1.5 mb-6 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-2 font-medium">
                      <Building2 size={16} className="text-teal-600 dark:text-teal-400" />
                      <span>{cert.issuer}</span>
                    </div>
                    {cert.date && (
                      <div className="flex items-center gap-2 font-medium">
                        <Calendar size={16} className="text-gray-400" />
                        <span>{cert.date}</span>
                      </div>
                    )}
                  </div>

                  {/* Featured Details Box for MedicaSpace */}
                  {isFeatured && cert.certificateDetails && (
                    <div className="p-4 rounded-xl bg-white/80 dark:bg-gray-900/80 border border-teal-100 dark:border-teal-900/50 mb-6 text-sm space-y-2">
                      <div className="font-semibold text-teal-800 dark:text-teal-300 flex items-center gap-2">
                        <FileText size={16} />
                        <span>Official Role: {cert.role || 'QC Member Intern'}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed">
                        Executed E2E integration testing, mobile/web responsiveness checks, network interruption validation, and logged critical bugs on ClickUp.
                      </p>
                    </div>
                  )}

                  {/* Curriculum List for Rowad Masr */}
                  {cert.courses && cert.courses.length > 0 && (
                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 mb-6 border border-gray-100 dark:border-gray-700">
                      <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                        Track Curriculum
                      </h4>
                      <ul className="grid sm:grid-cols-2 gap-2 text-xs text-gray-700 dark:text-gray-300">
                        {cert.courses.map((course, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                            <span>{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700/50 mt-auto">
                  {cert.certificateUrl ? (
                    <DocumentActionGroup
                      viewUrl={cert.certificateUrl}
                      downloadUrl={cert.certificateUrl}
                      downloadFilename="MedicaSpace_QC_Internship_Certificate.pdf"
                      viewLabel="View Certificate (PDF)"
                      downloadLabel="Download"
                      size="md"
                    />
                  ) : cert.hasModal ? (
                    <ActionButton
                      label="View Official Certificate"
                      icon={Eye}
                      onClick={() => openCertificateModal(cert)}
                      variant="primary"
                      size="md"
                      fullWidth
                    />
                  ) : (
                    <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                      <span>Verification Pending Completion</span>
                      <span className="text-amber-600 dark:text-amber-400 font-bold">In Progress</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Certificate Modal */}
      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </>
  );
};

export default Certifications;
