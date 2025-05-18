import React from 'react';

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    author: "Name Surname",
    position: "Position, Company name",
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/a093a7549ec87dcf921f5f16ba50ea88925f1d1f?placeholderIfAbsent=true"
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    author: "Name Surname",
    position: "Position, Company name",
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/a093a7549ec87dcf921f5f16ba50ea88925f1d1f?placeholderIfAbsent=true"
  }
];

export const Testimonials = () => {
  return (
    <section className="items-stretch flex w-full flex-col overflow-hidden bg-[#224CFF] px-16 py-28 max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="self-center w-[560px] max-w-full text-white text-center">
        <h2 className="text-white text-5xl font-bold leading-[1.2] max-md:max-w-full max-md:text-[40px]">
          Customer testimonials
        </h2>
        <p className="text-white text-lg font-normal mt-6 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex w-full gap-8 flex-wrap mt-20 max-md:max-w-full max-md:mt-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="items-stretch flex min-w-60 flex-col overflow-hidden flex-1 shrink basis-[0%] bg-[#06F] p-8 rounded-3xl max-md:max-w-full max-md:px-5"
          >
            <div className="w-full max-md:max-w-full">
              <div className="flex w-full gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
                <div className="flex gap-1 overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce5755ed0fb1907d9693130797a4b5533de5a7db?placeholderIfAbsent=true"
                      alt="Star"
                      className="aspect-[1.11] object-contain w-5 fill-white shrink-0"
                    />
                  ))}
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d21d22a6a1bc2e75283757e3b908479554bb4f1?placeholderIfAbsent=true"
                  alt="Quote"
                  className="aspect-[1.09] object-contain w-[35px] shrink-0 rounded-[0px_0px_0px_0px]"
                />
              </div>
              <p className="text-white text-lg font-normal leading-[27px] mt-8 max-md:max-w-full">
                "{testimonial.quote}"
              </p>
            </div>
            <div className="flex items-center gap-4 text-base text-white mt-8">
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="aspect-[1] object-contain w-14 self-stretch shrink-0 my-auto"
              />
              <div className="self-stretch my-auto">
                <div className="text-white font-semibold">{testimonial.author}</div>
                <div className="text-white font-normal">{testimonial.position}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
