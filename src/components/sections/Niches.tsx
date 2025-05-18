import React from 'react';

const niches = [
  { title: "Educação", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/635a655fa21099c14ed7103e67a9410267a51179?placeholderIfAbsent=true" },
  { title: "Moda", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e69f41ff94f92a44c5ee50b6730408c4953cfccc?placeholderIfAbsent=true" },
  { title: "Tecnologia", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/43207c01c8b425cd7cd2ed6d734013f98f20ab49?placeholderIfAbsent=true" },
  { title: "Mercado financeiro", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ea2d4bef8d3404c808b788ef9d21db8043efed51?placeholderIfAbsent=true" },
  { title: "Esportes", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4f13202e0e18759f1e6b788f7d2400352d5970e5?placeholderIfAbsent=true" },
  { title: "Saúde", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/84a4c909aac5faa04cc33c50ade60f5063aabd67?placeholderIfAbsent=true" },
  { title: "Imobiliárias", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7b4d907c2b9fb494c578ac629e66a7d006a0a32b?placeholderIfAbsent=true" },
  { title: "Marcas pessoais", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/96e1348325998a8fa40933a5f3dca3b4c47f7d87?placeholderIfAbsent=true" },
  { title: "Serviços", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a5185a685c603940e9777ad5eba4da28562b0f38?placeholderIfAbsent=true" },
  { title: "Comidas e bebidas", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/210fb19959b5e236ec72ae269b11f9a5ee05c624?placeholderIfAbsent=true" },
  { title: "Entretenimento", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c7b146dca23375fbf709986c7c7c7891207222d2?placeholderIfAbsent=true" },
  { title: "Beleza", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f47648348c59a0d07743afe65b9c6231cb83760?placeholderIfAbsent=true" }
];

export const Niches = () => {
  return (
    <section className="items-stretch flex w-full flex-col overflow-hidden justify-center bg-white px-16 py-28 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex w-full flex-col items-center px-16 py-[120px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
        <div className="w-[768px] max-w-full text-black text-center">
          <h2 className="text-black text-5xl font-bold leading-[1.2] max-md:max-w-full max-md:text-[40px]">
            Nichos que atuamos
          </h2>
          <p className="text-black text-lg font-normal leading-[27px] mt-6 max-md:max-w-full">
            Oferecemos soluções personalizadas para ajudar sua empresa a superar desafios e alcançar resultados excepcionais em diferentes áreas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-20 w-full max-w-[1122px]">
          {niches.map((niche, index) => (
            <div
              key={index}
              className="justify-center items-stretch border border-[color:var(--Neutral-Gray-200,#E4E7EC)] flex flex-col text-lg text-[#FF5521] font-medium text-center leading-[1.4] bg-white rounded-2xl border-solid hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center justify-center p-6 max-md:px-5">
                <img
                  src={niche.icon}
                  alt={niche.title}
                  className="aspect-[1] object-contain w-12"
                />
                <div className="text-[#FF5521] mt-4">
                  {niche.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
