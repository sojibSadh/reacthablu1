import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Dummy testimonial data
const testimonials = [
  {
    id: 1,
    quote:
      "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.",
    name: "John Doe",
    title: "Chief Strategy Officer @ Company",
    img: "./quate.png",
  },
  {
    id: 2,
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    name: "Jane Smith",
    title: "Marketing Head @ Business",
    img: "./quate.png",
  },
  {
    id: 3,
    quote:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.",
    name: "Robert Johnson",
    title: "CEO @ Startup",
    img: "./quate.png",
  },
];

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-4 top-1/2 transform -translate-y-1/2  translate-x-20 z-10 cursor-pointer bg-cyan-500 text-white p-2 rounded-full hover:bg-cyan-600"
    onClick={onClick}
  >
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-4 top-1/2 transform -translate-y-1/2  -translate-x-20 z-10 cursor-pointer bg-cyan-500 text-white p-2 rounded-full hover:bg-cyan-600"
    onClick={onClick}
  >
    <FaArrowLeft />
  </div>
);

const Testimonial2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="bg-foreground py-16 relative">
      <div className="max-w-[900px] mx-auto text-center px-4 relative">
        <Slider {...settings}>
          {testimonials.map((item) => (
            <div key={item.id}>
              <img src={item.img} alt="quote" className="mx-auto w-12 sm:w-16" />
              <h3 className="sm:text-[32px] text-[20px] font-light text-white/80 pt-6">
                {item.quote}
              </h3>
              <div className="pt-6">
                <h4 className="sm:text-2xl text-cyan font-semibold">{item.name}</h4>
                <p className="sm:text-[20px] pt-2 text-white/60">{item.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial2;
