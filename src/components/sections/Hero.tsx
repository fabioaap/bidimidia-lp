
import React from 'react';
import { HeroAnimation } from '@/components/HeroAnimation';

export const Hero = () => {
  return (
    <section className="bg-[rgba(34,76,255,1)] flex w-full items-center gap-[40px_80px] overflow-hidden flex-wrap px-16 py-28 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="self-stretch flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
        <div className="w-full text-[color:var(--sds-color-text-neutral-on-neutral)] max-md:max-w-full">
          <h1 className="text-[color:var(--sds-color-text-neutral-on-neutral)] text-[56px] font-bold leading-[67px] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
            <span style={{ color: 'rgba(243,243,243,1)' }}>
              Você sabe onde sua empresa pode chegar?
            </span>
            <br />
            <span style={{ fontWeight: 400, color: 'rgba(243,243,243,1)' }}>
              Nós sabemos como levá-la até lá.
            </span>
          </h1>
          <p className="text-[color:var(--sds-color-text-neutral-on-neutral)] text-lg font-normal leading-[27px] mt-6 max-md:max-w-full">
            Somos a BidMídia. Unimos estratégia, criatividade e tecnologia para escalar sua performance.
          </p>
        </div>
        <div className="flex items-center gap-4 text-base font-normal flex-wrap mt-6 pt-4 max-md:max-w-full">
          <button className="justify-center items-center self-stretch flex min-w-60 gap-2 text-white bg-[#FF5521] my-auto px-6 py-3 rounded-lg max-md:px-5 hover:bg-[#e64d1d] transition-colors">
            <span>Fazer diagnóstico gratuito</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/95ea3cafa282ed66c30dd3bfb26f0e0aefcad14c?placeholderIfAbsent=true"
              alt="Arrow Right"
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            />
          </button>
          <button className="justify-center items-center self-stretch flex min-w-60 gap-2 text-[#FF5521] bg-white my-auto px-6 py-3 rounded-lg max-md:px-5 hover:bg-gray-50 transition-colors">
            <span>Fale com um especialista</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8d71a989c2457d764f52d6b0069ef2243171620?placeholderIfAbsent=true"
              alt="Arrow Right"
              className="aspect-[1] object-contain w-5 bg-blend-normal self-stretch shrink-0 my-auto"
            />
          </button>
        </div>
      </div>
      <HeroAnimation />
    </section>
  );
};
