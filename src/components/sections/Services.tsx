
import React from 'react';

const services = [
  {
    title: "Consultoria de Performance",
    description: "Direção estratégica para resultados concretos com análise de dados e otimização contínua.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe2473d1ec18e7fca8c9d3526d6fc7bc7258445f?placeholderIfAbsent=true"
  },
  {
    title: "Gestão de Redes Sociais",
    description: "Crie conexão e consistência com seu público através de conteúdo estratégico.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a3db9ec251f75f855d74a3da5e2ecd55d557daa4?placeholderIfAbsent=true"
  },
  {
    title: "Captação e edição de vídeo",
    description: "Sites que convertem e reforçam sua autoridade com experiência focada em resultados.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/604f40257d0e72968f3baf45cbb056e5cd57cc72?placeholderIfAbsent=true"
  },
  {
    title: "Brand Design",
    description: "Direção estratégica para resultados concretos com análise de dados e otimização contínua.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/836a9c09c0c9127cbad4409534b55d2c969b84d5?placeholderIfAbsent=true"
  },
  {
    title: "Tráfego Pago",
    description: "Gere leads qualificados de forma escalável com campanhas otimizadas para conversão.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1daf4c7de13cae5ea49055ed94eb37036e555b99?placeholderIfAbsent=true"
  },
  {
    title: "Web Design & Landing Pages",
    description: "Sites que convertem e reforçam sua autoridade com experiência focada em resultados.",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7834f5de4a1f49b64d40cd7f3d357fc6f77b413f?placeholderIfAbsent=true"
  }
];

export const Services = () => {
  return (
    <section id="services" className="items-stretch flex w-full flex-col overflow-hidden justify-center bg-white px-16 py-28 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="items-stretch flex w-full flex-col bg-gray-50 px-16 py-[120px] rounded-3xl max-md:max-w-full max-md:px-5 max-md:py-[100px]">
        <div className="self-center w-[768px] max-w-full text-center">
          <h2 className="text-black text-5xl font-bold leading-[1.2] max-md:max-w-full max-md:text-[40px]">
            Nossos Serviços
          </h2>
          <p className="text-black text-lg font-normal leading-[27px] mt-6 max-md:max-w-full">
            Oferecemos soluções personalizadas para ajudar sua empresa a superar desafios e alcançar resultados excepcionais em diferentes áreas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-md:mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="justify-center items-stretch border border-[color:var(--Neutral-Gray-200,#E4E7EC)] flex flex-col bg-white rounded-2xl border-solid hover:shadow-lg transition-shadow"
            >
              <div className="flex w-full flex-col items-stretch justify-center p-6 max-md:px-5">
                <div className="flex w-full flex-col items-stretch">
                  <div className="w-full">
                    <h3 className="text-black text-2xl font-bold leading-[1.4]">
                      {service.title}
                    </h3>
                    <p className="text-black text-base font-normal leading-6 mt-2">
                      {service.description}
                    </p>
                  </div>
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="aspect-[1] object-contain w-12 mt-4"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
