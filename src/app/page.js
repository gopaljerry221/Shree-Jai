"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./homepage.scss";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function Home() {
  return (
    <div className="home-page-wrapper">
      <section className="slider-section w-full mx-auto py-[0px]">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          effect="fade" // 👈 Smooth fade effect
          speed={1000}  // 👈 Transition speed in ms
          direction="horizontal"
        >
          <SwiperSlide>
            <Image
              src="/images/homepage/carousel-slider-image-1.webp"
              className="carousel-image"
              height={800}
              width={700}
              alt="Slide 1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/homepage/carousel-slider-image-2.webp"
              className="carousel-image"
              height={800}
              width={700}
              alt="Slide 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/homepage/carousel-slider-image-3.webp"
              className="carousel-image"
              height={800}
              width={700}
              alt="Slide 3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/homepage/carousel-slider-image-4.webp"
              className="carousel-image"
              height={800}
              width={700}
              alt="Slide 4"
            />
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="sjfpl-section px-[20px]">
        <h1 className="text-left md:text-center font-bold text-[38px]">SJFPL - Shree Jai</h1>
        <p className="text-left md:text-center text-[20px] md:w-[80%] m-auto py-[20px]">Shree Jalaram Fragrance Pvt. Ltd., The flagship company of a Group comprising seven industries- all engaged in the manufacturing and wholesale supply of <span className="font-bold text-[#666]"> agarbattis (incense sticks), Masala Sticks, Dhoop Sticks & Powder, Camphor, Pooja Packs, Roll-on Perfumes, Attar, Kumkum, Hawan materials and other fragrance related Products </span></p>

        <p className="text-left md:text-center text-[20px] md:w-[80%] m-auto pb-[20px]">Shree Jalaram Fragrance Pvt. Ltd. Is the part of Thakral Group which established in 1959. Late Shree Ratilal Kanji Thakral first set up an agarbatti – manufacturing unit in the brand name of <span className="font-bold text-[#666]">Parasmani.</span> In 1970 Ghanshyam Thakral son of Ratilal Thakral took over the business. The brand <span className="font-bold text-[#666]">"Parasmani".</span>  found an export market in Japan, Dubai and other places and in 1982 The Government of India awarded <span className="font-bold text-[#666]">Parasmani.</span>  agarbatti a gold medal for being higher Exporter in aggarbatti at Vidarbha region.</p>
      </section>

      <section className="biggest-manufacturer py-[40px] text-center m-auto flex justify-center">
        <Image
          src="/images/logos/Header-banner.webp"
          className="biggest-banner-image"
          height={400}
          width={800}
          alt="Slide 4"
        />
      </section>

      <section className="product-category-section mt-[40px]">
        <div className="prodcut-card-section flex flex-wrap p-[50px] gap-[40px] justify-center">
          <div className="card h-[300px] w-[300px]   p-[20px]">
            <h6 className="text-center pb-[20px] text-[24px] font-bold">Agarbatti</h6>
            <Image src="/images/homepage/agarbatti.webp" className="rounded-[4px]" alt="products category" height={500} width={500} />
          </div>
          <div className="card h-[300px] w-[300px] p-[20px]">
            <h6 className="text-center pb-[20px] text-[24px] font-bold">Dhoop</h6>
            <Image src="/images/homepage/agarbatti.webp" className="rounded-[4px]" alt="products category" height={500} width={500} />
          </div>
          <div className="card h-[300px] w-[300px] p-[20px]">
            <h6 className="text-center pb-[20px] text-[24px] font-bold">Camphor</h6>
            <Image src="/images/homepage/agarbatti.webp" className="rounded-[4px]" alt="products category" height={500} width={500} />
          </div>
          <div className="card h-[300px] w-[300px] p-[20px]">
            <h6 className="text-center pb-[20px] text-[24px] font-bold">Hawan Samagri</h6>
            <Image src="/images/homepage/agarbatti.webp" className="rounded-[4px]" alt="products category" height={500} width={500} />
          </div>
        </div>
      </section>
    </div>
  );
}
