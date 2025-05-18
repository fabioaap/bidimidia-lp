import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="justify-center items-stretch shadow-[0px_-1px_0px_0px_#000_inset] flex min-h-[72px] w-full flex-col overflow-hidden text-base text-black font-normal bg-white px-16 max-md:max-w-full max-md:px-5">
      <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
        <Link to="/">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c497aec990c7dd3d932d71b2864378d38e40ed4?placeholderIfAbsent=true"
            alt="BidMidia Logo"
            className="aspect-[2.27] object-contain w-[145px] self-stretch shrink-0 my-auto"
          />
        </Link>
        <div className="justify-center items-center self-stretch flex min-w-60 gap-8 bg-white my-auto">
          <div className="self-stretch flex min-w-60 gap-8 overflow-hidden my-auto">
            <Link to="#services" className="text-black hover:text-gray-600 transition-colors">
              Como te ajudamos
            </Link>
            <Link to="#services" className="text-black hover:text-gray-600 transition-colors">
              Serviços
            </Link>
            <Link to="#niches" className="text-black hover:text-gray-600 transition-colors">
              Nichos
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
