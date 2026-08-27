import React from 'react';

interface EskivaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon-only' | 'light' | 'white';
}

export const EskivaLogo: React.FC<EskivaLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7 text-sm',
    md: 'w-9 h-9 text-base',
    lg: 'w-12 h-12 text-xl',
    xl: 'w-16 h-16 text-3xl',
  };

  const textSizes = {
    sm: 'text-lg tracking-wider',
    md: 'text-2xl tracking-wider',
    lg: 'text-3xl tracking-widest',
    xl: 'text-4xl tracking-widest',
  };

  const subTextSizes = {
    sm: 'text-[9px] tracking-[0.25em]',
    md: 'text-[11px] tracking-[0.3em]',
    lg: 'text-[13px] tracking-[0.35em]',
    xl: 'text-[15px] tracking-[0.4em]',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none font-sans ${className}`}>
      {/* Iconic Orange K Badge with diagonal slice */}
      <div
        className={`${iconSizes[size]} relative rounded-lg bg-[#FF7A00] flex items-center justify-center font-black text-white shadow-lg shadow-orange-500/20 transform -skew-x-6 overflow-hidden flex-shrink-0`}
      >
        <span className="transform skew-x-6 tracking-tighter">K</span>
        <div className="absolute -top-3 -right-3 w-6 h-6 bg-white/20 transform rotate-45" />
      </div>

      {variant !== 'icon-only' && (
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline">
            <span
              className={`font-black uppercase ${
                variant === 'white' ? 'text-white' : 'text-white'
              } ${textSizes[size]}`}
            >
              ES<span className="text-[#FF7A00]">K</span>IVA
            </span>
          </div>
          <span
            className={`font-bold uppercase text-zinc-400 ${subTextSizes[size]}`}
          >
            SUPLEMENTOS
          </span>
        </div>
      )}
    </div>
  );
};
