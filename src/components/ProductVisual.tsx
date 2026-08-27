import React from 'react';

interface ProductVisualProps {
  type: 'creatina' | 'whey-chocolate' | 'whey-frutas' | 'multivitaminico' | 'pre-treino' | 'coqueteleira' | 'luvas-boxe';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const ProductVisual: React.FC<ProductVisualProps> = ({ type, className = '', size = 'md' }) => {
  const heightClass = size === 'sm' ? 'h-36' : size === 'lg' ? 'h-72' : 'h-52';

  if (type === 'creatina') {
    return (
      <div className={`relative flex items-center justify-center ${heightClass} ${className}`}>
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-orange-500/20 to-transparent blur-xl rounded-full scale-90" />
        
        {/* Bottle SVG */}
        <svg viewBox="0 0 200 240" className="h-full w-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Jar Body */}
          <rect x="35" y="60" width="130" height="150" rx="14" fill="#F8F9FA" stroke="#E5E7EB" strokeWidth="2" />
          {/* Subtle reflection on jar */}
          <path d="M45 65 H65 V200 H45 Z" fill="white" opacity="0.6" />
          <path d="M145 65 H155 V200 H145 Z" fill="#E5E7EB" opacity="0.5" />
          
          {/* Jar Lid */}
          <rect x="42" y="32" width="116" height="30" rx="6" fill="#171717" stroke="#333333" strokeWidth="1.5" />
          <line x1="50" y1="42" x2="150" y2="42" stroke="#444444" strokeWidth="1" strokeDasharray="4 2" />
          <line x1="50" y1="48" x2="150" y2="48" stroke="#444444" strokeWidth="1" strokeDasharray="4 2" />

          {/* Label area */}
          <rect x="40" y="80" width="120" height="115" fill="#FFFFFF" rx="4" />
          
          {/* Brand Logo Box */}
          <rect x="85" y="88" width="30" height="18" rx="3" fill="#FF7A00" />
          <text x="100" y="101" fill="#FFFFFF" fontWeight="900" fontSize="13" textAnchor="middle" fontFamily="sans-serif">K</text>
          <text x="100" y="113" fill="#111111" fontWeight="900" fontSize="9" letterSpacing="2" textAnchor="middle" fontFamily="sans-serif">ESKIVA</text>
          
          {/* Product Title */}
          <text x="100" y="133" fill="#171717" fontWeight="900" fontSize="13" letterSpacing="1.5" textAnchor="middle" fontFamily="sans-serif">CREATINA</text>
          <text x="100" y="143" fill="#666666" fontWeight="700" fontSize="6.5" letterSpacing="1" textAnchor="middle" fontFamily="sans-serif">MONOHIDRATADA</text>
          
          {/* 100% Pura Badge */}
          <rect x="68" y="150" width="64" height="13" rx="6.5" fill="#FF7A00" />
          <text x="100" y="159.5" fill="#FFFFFF" fontWeight="800" fontSize="7" letterSpacing="0.5" textAnchor="middle" fontFamily="sans-serif">100% PURA</text>
          
          {/* Weight */}
          <text x="100" y="180" fill="#111111" fontWeight="800" fontSize="10" textAnchor="middle" fontFamily="sans-serif">150g / 300g</text>
        </svg>
      </div>
    );
  }

  if (type === 'whey-chocolate' || type === 'whey-frutas') {
    const isChocolate = type === 'whey-chocolate';
    const flavorColor = isChocolate ? '#78350F' : '#EA580C';
    const flavorText = isChocolate ? 'CHOCOLATE' : 'FRUTAS TROPICAIS';

    return (
      <div className={`relative flex items-center justify-center ${heightClass} ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-amber-500/15 to-transparent blur-xl rounded-full scale-90" />
        <svg viewBox="0 0 200 270" className="h-full w-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Big Jar Body */}
          <path d="M30 65 Q25 120 28 230 Q28 245 45 245 H155 Q172 245 172 230 Q175 120 170 65 Z" fill="#F8F9FA" stroke="#E5E7EB" strokeWidth="2" />
          <path d="M35 70 Q32 120 34 235 H48 Q46 120 48 70 Z" fill="white" opacity="0.7" />

          {/* Lid */}
          <rect x="42" y="25" width="116" height="42" rx="8" fill="#171717" stroke="#333333" strokeWidth="1.5" />
          <line x1="50" y1="36" x2="150" y2="36" stroke="#444444" strokeWidth="1.5" />
          <line x1="50" y1="44" x2="150" y2="44" stroke="#444444" strokeWidth="1.5" />
          <line x1="50" y1="52" x2="150" y2="52" stroke="#444444" strokeWidth="1.5" />

          {/* Label Background with diagonal Eskiva cuts */}
          <path d="M30 85 H170 V225 H30 Z" fill="#FFFFFF" />
          <path d="M130 85 L170 85 V150 L110 85 Z" fill="#FF7A00" opacity="0.9" />

          {/* Logo */}
          <rect x="48" y="93" width="22" height="15" rx="3" fill="#FF7A00" />
          <text x="59" y="104" fill="#FFFFFF" fontWeight="900" fontSize="11" textAnchor="middle" fontFamily="sans-serif">K</text>
          <text x="96" y="104" fill="#111111" fontWeight="900" fontSize="10" letterSpacing="1" textAnchor="middle" fontFamily="sans-serif">ESKIVA</text>
          
          {/* Product Name */}
          <text x="100" y="128" fill="#FF7A00" fontWeight="900" fontSize="16" letterSpacing="1" textAnchor="middle" fontFamily="sans-serif">WHEY</text>
          <text x="100" y="146" fill="#111111" fontWeight="900" fontSize="16" letterSpacing="1" textAnchor="middle" fontFamily="sans-serif">PROTEIN</text>
          <text x="100" y="157" fill="#666666" fontWeight="700" fontSize="7" letterSpacing="1.5" textAnchor="middle" fontFamily="sans-serif">CONCENTRADO</text>

          {/* Weight Highlight */}
          <text x="65" y="182" fill="#111111" fontWeight="900" fontSize="16" fontFamily="sans-serif">900g</text>
          <text x="65" y="191" fill="#777777" fontWeight="600" fontSize="6" fontFamily="sans-serif">SUPLEMENTO EM PÓ</text>

          {/* Flavor Pill */}
          <rect x="45" y="200" width="110" height="16" rx="4" fill={flavorColor} />
          <text x="100" y="211.5" fill="#FFFFFF" fontWeight="800" fontSize="8" letterSpacing="0.5" textAnchor="middle" fontFamily="sans-serif">{flavorText}</text>
        </svg>
      </div>
    );
  }

  if (type === 'pre-treino') {
    return (
      <div className={`relative flex items-center justify-center ${heightClass} ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/25 via-red-600/15 to-transparent blur-xl rounded-full scale-90" />
        <svg viewBox="0 0 200 240" className="h-full w-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Black Jar Body */}
          <rect x="35" y="60" width="130" height="150" rx="14" fill="#111111" stroke="#262626" strokeWidth="2" />
          
          {/* Carbon/Geometric pattern texture */}
          <path d="M40 85 L160 85 L145 190 L40 190 Z" fill="#171717" />
          <path d="M45 65 H60 V200 H45 Z" fill="#333333" opacity="0.3" />

          {/* Jar Lid */}
          <rect x="42" y="32" width="116" height="30" rx="6" fill="#0A0A0A" stroke="#FF7A00" strokeWidth="1.5" />
          <line x1="50" y1="42" x2="150" y2="42" stroke="#FF7A00" strokeWidth="1" strokeOpacity="0.6" strokeDasharray="3 3" />

          {/* Brand Logo Box */}
          <rect x="85" y="90" width="30" height="18" rx="3" fill="#FF7A00" />
          <text x="100" y="103" fill="#FFFFFF" fontWeight="900" fontSize="13" textAnchor="middle" fontFamily="sans-serif">K</text>
          <text x="100" y="115" fill="#FFFFFF" fontWeight="900" fontSize="9" letterSpacing="2" textAnchor="middle" fontFamily="sans-serif">ESKIVA</text>

          {/* Product Title */}
          <text x="100" y="137" fill="#FFFFFF" fontWeight="900" fontSize="14" letterSpacing="1.5" textAnchor="middle" fontFamily="sans-serif">PRÉ-TREINO</text>
          <text x="100" y="147" fill="#FF7A00" fontWeight="700" fontSize="7" letterSpacing="1.5" textAnchor="middle" fontFamily="sans-serif">PRE WORKOUT • 100% PURA</text>

          {/* Badge */}
          <rect x="68" y="155" width="64" height="13" rx="6.5" fill="#FF7A00" />
          <text x="100" y="164.5" fill="#FFFFFF" fontWeight="800" fontSize="7" letterSpacing="0.5" textAnchor="middle" fontFamily="sans-serif">ENERGIA & FOCO</text>

          {/* Weight */}
          <text x="100" y="185" fill="#EEEEEE" fontWeight="800" fontSize="11" textAnchor="middle" fontFamily="sans-serif">150g</text>
        </svg>
      </div>
    );
  }

  if (type === 'multivitaminico') {
    return (
      <div className={`relative flex items-center justify-center ${heightClass} ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/15 via-orange-500/20 to-transparent blur-xl rounded-full scale-90" />
        <svg viewBox="0 0 200 250" className="h-full w-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Pill Bottle Body */}
          <rect x="45" y="70" width="110" height="145" rx="16" fill="#F8F9FA" stroke="#E5E7EB" strokeWidth="2" />
          
          {/* Bottle Neck and Cap */}
          <rect x="60" y="48" width="80" height="24" rx="4" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
          <rect x="52" y="24" width="96" height="26" rx="5" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2" />
          <line x1="58" y1="32" x2="142" y2="32" stroke="#E5E7EB" strokeWidth="1.5" />
          <line x1="58" y1="40" x2="142" y2="40" stroke="#E5E7EB" strokeWidth="1.5" />

          {/* White label with Big Orange K */}
          <rect x="47" y="90" width="106" height="110" fill="#FFFFFF" />
          
          {/* Orange K background watermark */}
          <path d="M115 105 H145 L130 140 L148 185 H125 L115 155 V185 H98 V105 H115 Z" fill="#FF7A00" opacity="0.85" />

          {/* Logo */}
          <rect x="55" y="96" width="18" height="12" rx="2" fill="#FF7A00" />
          <text x="64" y="105" fill="#FFFFFF" fontWeight="900" fontSize="9" textAnchor="middle" fontFamily="sans-serif">K</text>
          <text x="96" y="105" fill="#111111" fontWeight="900" fontSize="9" letterSpacing="1" textAnchor="middle" fontFamily="sans-serif">ESKIVA</text>

          {/* Text */}
          <text x="55" y="128" fill="#111111" fontWeight="900" fontSize="13" letterSpacing="1" fontFamily="sans-serif">MULTI</text>
          <text x="55" y="140" fill="#4B5563" fontWeight="700" fontSize="7" letterSpacing="2" fontFamily="sans-serif">VITAMÍNICO</text>

          {/* Badge 60 caps */}
          <rect x="52" y="168" width="55" height="16" rx="3" fill="#FF7A00" />
          <text x="79" y="179" fill="#FFFFFF" fontWeight="800" fontSize="7.5" textAnchor="middle" fontFamily="sans-serif">60 CÁPSULAS</text>
        </svg>
      </div>
    );
  }

  if (type === 'coqueteleira') {
    return (
      <div className={`relative flex items-center justify-center ${heightClass} ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-red-500/10 to-transparent blur-xl rounded-full scale-90" />
        <svg viewBox="0 0 200 270" className="h-full w-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shaker cup conical */}
          <path d="M50 80 L62 240 Q63 248 75 248 H125 Q137 248 138 240 L150 80 Z" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="2" />
          
          {/* Liquid level / measurement markings */}
          <line x1="72" y1="120" x2="85" y2="120" stroke="#9CA3AF" strokeWidth="1.5" />
          <text x="92" y="123" fill="#9CA3AF" fontSize="6" fontFamily="sans-serif">500ml</text>
          <line x1="75" y1="150" x2="88" y2="150" stroke="#9CA3AF" strokeWidth="1.5" />
          <text x="95" y="153" fill="#9CA3AF" fontSize="6" fontFamily="sans-serif">400ml</text>
          <line x1="78" y1="180" x2="91" y2="180" stroke="#9CA3AF" strokeWidth="1.5" />
          <text x="98" y="183" fill="#9CA3AF" fontSize="6" fontFamily="sans-serif">300ml</text>

          {/* Eskiva Logo on Shaker */}
          <rect x="88" y="125" width="24" height="15" rx="3" fill="#FF7A00" />
          <text x="100" y="136" fill="#FFFFFF" fontWeight="900" fontSize="11" textAnchor="middle" fontFamily="sans-serif">K</text>
          <text x="100" y="148" fill="#111111" fontWeight="900" fontSize="8" letterSpacing="1" textAnchor="middle" fontFamily="sans-serif">ESKIVA</text>
          
          {/* Shaker Lid (Red/Orange) */}
          <path d="M42 65 Q42 55 55 55 H145 Q158 55 158 65 L152 82 H48 Z" fill="#DC2626" stroke="#B91C1C" strokeWidth="1.5" />
          {/* Flip Spout Cap */}
          <rect x="62" y="28" width="30" height="28" rx="6" fill="#FFFFFF" stroke="#DC2626" strokeWidth="2" />
          <path d="M85 30 Q110 25 115 48 H95 Z" fill="#DC2626" />
        </svg>
      </div>
    );
  }

  // luvas-boxe
  return (
    <div className={`relative flex items-center justify-center ${heightClass} ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/25 via-red-600/15 to-transparent blur-xl rounded-full scale-90" />
      <svg viewBox="0 0 240 240" className="h-full w-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left Glove (Black) */}
        <g transform="translate(10, 20)">
          {/* Main glove padding */}
          <path d="M40 30 C20 40 15 70 20 110 C25 140 40 150 55 155 L75 155 C90 150 95 130 95 100 C95 50 75 25 40 30 Z" fill="#171717" stroke="#333333" strokeWidth="2" />
          {/* Thumb */}
          <path d="M78 80 C95 85 105 105 95 125 C85 135 75 130 72 120 Z" fill="#1F2937" stroke="#374151" strokeWidth="1.5" />
          {/* Wrist Cuff */}
          <rect x="35" y="150" width="55" height="40" rx="4" fill="#111111" stroke="#333333" strokeWidth="1.5" />
          <rect x="42" y="160" width="40" height="20" rx="3" fill="#FF7A00" />
          <text x="62" y="174" fill="#FFFFFF" fontWeight="900" fontSize="12" textAnchor="middle" fontFamily="sans-serif">K</text>
          {/* Eskiva text on glove */}
          <text x="55" y="95" fill="#FFFFFF" fontWeight="900" fontSize="11" letterSpacing="1" textAnchor="middle" fontFamily="sans-serif">ESKIVA</text>
        </g>

        {/* Right Glove (White with orange accents) */}
        <g transform="translate(110, 20)">
          {/* Main glove padding */}
          <path d="M40 30 C20 40 15 70 20 110 C25 140 40 150 55 155 L75 155 C90 150 95 130 95 100 C95 50 75 25 40 30 Z" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="2" />
          {/* Thumb */}
          <path d="M78 80 C95 85 105 105 95 125 C85 135 75 130 72 120 Z" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="1.5" />
          {/* Wrist Cuff */}
          <rect x="35" y="150" width="55" height="40" rx="4" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
          <rect x="42" y="160" width="40" height="20" rx="3" fill="#FF7A00" />
          <text x="62" y="174" fill="#FFFFFF" fontWeight="900" fontSize="12" textAnchor="middle" fontFamily="sans-serif">K</text>
          {/* Eskiva text on glove */}
          <text x="55" y="95" fill="#111111" fontWeight="900" fontSize="11" letterSpacing="1" textAnchor="middle" fontFamily="sans-serif">ESKIVA</text>
        </g>
      </svg>
    </div>
  );
};
