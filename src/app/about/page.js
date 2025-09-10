import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="about-us-wrapper py-[40px] px-[20px] md:px-[70px]">
        <h4 className="text-[18px] pb-[30px] font-bold">Shree Jai – Blending Tradition with Fragrance to Enrich Everyday Life.</h4>
        <p className="text-[18px]">
          <span className="font-bold text-[#666] text-[18px]">
            Shree Jalaram Fragrance Pvt. Ltd.</span> is the flagship company of a group comprising seven industries – all dedicated to the manufacturing and wholesale supply of premium fragrance products. Our offerings include Agarbattis (incense sticks), Masala Sticks, Dhoop Sticks & Powders, Camphor, Pooja Packs, Roll-on Perfumes, Attars, Kumkum, Hawan materials, and a wide variety of fragrance-related products.
        </p>

        <p className="text-[18px] pt-[30px]">
          Part of the prestigious <span className="font-bold text-[#666] text-[18px]">Thakral Group</span>, established in 1959, Shree Jalaram Fragrance has a rich legacy of excellence. The journey began with Late Shree Ratilal Kanji Thakral, who set up the first agarbatti manufacturing unit under the brand name <span className="font-bold text-[#666] text-[18px]">Parasmani</span>. In 1970, his son <span className="font-bold text-[#666] text-[18px]">Ghanshyam Thakral</span> took over the reins, carrying the family vision forward. Soon, the brand Parasmani reached international markets like Japan, Dubai, and other destinations. In 1982, the Government of India recognized Parasmani agarbatti with a Gold Medal for being the highest exporter of agarbattis in the Vidarbha region — a testament to our dedication, quality, and global reach.
        </p>

        <div className="pt-[20px]">
          <div>
            <h6 className="text-[18px] font-bold text-[#666]">Commitment to Quality</h6>
            <p className="text-[16px]">
              At Shree Jai, quality is our promise. Every incense stick is made using the best natural ingredients collected from across India. They are blended with care to give a smooth, long-lasting fragrance. With strict quality checks at every step, we make sure our customers receive products they can truly trust.
            </p>
          </div>

          <div className="pt-[20px]">
            <h6 className="text-[18px] font-bold text-[#666]">Wide Range of Fragrances</h6>
            <p className="text-[16px]">
              We bring you fragrances for every mood and moment. From the calming touch of lavender and the freshness of citrus to the warmth of sandalwood and the sweetness of rose, our collection has something for everyone. By combining traditional methods with new ideas, our team creates unique blends that leave a lasting impression.
            </p>
          </div>
          <div className="pt-[20px]">
            <h6 className="text-[18px] font-bold text-[#666]">Customer First Approach</h6>
            <p className="text-[16px]">
              For us, customers come first. Whether it’s your first purchase or your regular order, we aim to make your experience smooth and pleasant. Our support team is always ready to help and ensure that you are fully satisfied with our products and services.
            </p>
          </div>

          <div className="pt-[20px]">
            <h6 className="text-[18px] font-bold text-[#666]">Fragrances that Create Atmosphere</h6>
            <p className="text-[16px]">
              Our products are more than just incense — they are experiences that change the mood of your surroundings. Whether you want peace for meditation, freshness for your home, or focus for work, our incense sticks help create the right atmosphere.
            </p>
          </div>

          <div className="pt-[20px]">
            <h6 className="text-[18px] font-bold text-[#666]">Designed for Comfort</h6>
            <p className="text-[16px]">
             We also care about your comfort and well-being. That’s why our incense sticks are made to produce very little smoke, giving you pure fragrance without irritation. This makes them perfect for daily use, prayers, or relaxation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
