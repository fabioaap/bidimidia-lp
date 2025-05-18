
import React from 'react';

const companies = [
  { name: "Webflow", logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/8600449204e1614f9ca2af1ceee4affe3b31dde09fd8b41187e1ee6204b06fb7?apiKey=0a3aedb2155f4c9fa2fd5f4d60fda29a&" },
  { name: "Relume", logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/1c7f09262867312cc80b20e4d18159c1002d2c9ecdfc65bcfea64cfdbae7636e?apiKey=0a3aedb2155f4c9fa2fd5f4d60fda29a&" },
  { name: "Webflow", logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/8600449204e1614f9ca2af1ceee4affe3b31dde09fd8b41187e1ee6204b06fb7?apiKey=0a3aedb2155f4c9fa2fd5f4d60fda29a&" },
  { name: "Relume", logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/1c7f09262867312cc80b20e4d18159c1002d2c9ecdfc65bcfea64cfdbae7636e?apiKey=0a3aedb2155f4c9fa2fd5f4d60fda29a&" },
  { name: "Webflow", logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/8600449204e1614f9ca2af1ceee4affe3b31dde09fd8b41187e1ee6204b06fb7?apiKey=0a3aedb2155f4c9fa2fd5f4d60fda29a&" },
  { name: "Relume", logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/1c7f09262867312cc80b20e4d18159c1002d2c9ecdfc65bcfea64cfdbae7636e?apiKey=0a3aedb2155f4c9fa2fd5f4d60fda29a&" }
];

export const Companies = () => {
  return (
    <section className="items-stretch flex w-full flex-col overflow-hidden justify-center bg-white px-16 py-28 max-md:max-w-full max-md:px-5 max-md:py-[100px]" id="companies">
      <div className="self-center w-full max-w-[1200px] text-center">
        <h2 className="text-black text-3xl font-bold leading-[1.2] max-md:max-w-full">
          Empresas que já ajudamos a crescer seus negócios
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 mt-16">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center justify-center">
              <img 
                src={company.logo} 
                alt={`${company.name} logo`}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
