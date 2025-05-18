import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="w-full overflow-hidden bg-[#224CFF] px-16 py-20 max-md:max-w-full max-md:px-5">
      <div className="flex w-full items-center gap-8 flex-wrap max-md:max-w-full">
        <div className="self-stretch flex min-w-60 flex-col overflow-hidden flex-1 shrink basis-[0%] my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/422f99237d7a11aa06bcaaa30aac47a63ce1f21f?placeholderIfAbsent=true"
            alt="BidMidia Logo"
            className="aspect-[2.27] object-contain w-[146px] max-w-full"
          />
        </div>
        <div className="self-stretch flex min-w-60 gap-8 text-base text-white font-semibold my-auto max-md:max-w-full">
          <Link to="#" className="text-white hover:text-gray-200 transition-colors">Link One</Link>
          <Link to="#" className="text-white hover:text-gray-200 transition-colors">Link Two</Link>
          <Link to="#" className="text-white hover:text-gray-200 transition-colors">Link Three</Link>
          <Link to="#" className="text-white hover:text-gray-200 transition-colors">Link Four</Link>
          <Link to="#" className="text-white hover:text-gray-200 transition-colors">Link Five</Link>
        </div>
        <div className="self-stretch flex min-w-60 items-center gap-3 flex-1 shrink basis-[0%] my-auto">
          {[
            { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/107190964143bfd5de0deb1ce585f6fb28b6c8a9?placeholderIfAbsent=true", alt: "Social Media 1" },
            { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9db0f25af8ffe32ddbda39169c960ae150677533?placeholderIfAbsent=true", alt: "Social Media 2" },
            { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c7333c9e1a05af3bbde2071dfbff70098baa9147?placeholderIfAbsent=true", alt: "Social Media 3" },
            { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/93c5029efa898d829b97310fc2b360718c9f488a?placeholderIfAbsent=true", alt: "Social Media 4" },
            { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b4b6df4954d5bc1cf6e7840722d333fc3954b88a?placeholderIfAbsent=true", alt: "Social Media 5" },
          ].map((social, index) => (
            <a 
              key={index}
              href="#"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src={social.src}
                alt={social.alt}
                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col items-stretch text-sm text-white font-normal mt-20 max-md:max-w-full max-md:mt-10">
        <div className="border border-[color:var(--Primary-300,#7FB2FF)] flex min-h-px w-full bg-white border-solid max-md:max-w-full" />
        <div className="self-center flex gap-6 flex-wrap mt-8 max-md:max-w-full">
          <div className="text-white">© 2025 Todos os direitos reservados.</div>
          <div className="flex min-w-60 gap-6 underline max-md:max-w-full">
            <Link to="#" className="text-white underline hover:text-gray-200 transition-colors">
              Politica de privacidade
            </Link>
            <Link to="#" className="text-white underline hover:text-gray-200 transition-colors">
              Termos de uso
            </Link>
            <Link to="#" className="text-white underline hover:text-gray-200 transition-colors">
              Configuração de cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
