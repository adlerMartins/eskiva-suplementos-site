import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2, Building2, Globe } from 'lucide-react';
import { SiteConfig } from '../types';

interface ContactSectionProps {
  config: SiteConfig;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ config }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Dúvida sobre Produtos');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1500);
  };

  return (
    <section id="contato" className="py-20 bg-[#171717] border-b border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF7A00]/15 border border-[#FF7A00]/30 text-[#FF7A00] text-xs font-bold uppercase tracking-wider">
              <Phone className="w-3.5 h-3.5" />
              Central de Atendimento
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Fale com a <span className="text-[#FF7A00]">Eskiva Suplementos</span>
            </h2>

            <p className="text-sm text-zinc-400 leading-relaxed">
              Estamos prontos para atender você, tirar dúvidas sobre nossa linha de produtos, pontos de coleta e suporte oficial.
            </p>

            {/* Contacts Info Cards */}
            <div className="space-y-3 pt-2">
              <a
                href={`tel:${config.phone.replace(/[^0-9]/g, '')}`}
                className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#FF7A00]/50 transition-colors flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#FF7A00]/15 border border-[#FF7A00]/30 flex items-center justify-center text-[#FF7A00] group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase text-zinc-400">Telefone / WhatsApp</div>
                  <div className="text-base font-black text-white group-hover:text-[#FF7A00] transition-colors">{config.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${config.email}`}
                className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#FF7A00]/50 transition-colors flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#FF7A00]/15 border border-[#FF7A00]/30 flex items-center justify-center text-[#FF7A00] group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase text-zinc-400">E-mail de Suporte</div>
                  <div className="text-base font-black text-white group-hover:text-[#FF7A00] transition-colors">{config.email}</div>
                </div>
              </a>

              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FF7A00]/15 border border-[#FF7A00]/30 flex items-center justify-center text-[#FF7A00]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase text-zinc-400">Horário de Funcionamento</div>
                  <div className="text-sm font-bold text-white">{config.supportHours}</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FF7A00]/15 border border-[#FF7A00]/30 flex items-center justify-center text-[#FF7A00]">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold uppercase text-zinc-400">Razão Social & Registro</div>
                  <div className="text-xs font-bold text-white">Eskiva Suplementos LTDA</div>
                  <div className="text-[11px] text-zinc-400 font-mono">CNPJ: {config.cnpj}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/90 border border-zinc-800 shadow-2xl relative">
              <h3 className="text-lg sm:text-xl font-black text-white uppercase mb-2">
                Envie uma Mensagem Direta
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                Preencha o formulário abaixo e nossa equipe responderá em breve no seu e-mail ou WhatsApp.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Mensagem Enviada com Sucesso!</h4>
                  <p className="text-xs text-zinc-300">
                    Recebemos seu contato. Nossa central entrará em contato durante o horário de atendimento.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-lg bg-zinc-800 text-xs font-bold text-white hover:bg-zinc-700"
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase text-zinc-400 block mb-1.5">Seu Nome</label>
                      <input
                        type="text"
                        placeholder="Ex: Carlos Silva"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF7A00]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase text-zinc-400 block mb-1.5">Seu E-mail</label>
                      <input
                        type="email"
                        placeholder="seuemail@exemplo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF7A00]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase text-zinc-400 block mb-1.5">Telefone / WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="(00) 00000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF7A00]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase text-zinc-400 block mb-1.5">Assunto</label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-[#FF7A00]"
                      >
                        <option value="Dúvida sobre Produtos">Dúvida sobre Produtos</option>
                        <option value="Cadastro Oficial">Cadastro Oficial</option>
                        <option value="Pontos de Coleta">Pontos de Coleta</option>
                        <option value="Suporte Geral">Suporte Geral</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase text-zinc-400 block mb-1.5">Sua Mensagem</label>
                    <textarea
                      rows={4}
                      placeholder="Como podemos te ajudar hoje?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#FF7A00]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#FF7A00] text-zinc-950 font-black text-sm uppercase tracking-wider hover:bg-orange-400 transition-colors shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>ENVIAR MENSAGEM</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
