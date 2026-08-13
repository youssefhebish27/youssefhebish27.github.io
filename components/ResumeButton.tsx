import React from 'react';
import { Eye, Download } from 'lucide-react';
import { RESUME_LINK } from '../constants';

interface ResumeButtonProps {
  variant?: 'hero' | 'navbar' | 'compact' | 'about';
  className?: string;
  onActionClick?: () => void;
}

export const ResumeButton: React.FC<ResumeButtonProps> = ({ 
  variant = 'hero', 
  className = '',
  onActionClick
}) => {
  if (variant === 'navbar' || variant === 'compact') {
    return (
      <div className={`inline-flex items-center rounded-xl bg-amber-500 hover:bg-amber-400 text-gray-950 font-bold shadow-md hover:shadow-amber-500/20 transition-all text-xs divide-x divide-gray-950/20 overflow-hidden ${className}`}>
        <a
          href={RESUME_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onActionClick}
          className="inline-flex items-center gap-1.5 px-3 py-2 hover:bg-amber-400/80 transition-colors"
          title="View Resume in Browser"
        >
          <Eye size={14} />
          <span>Resume</span>
        </a>
        <a
          href={RESUME_LINK}
          download="Youssef_Hebish_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onActionClick}
          className="p-2 hover:bg-amber-600/30 transition-colors"
          title="Download Resume PDF"
        >
          <Download size={14} />
        </a>
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className={`inline-flex items-center rounded-full bg-amber-500 text-gray-950 font-bold shadow-xl hover:shadow-amber-500/30 transition-all text-sm sm:text-base divide-x divide-gray-950/20 overflow-hidden ${className}`}>
        <a
          href={RESUME_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onActionClick}
          className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 hover:bg-amber-400 transition-colors"
          title="View Resume in Browser"
        >
          <Eye size={18} />
          <span>View Resume</span>
        </a>
        <a
          href={RESUME_LINK}
          download="Youssef_Hebish_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onActionClick}
          className="inline-flex items-center gap-1.5 px-4 py-3.5 hover:bg-amber-600/20 transition-colors"
          title="Download Resume PDF"
        >
          <Download size={18} />
          <span>PDF</span>
        </a>
      </div>
    );
  }

  // 'about' variant
  return (
    <div className={`inline-flex items-center rounded-xl bg-amber-500 text-gray-950 font-bold shadow-md hover:shadow-amber-500/20 transition-all text-sm divide-x divide-gray-950/20 overflow-hidden ${className}`}>
      <a
        href={RESUME_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onActionClick}
        className="inline-flex items-center gap-2 px-4 py-3 hover:bg-amber-400 transition-colors"
        title="View Resume in Browser"
      >
        <Eye size={18} />
        <span>View Resume</span>
      </a>
      <a
        href={RESUME_LINK}
        download="Youssef_Hebish_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onActionClick}
        className="inline-flex items-center gap-1.5 px-3.5 py-3 hover:bg-amber-600/20 transition-colors"
        title="Download Resume PDF"
      >
        <Download size={18} />
        <span>Download</span>
      </a>
    </div>
  );
};

export default ResumeButton;
