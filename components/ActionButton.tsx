import React from 'react';
import { Eye, Download, FileText, ExternalLink, LucideIcon } from 'lucide-react';

export type ButtonVariant = 'primary' | 'secondary' | 'subtle' | 'amber' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ActionButtonProps {
  label: string;
  icon?: LucideIcon;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  download?: string | boolean;
  target?: string;
  rel?: string;
  onClick?: () => void;
  className?: string;
  showExternalIcon?: boolean;
  title?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  icon: Icon,
  variant = 'primary',
  size = 'md',
  href,
  download,
  target,
  rel,
  onClick,
  className = '',
  showExternalIcon = false,
  title,
  disabled = false,
  fullWidth = false,
}) => {
  // Base classes with clean focus rings, smooth scale effect, and optimal touch targets
  const baseClasses =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 cursor-pointer select-none';

  // Variant styles
  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      'bg-teal-600 hover:bg-teal-700 text-white shadow-md hover:shadow-teal-600/30 border border-transparent',
    secondary:
      'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-600 shadow-sm',
    subtle:
      'bg-teal-50 dark:bg-teal-950/40 hover:bg-teal-100 dark:hover:bg-teal-900/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800/60',
    amber:
      'bg-amber-500 hover:bg-amber-400 text-gray-950 shadow-md hover:shadow-amber-500/20 border border-transparent font-bold',
    outline:
      'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600',
  };

  // Size styles
  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'py-2 px-3 text-xs gap-1.5 min-h-[36px]',
    md: 'py-2.5 px-4 text-xs sm:text-sm gap-2 min-h-[42px]',
    lg: 'py-3.5 px-6 text-sm sm:text-base gap-2.5 min-h-[48px]',
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

  const isExternal = href && (href.startsWith('http') || target === '_blank');
  const defaultTarget = isExternal ? '_blank' : target;
  const defaultRel = isExternal ? 'noopener noreferrer' : rel;

  const content = (
    <>
      {Icon && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} className="shrink-0" />}
      <span className="truncate">{label}</span>
      {showExternalIcon && isExternal && (
        <ExternalLink size={size === 'sm' ? 12 : 14} className="opacity-70 shrink-0 ml-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={defaultTarget}
        rel={defaultRel}
        onClick={onClick}
        className={combinedClasses}
        title={title || label}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      title={title || label}
    >
      {content}
    </button>
  );
};

export interface DocumentActionGroupProps {
  viewUrl?: string;
  downloadUrl?: string;
  downloadFilename?: string;
  onViewClick?: () => void;
  viewLabel?: string;
  downloadLabel?: string;
  variant?: 'teal' | 'amber' | 'neutral';
  size?: ButtonSize;
  className?: string;
  isPdf?: boolean;
}

export const DocumentActionGroup: React.FC<DocumentActionGroupProps> = ({
  viewUrl,
  downloadUrl = viewUrl,
  downloadFilename = 'Document.pdf',
  onViewClick,
  viewLabel = 'View Certificate (PDF)',
  downloadLabel = 'Download',
  variant = 'teal',
  size = 'md',
  className = '',
  isPdf = true,
}) => {
  const Icon = isPdf ? FileText : Eye;

  if (variant === 'amber') {
    return (
      <div className={`inline-flex items-center rounded-xl bg-amber-500 text-gray-950 font-bold shadow-md hover:shadow-amber-500/20 transition-all text-xs sm:text-sm divide-x divide-gray-950/20 overflow-hidden ${className}`}>
        {viewUrl ? (
          <a
            href={viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onViewClick}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 hover:bg-amber-400 transition-colors"
            title={viewLabel}
          >
            <Icon size={16} />
            <span>{viewLabel}</span>
          </a>
        ) : (
          <button
            type="button"
            onClick={onViewClick}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 hover:bg-amber-400 transition-colors"
            title={viewLabel}
          >
            <Icon size={16} />
            <span>{viewLabel}</span>
          </button>
        )}
        {downloadUrl && (
          <a
            href={downloadUrl}
            download={downloadFilename}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 hover:bg-amber-600/20 transition-colors"
            title={`Download ${downloadFilename}`}
          >
            <Download size={16} />
            <span className="hidden sm:inline">{downloadLabel}</span>
          </a>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-col sm:flex-row gap-2.5 w-full ${className}`}>
      {viewUrl ? (
        <ActionButton
          label={viewLabel}
          icon={Icon}
          href={viewUrl}
          target="_blank"
          variant="primary"
          size={size}
          showExternalIcon
          fullWidth
          className="flex-1"
          onClick={onViewClick}
        />
      ) : onViewClick ? (
        <ActionButton
          label={viewLabel}
          icon={Icon}
          onClick={onViewClick}
          variant="primary"
          size={size}
          fullWidth
          className="flex-1"
        />
      ) : null}

      {downloadUrl && (
        <ActionButton
          label={downloadLabel}
          icon={Download}
          href={downloadUrl}
          download={downloadFilename}
          target="_blank"
          variant="secondary"
          size={size}
          fullWidth
          className="sm:w-auto"
          title={`Download ${downloadFilename}`}
        />
      )}
    </div>
  );
};

export default ActionButton;
