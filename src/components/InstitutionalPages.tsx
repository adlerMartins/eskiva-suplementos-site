import React from 'react';
import { ArrowLeft, Shield, FileText, Cookie, Building2, CheckCircle2 } from 'lucide-react';
import { SiteConfig } from '../types';

interface InstitutionalProps {
  config: SiteConfig;
  onBack: () => void;
  onNavigateToProducts: () => void;
}

export const PrivacyPage: React.FC<InstitutionalProps> = ({ config, onBack }) => {
  return (
    <div className="bg-[#111111] text-zinc-200 min-h-screen py-10 border-b border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <button onClick={onBack} className="text-xs text-zinc-400 hover:text-white flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Voltar ao Início
        </button>

        <div className="p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 space-y-6 text-sm text-zinc-300 leading-relaxed">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF7A00]/20 flex items-center justify-center text-[#FF7A00]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-white uppercase">Política de Privacidade</h1>
              <p className="text-xs text-zinc-400">Eskiva Suplementos LTDA • CNPJ: {config.cnpj}</p>
            </div>
          </div>

          <p>
            A <strong>Eskiva Suplementos LTDA</strong> preza pela transparência, privacidade e proteção dos dados pessoais de todos os visitantes, clientes e parceiros em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
          </p>

          <h2 className="text-base font-bold text-white uppercase">1. Coleta de Informações</h2>
          <p>
            Coletamos apenas dados estritamente necessários fornecidos voluntariamente através dos nossos formulários de contato (nome, e-mail, telefone) para prestação de suporte e direcionamento ao portal de cadastro oficial ({config.officialRegisterUrl}).
          </p>

          <h2 className="text-base font-bold text-white uppercase">2. Uso das Informações</h2>
          <p>
            As informações fornecidas não são comercializadas, alugadas ou compartilhadas com terceiros para fins de spam. São utilizadas exclusivamente para responder às solicitações dos usuários e prestar atendimento ao cliente.
          </p>

          <h2 className="text-base font-bold text-white uppercase">3. Cookies e Tecnologias de Navegação</h2>
          <p>
            Utilizamos cookies técnicos essenciais e analíticos anônimos para garantir a velocidade e a correta renderização do site nos dispositivos móveis e desktops, e para mensuração de tráfego conforme descrito em nossa Política de Cookies.
          </p>

          <h2 className="text-base font-bold text-white uppercase">4. Seus Direitos (LGPD)</h2>
          <p>
            Você tem direito a confirmar a existência de tratamento, acessar seus dados, corrigir dados incompletos ou solicitar a eliminação dos dados coletados mediante simples solicitação.
          </p>

          <h2 className="text-base font-bold text-white uppercase">5. Contato do Encarregado de Dados</h2>
          <p>
            Para qualquer esclarecimento ou exercício de seus direitos, envie um e-mail para <strong className="text-white">{config.email}</strong> ou ligue/mande mensagem para <strong className="text-white">{config.phone}</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export const TermsPage: React.FC<InstitutionalProps> = ({ config, onBack }) => {
  return (
    <div className="bg-[#111111] text-zinc-200 min-h-screen py-10 border-b border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <button onClick={onBack} className="text-xs text-zinc-400 hover:text-white flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Voltar ao Início
        </button>

        <div className="p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 space-y-6 text-sm text-zinc-300 leading-relaxed">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF7A00]/20 flex items-center justify-center text-[#FF7A00]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-white uppercase">Termos de Uso</h1>
              <p className="text-xs text-zinc-400">Eskiva Suplementos LTDA • CNPJ: {config.cnpj}</p>
            </div>
          </div>

          <p>
            Bem-vindo ao site institucional da <strong>Eskiva Suplementos LTDA</strong>. Ao navegar por este portal, você concorda com as diretrizes e termos descritos abaixo.
          </p>

          <h2 className="text-base font-bold text-white uppercase">1. Informações Institucionais e Educativas</h2>
          <p>
            O conteúdo disponibilizado neste site possui caráter informativo e educativo a respeito de nutrição esportiva e suplementação. Nossos suplementos alimentares destinam-se a complementar a dieta de indivíduos saudáveis e não substituem uma alimentação equilibrada ou orientação médica/nutricional.
          </p>

          <h2 className="text-base font-bold text-white uppercase">2. Propriedade Intelectual</h2>
          <p>
            A marca Eskiva Suplementos, logotipo, textos, fotos e elementos visuais são de titularidade exclusiva da Eskiva Suplementos LTDA. É proibida a reprodução ou uso não autorizado.
          </p>

          <h2 className="text-base font-bold text-white uppercase">3. Canal Oficial de Cadastro</h2>
          <p>
            O cadastro oficial deve ser realizado exclusivamente pelo endereço oficial <span className="text-[#FF7A00] font-mono">{config.officialRegisterUrl}</span>. Não nos responsabilizamos por links externos não homologados pela empresa.
          </p>

          <h2 className="text-base font-bold text-white uppercase">4. Atendimento e Suporte</h2>
          <p>
            Em caso de dúvidas sobre pedidos, produtos ou parcerias, nosso canal de atendimento está disponível no e-mail <strong className="text-white">{config.email}</strong> e telefone <strong className="text-white">{config.phone}</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export const CookiesPage: React.FC<InstitutionalProps> = ({ config, onBack }) => {
  return (
    <div className="bg-[#111111] text-zinc-200 min-h-screen py-10 border-b border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <button onClick={onBack} className="text-xs text-zinc-400 hover:text-white flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Voltar ao Início
        </button>

        <div className="p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 space-y-6 text-sm text-zinc-300 leading-relaxed">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF7A00]/20 flex items-center justify-center text-[#FF7A00]">
              <Cookie className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-white uppercase">Política de Cookies</h1>
              <p className="text-xs text-zinc-400">Eskiva Suplementos LTDA • CNPJ: {config.cnpj}</p>
            </div>
          </div>

          <p>
            Esta Política de Cookies explica como a <strong>Eskiva Suplementos LTDA</strong> utiliza cookies e tecnologias similares para reconhecê-lo quando você visita nosso site ({config.websiteDomain}).
          </p>

          <h2 className="text-base font-bold text-white uppercase">1. O que são Cookies?</h2>
          <p>
            Cookies são pequenos arquivos de texto armazenados no seu navegador para registrar preferências de navegação, garantir a estabilidade do site e permitir análises estatísticas anônimas de visitação.
          </p>

          <h2 className="text-base font-bold text-white uppercase">2. Tipos de Cookies que Utilizamos</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico e segurança da plataforma (ex: navegação entre páginas e persistência de preferências de consentimento).
            </li>
            <li>
              <strong>Cookies Analíticos:</strong> Coletam dados estatísticos agregados e anônimos sobre o uso do site (tempo de permanência, páginas mais visitadas) para otimização da experiência e melhoria do desempenho técnico.
            </li>
          </ul>

          <h2 className="text-base font-bold text-white uppercase">3. Como Gerenciar ou Desativar Cookies</h2>
          <p>
            Você pode a qualquer momento alterar as preferências de cookies através das configurações do seu navegador (Google Chrome, Firefox, Safari, Edge). A desativação de cookies essenciais pode limitar algumas funcionalidades do site.
          </p>

          <h2 className="text-base font-bold text-white uppercase">4. Dúvidas</h2>
          <p>
            Para maiores esclarecimentos sobre nossa utilização de cookies, entre em contato via <strong className="text-white">{config.email}</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};
