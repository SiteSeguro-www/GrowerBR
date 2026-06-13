import React from 'react';
import {ArrowLeft} from 'lucide-react';

export default function TermsComponent({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 py-20 px-6 font-sans">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-green-500 hover:text-green-400 mb-10 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> Voltar ao site
        </button>

        <h1 className="text-4xl font-black text-white mb-8">Termos de Uso e Aviso Legal</h1>

        <div className="space-y-6 text-lg font-light leading-relaxed">
          <p>
            O canal GrowerBr não faz apologia, não incentiva o uso recreativo de substâncias e não promove qualquer atividade ilegal.
            Todas as informações compartilhadas têm base em estudos, curiosidades e liberdade de expressão.
          </p>
          <p>
            O objetivo é a ciência, conhecimento sobre cultivo responsável em contextos legais, históricos e sociais, para fins exclusivamente educativos, informativos e documentais.
          </p>
          <p>
            O canal não promove, incentiva ou glorifica o uso de substâncias controladas.
            Todas as referências à cannabis são tratadas sob o ponto de vista histórico, científico, agrícola ou cultural.
            Redução de danos.
          </p>
          <p>
            As informações aqui apresentadas seguem diretrizes de liberdade de expressão e direito à informação previstos na legislação brasileira.
          </p>
          <p className="text-green-400 font-semibold">
            ✔️ Este conteúdo não infringe as diretrizes da comunidade e é adequado para monetização sob a categoria de conteúdo educacional/documental.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">Termos Gerais</h2>
          <p>
            Ao utilizar este site e adquirir nossos materiais, você concorda com estes termos. O material é fornecido "como está". Não garantimos resultados específicos, pois o cultivo depende de diversos fatores externos.
          </p>
        </div>
      </div>
    </div>
  );
}
