import React, { useState } from 'react';
import { Settings, RefreshCw, Check, X, Phone, Mail, Link as LinkIcon, Building2, MessageSquare } from 'lucide-react';
import { SiteConfig } from '../types';

interface CustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: SiteConfig;
  onSave: (newConfig: SiteConfig) => void;
  onReset: () => void;
}

export const CustomizerModal: React.FC<CustomizerModalProps> = ({
  isOpen,
  onClose,
  config,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<SiteConfig>(config);
  const [saved, setSaved] = useState(false);

  if (!isOpen) return null;

  const handleChange = (field: keyof SiteConfig, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-zinc-200 font-sans">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#FF7A00]/20 border border-[#FF7A00]/40 flex items-center justify-center text-[#FF7A00]">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Painel de Edição Rápida (CMS / Customizer)</h3>
              <p className="text-xs text-zinc-400">Edite dados cadastrais, links de cadastro oficial, telefone e redes em tempo real</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-6 overflow-y-auto max-h-[calc(90vh-140px)] space-y-5">
          <div className="p-3.5 rounded-xl bg-orange-950/30 border border-[#FF7A00]/30 text-xs text-zinc-300 flex items-start gap-2.5">
            <LinkIcon className="w-4 h-4 text-[#FF7A00] flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Link Oficial de Cadastro:</strong> Todas as chamadas de ação (CTAs) em botões, cabeçalho e rodapé utilizam centralizadamente esta configuração.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Brand Name */}
            <div>
              <label className="text-xs font-bold uppercase text-zinc-400 block mb-1.5">Nome da Marca</label>
              <input
                type="text"
                value={formData.brandName}
                onChange={(e) => handleChange('brandName', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#FF7A00]"
                required
              />
            </div>

            {/* Official Registration Link */}
            <div>
              <label className="text-xs font-bold uppercase text-[#FF7A00] block mb-1.5">
                Link de Cadastro Oficial (Eskiva Link)
              </label>
              <input
                type="url"
                value={formData.officialRegisterUrl}
                onChange={(e) => handleChange('officialRegisterUrl', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-[#FF7A00]/50 text-sm text-white focus:outline-none focus:border-[#FF7A00]"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-xs font-bold uppercase text-zinc-400 block mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#FF7A00]" /> Telefone / Central
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#FF7A00]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-xs font-bold uppercase text-zinc-400 block mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#FF7A00]" /> E-mail Oficial
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#FF7A00]"
              />
            </div>

            {/* Support Hours */}
            <div>
              <label className="text-xs font-bold uppercase text-zinc-400 block mb-1.5">Horário de Atendimento</label>
              <input
                type="text"
                value={formData.supportHours}
                onChange={(e) => handleChange('supportHours', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#FF7A00]"
              />
            </div>

            {/* CNPJ */}
            <div>
              <label className="text-xs font-bold uppercase text-zinc-400 block mb-1.5 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#FF7A00]" /> CNPJ da Empresa
              </label>
              <input
                type="text"
                value={formData.cnpj}
                onChange={(e) => handleChange('cnpj', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#FF7A00]"
              />
            </div>

            {/* Instagram URL */}
            <div>
              <label className="text-xs font-bold uppercase text-zinc-400 block mb-1.5">Instagram Oficial URL</label>
              <input
                type="url"
                value={formData.instagramUrl}
                onChange={(e) => handleChange('instagramUrl', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#FF7A00]"
              />
            </div>

            {/* YouTube URL */}
            <div>
              <label className="text-xs font-bold uppercase text-zinc-400 block mb-1.5">YouTube Oficial URL</label>
              <input
                type="url"
                value={formData.youtubeUrl}
                onChange={(e) => handleChange('youtubeUrl', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#FF7A00]"
              />
            </div>

            {/* TikTok URL */}
            <div className="md:col-span-2">
              <label className="text-xs font-bold uppercase text-zinc-400 block mb-1.5">TikTok Oficial URL</label>
              <input
                type="url"
                value={formData.tiktokUrl}
                onChange={(e) => handleChange('tiktokUrl', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#FF7A00]"
              />
            </div>

            {/* Slogan */}
            <div className="md:col-span-2">
              <label className="text-xs font-bold uppercase text-zinc-400 block mb-1.5">Slogan Institucional</label>
              <textarea
                rows={2}
                value={formData.slogan}
                onChange={(e) => handleChange('slogan', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#FF7A00]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
            <button
              type="button"
              onClick={onReset}
              className="px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors border border-zinc-800"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Restaurar Padrões do PDF
            </button>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-semibold transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-[#FF7A00] text-zinc-950 text-xs font-bold hover:bg-orange-400 flex items-center gap-1.5 transition-colors shadow-lg shadow-orange-500/20"
              >
                {saved ? <Check className="w-4 h-4" /> : null}
                {saved ? 'Salvo!' : 'Salvar Alterações'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
