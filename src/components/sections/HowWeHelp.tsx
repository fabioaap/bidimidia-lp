
import React from 'react';
import { Search, Target, CheckCircle, BarChart3 } from 'lucide-react';

const helpSteps = [
  {
    title: "Diagnóstico",
    description: "Analisamos profundamente seu negócio para entender desafios e oportunidades.",
    icon: Search
  },
  {
    title: "Estratégia",
    description: "Elaboramos um plano personalizado baseado nos objetivos da sua empresa.",
    icon: Target
  },
  {
    title: "Implementação",
    description: "Acompanhamos a execução do plano, garantindo a correta aplicação das estratégias.",
    icon: CheckCircle
  },
  {
    title: "Crescimento",
    description: "Monitoramos resultados e ajustamos a estratégia para garantir o crescimento sustentável.",
    icon: BarChart3
  }
];

export const HowWeHelp = () => {
  return (
    <section className="items-stretch flex w-full flex-col overflow-hidden justify-center bg-[#224CFF] px-16 py-28 max-md:max-w-full max-md:px-5 max-md:py-[100px]" id="how-we-help">
      <div className="self-center w-[768px] max-w-full text-white text-center">
        <h2 className="text-white text-5xl font-bold leading-[1.2] max-md:max-w-full max-md:text-[40px]">
          Como ajudamos
        </h2>
        <p className="text-white text-lg font-normal leading-[27px] mt-6 max-md:max-w-full">
          Oferecemos soluções personalizadas para ajudar sua empresa a superar desafios e alcançar resultados excepcionais em diferentes áreas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 mt-20 border border-white/30 rounded-xl overflow-hidden">
        {helpSteps.map((step, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center text-center p-8 text-white ${
              index < helpSteps.length - 1 ? "border-r border-white/30 md:after:content-[''] md:after:absolute md:after:top-1/2 md:after:-right-4 md:after:transform md:after:-translate-y-1/2 md:after:w-8 md:after:h-8 md:after:bg-[#FF5521] md:after:rounded-full md:after:z-10 md:after:flex md:after:items-center md:after:justify-center" : ""
            } ${
              index > 0 ? "border-t md:border-t-0 border-white/30" : ""
            }`}
          >
            <div className="flex justify-center items-center w-16 h-16 mb-6">
              {React.createElement(step.icon, { size: 40, className: "text-white" })}
            </div>
            <h3 className="text-white text-2xl font-bold mb-4">{step.title}</h3>
            <p className="text-white">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-white text-5xl font-bold leading-[1.2] max-md:max-w-full max-md:text-[40px]">
          Call to action that excites the visitor to try your product
        </h2>
        <p className="text-white text-lg font-normal mt-6 max-w-[768px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </p>
        <button className="mt-10 bg-[#FF5521] text-white py-4 px-8 rounded-lg flex items-center gap-2 mx-auto hover:bg-[#e64d1d] transition-colors">
          <span>Fazer diagnóstico gratuito</span>
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.16699 10.5H15.8337" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.833 5.5L15.833 10.5L10.833 15.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
};
