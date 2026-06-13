/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  BookOpen, 
  MessageCircle, 
  Droplet, 
  Sun, 
  ShieldCheck, 
  CreditCard, 
  QrCode, 
  Banknote,
  ArrowRight,
  Star,
  Mail,
  Youtube,
  X,
  Gift
} from 'lucide-react';
import React, { useState, useEffect } from 'react';
import TermsComponent from './components/TermsComponent';

export default function App() {
  const CHECKOUT_LINK = "https://mpago.li/2pMQXbQ";
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [hasShownExitPopup, setHasShownExitPopup] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'terms'>('home');

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownExitPopup) {
        setShowExitPopup(true);
        setHasShownExitPopup(true);
      }
    };

    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (hasShownExitPopup) return;
      const currentScrollY = window.scrollY;
      const scrollDiff = lastScrollY - currentScrollY;
      
      if (scrollDiff > 30 && currentScrollY < 200 && lastScrollY > 100) {
        setShowExitPopup(true);
        setHasShownExitPopup(true);
      }
      lastScrollY = currentScrollY;
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShownExitPopup]);

  if (currentPage === 'terms') {
    return <TermsComponent onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="relative min-h-screen bg-[#050505] text-white font-sans selection:bg-green-500/30 selection:text-white overflow-hidden">
      
      {/* Exit Intent Popup */}
      {showExitPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-[#0A0A0A] border border-blue-500/30 rounded-3xl p-8 md:p-12 max-w-lg w-full relative shadow-[0_0_80px_rgba(59,130,246,0.3)] text-center overflow-hidden"
          >
            {/* Ambient glow inside popup */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-40 bg-gradient-to-b from-blue-500/20 to-transparent pointer-events-none"></div>

            <button 
              onClick={() => setShowExitPopup(false)}
              className="absolute top-4 right-4 p-2 text-zinc-500 hover:text-white transition-colors rounded-full hover:bg-white/10 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="w-20 h-20 mx-auto bg-blue-500/10 border border-blue-500/30 rounded-full flex items-center justify-center mb-6 shadow-inner relative z-10">
              <Gift className="w-10 h-10 text-blue-400" />
            </div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 font-display uppercase text-white leading-tight relative z-10">
              Espere!
            </h2>
            
            <p className="text-lg md:text-xl text-zinc-300 font-light mb-8 relative z-10">
              Não saia de mãos vazias. <br />
              <span className="font-bold text-white font-display">COMPRE AGORA E GANHE PACK COM 5 SEEDS</span> exclusivas de bônus!
            </p>

            <motion.a
              href={CHECKOUT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 0px rgba(59,130,246,0)", "0 0 30px rgba(59,130,246,0.5)", "0 0 0px rgba(59,130,246,0)"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="block w-full px-8 py-5 rounded-[1.5rem] bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-800 text-white font-black text-lg md:text-xl transition-shadow flex items-center justify-center gap-3 font-display uppercase tracking-wider relative z-10"
              onClick={() => setShowExitPopup(false)}
            >
              RESGATAR MINHAS SEEDS
              <ArrowRight className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      )}

      {/* Logo Watermark Background */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
        <img src="/favicon.png" alt="" className="w-[180vw] md:w-[70vw] max-w-none object-contain filter grayscale border-none" />
      </div>

      {/* Ambient Glows */}
      <div className="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-500/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-green-900/20 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col justify-between min-h-screen">
        {/* Navbar Premium */}
        <nav className="fixed top-0 w-full z-50 border-b border-white/[0.05] bg-[#050505]/60 backdrop-blur-3xl">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/favicon.png" alt="GrowerBR Logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/10 shadow-lg shadow-green-500/10" />
              <span className="font-bold tracking-tight text-white/95 font-display text-sm sm:text-lg">GrowerBR</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-4">
              <a 
                href="mailto:growerbrdw@gmail.com?subject=Interesse%20em%20Sementes&body=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20sementes.%20Pode%20me%20ajudar%3F"
                className="px-2 py-1.5 sm:px-6 sm:py-2.5 text-[8px] sm:text-sm font-semibold border border-transparent bg-clip-border rounded-full hover:border-blue-500 transition-all duration-300"
                style={{
                  border: '1px solid transparent',
                  background: 'linear-gradient(#050505, #050505) padding-box, linear-gradient(to right, #3b82f6, #60a5fa, #3b82f6) border-box',
                }}
              >
                SEMENTE
              </a>
              <a 
                href={CHECKOUT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1.5 sm:px-6 sm:py-2.5 text-[8px] sm:text-sm font-semibold bg-white/[0.05] border border-white/10 text-white rounded-full hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
              >
                Consultoria
              </a>
              <a 
                href={CHECKOUT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1.5 sm:px-6 sm:py-2.5 text-[8px] sm:text-sm font-bold bg-green-500 text-black rounded-full hover:bg-green-400 hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all duration-300 whitespace-nowrap"
              >
                Comprar
              </a>
            </div>
          </div>
        </nav>

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="pt-20 pb-16 md:pt-24 md:pb-24 px-6 max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-12 xl:gap-20 relative z-20">
            
             {/* Left Column: Titles */}
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
               className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-[7rem] font-black tracking-tighter mb-6 lg:mb-8 leading-[1.05] md:leading-[0.9] font-display uppercase">
                GUIA RÁPIDO <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-200 via-green-500 to-green-900">
                   CULTIVO INDOOR
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl xl:text-2xl text-zinc-300 max-w-2xl mb-8 lg:mb-12 leading-relaxed font-light tracking-wide text-left">
                Olá, prazer, sou DW. Alguns já devem me conhecer do YouTube; sou grower há mais de 15 anos. <br /><br />
                Neste e-book, reuni todo meu conhecimento com uma linguagem de fácil entendimento e simples para você que é iniciante. Você pode começar a cultivar sua medicina agora mesmo! <br /><br />
                Após a compra, você ganha uma consultoria grátis!
              </p>
              
              <div className="lg:hidden w-full flex justify-center pb-4">
                 <a href="#mobile-checkout" className="w-full max-w-sm px-8 py-4 rounded-full bg-white text-black font-bold text-sm sm:text-base hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-3 font-display uppercase tracking-wider relative overflow-hidden group shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                   <span className="relative z-10 flex items-center gap-3">
                     Garantir Meu E-book <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                   </span>
                 </a>
              </div>
            </motion.div>
...

            {/* Right Column: Checkout Card */}
            <motion.div 
                id="mobile-checkout"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-md lg:max-w-[480px] xl:max-w-[540px] flex-shrink-0 bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-3xl lg:mt-8"
            >
                {/* Top Radiant Line */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>

                <div className="text-center mb-8">
                  <div className="flex flex-col gap-1 text-base sm:text-lg md:text-xl font-medium tracking-tight font-display uppercase leading-tight mx-auto w-fit items-start">
                    <span className="text-zinc-300 whitespace-nowrap">✔️ Pack Com 5 Seeds - R$79,90</span>
                    <span className="text-white whitespace-nowrap">✔️ E-book Completo - R$49,90</span>
                    <span className="text-zinc-200 whitespace-nowrap">✔️ 1 Consultoria - R$69,90</span>
                    <span className="text-white font-bold text-xl sm:text-2xl md:text-3xl mt-2 whitespace-nowrap">TUDO POR R$24,90</span>
                  </div>
                </div>

                <div className="flex flex-col gap-6 items-center bg-[#111] p-6 sm:p-8 rounded-[1.5rem] border border-white/5 mb-8 relative overflow-hidden group transition-all duration-500 hover:border-white/10 shadow-xl">
                  <div className="text-center relative z-10 w-full">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-lg sm:text-xl text-zinc-500 font-light">3x de</span>
                      <span className="text-4xl sm:text-6xl font-black tracking-tighter font-display text-white">R$8<span className="text-2xl sm:text-4xl text-zinc-400">,30</span></span>
                    </div>
                    <p className="text-green-400 mt-2 text-[10px] sm:text-xs font-medium tracking-wide">Ou apenas R$ 24,90 à vista.</p>
                  </div>

                  <div className="w-full flex flex-col gap-3 relative z-10">
                    <a 
                      href={CHECKOUT_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-6 py-4 sm:py-5 bg-gradient-to-r from-green-400 to-green-600 text-black font-black text-sm sm:text-base rounded-2xl hover:scale-[1.02] active:scale-95 hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] transition-all duration-300 flex items-center justify-center gap-2 font-display uppercase tracking-wider"
                    >
                      Comprar Agora
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <p className="text-center text-[9px] sm:text-[10px] text-zinc-500 uppercase font-bold tracking-[0.15em] sm:tracking-[0.2em]">Acesso Imediato</p>
                    <div className="flex items-center justify-center gap-1 mt-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400" />
                      ))}
                      <span className="text-zinc-400 text-[10px] sm:text-xs font-semibold">( 4,9 de 5 )</span>
                    </div>
                  </div>

                  {/* Card internal glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-green-500/0 via-green-500/[0.05] to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                </div>

                {/* Payment Methods Breakdown */}
                <div className="pt-6 sm:pt-8 border-t border-white/5">
                  <h4 className="text-[9px] sm:text-[10px] font-bold text-zinc-500 text-center mb-5 sm:mb-6 uppercase tracking-[0.1em] sm:tracking-[0.15em]">
                    Ambiente 100% Seguro Mercado Pago
                  </h4>
                  
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    <div className="flex flex-col items-center justify-center p-3 sm:p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.05] transition-all duration-300">
                      <QrCode className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 mb-2 sm:mb-3" />
                      <span className="text-[9px] sm:text-[10px] font-bold text-white/90 font-display tracking-wide uppercase">PIX</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-3 sm:p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.05] transition-all duration-300">
                      <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mb-2 sm:mb-3" />
                      <span className="text-[9px] sm:text-[10px] font-bold text-white/90 font-display tracking-wide uppercase">Cartão</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-3 sm:p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.05] transition-all duration-300">
                      <Banknote className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-400 mb-2 sm:mb-3" />
                      <span className="text-[9px] sm:text-[10px] font-bold text-white/90 font-display tracking-wide uppercase">Boleto</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center items-center gap-2 text-zinc-400 text-[9px] sm:text-[10px] bg-white/[0.03] py-2 sm:py-3 px-3 sm:px-5 rounded-full w-fit mx-auto border border-white/5 text-center">
                  <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                  <span className="font-medium tracking-wide">Compra protegida. Acesso por e-mail.</span>
                </div>
            </motion.div>
          </section>

          {/* Bento Grid Features - Premium Style */}
          <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-white font-display">Conhecimento Refinado.</h2>
              <p className="text-zinc-400 font-light text-xl max-w-2xl mx-auto">Um material desenvolvido com excelência, pensando em cada detalhe da jornada do cultivador.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Large Card */}
              <div className="md:col-span-2 bg-white/[0.02] border border-white/[0.08] rounded-[2rem] p-10 hover:bg-white/[0.04] transition-all duration-500 flex flex-col justify-between overflow-hidden relative group shadow-2xl backdrop-blur-md">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                    <Sun className="w-7 h-7 text-green-400" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 font-display tracking-tight text-white/95">Setup de Iluminação</h3>
                  <p className="text-zinc-400 leading-relaxed max-w-lg text-lg font-light">
                    Descubra as especificações exatas de painéis LED, ciclos de luz perfeitos para Vega e Flora, e como maximizar o rendimento energético.
                  </p>
                </div>
                {/* Ambient detail */}
                <div className="absolute -top-32 -right-32 w-96 h-96 bg-green-500/10 rounded-full blur-[80px] group-hover:bg-green-500/20 transition-all duration-700"></div>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.08] rounded-[2rem] p-10 hover:bg-white/[0.04] transition-all duration-500 flex flex-col relative group overflow-hidden shadow-2xl backdrop-blur-md">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                  <Droplet className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display tracking-tight text-white/95">Nutrição Intensa</h3>
                <p className="text-zinc-400 leading-relaxed text-lg font-light flex-grow">
                  Cronogramas de rega e medição exata. O segredo de uma raiz forte revelado.
                </p>
                <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-[60px] group-hover:bg-blue-500/20 transition-all"></div>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.08] rounded-[2rem] p-10 hover:bg-white/[0.04] transition-all duration-500 flex flex-col relative group overflow-hidden shadow-2xl backdrop-blur-md">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                  <CheckCircle2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display tracking-tight text-white/95">Passo a Passo</h3>
                <p className="text-zinc-400 leading-relaxed text-lg font-light flex-grow">
                  Da germinação meticulosa à secagem e cura. Um roteiro sem falhas.
                </p>
              </div>

              {/* Bonus Card */}
              <div className="md:col-span-2 bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-[2rem] p-10 hover:border-green-500/30 transition-all duration-700 flex flex-col sm:flex-row items-center sm:items-start gap-8 relative overflow-hidden shadow-2xl backdrop-blur-xl">
                <div className="flex-1 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6">
                    <MessageCircle className="w-7 h-7 text-green-400" />
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-[10px] md:text-xs text-green-400 uppercase tracking-widest font-bold mb-4">
                    Bônus Premium
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 font-display tracking-tight text-white/95">Consultoria Gratuita</h3>
                  <p className="text-zinc-400 leading-relaxed text-lg font-light">
                    Ao adquirir o e-book hoje, você ganha acesso a uma <strong>consultoria individual</strong>. 
                    Tire suas dúvidas e receba análise personalizada do seu cultivo diretamente por mensagem.
                  </p>
                </div>
              </div>
            </div>
          </section>


        </main>

        {/* Premium Footer */}
        <footer className="pt-20 pb-12 px-6 border-t border-white/[0.05] bg-[#030303] flex flex-col items-center relative z-20">
          <img src="/favicon.png" alt="GrowerBR Logo" className="w-14 h-14 rounded-full mb-8 opacity-30 hover:opacity-100 transition-opacity duration-300 border border-white/10 grayscale hover:grayscale-0" />
          
          <div className="flex items-center justify-center gap-5 mb-12">
            <a 
              href="mailto:growerbrdw@gmail.com" 
              className="w-14 h-14 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center hover:bg-white/[0.08] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
              aria-label="Email GrowerBR"
            >
               <Mail className="w-6 h-6 text-zinc-500 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="https://www.youtube.com/@growerbr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-14 h-14 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center hover:bg-white/[0.08] hover:-translate-y-1 hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 group"
              aria-label="YouTube GrowerBR"
            >
               <Youtube className="w-6 h-6 text-zinc-500 group-hover:text-red-500 transition-colors" />
            </a>
          </div>

          <p className="text-zinc-500 text-sm mb-4 font-display font-medium tracking-wide">
            &copy; {new Date().getFullYear()} GrowerBR. Todos os direitos reservados.
          </p>
          <div className="max-w-lg text-center text-zinc-600 text-[10px] leading-relaxed space-y-2">
            <p>
              O canal GrowerBr não faz apologia, não incentiva o uso recreativo de substâncias e não promove qualquer atividade ilegal.
              As informações contidas neste e-book têm caráter estritamente educacional.
            </p>
            <button 
              onClick={() => setCurrentPage('terms')}
              className="text-green-600 hover:text-green-500 underline uppercase tracking-widest font-bold"
            >
              Termos de Uso
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

