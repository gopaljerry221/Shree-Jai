"use client";
import { useState } from "react";
import CategoryTabs from "../../components/CategoryTabs";
import SubCategoryTabs from "../../components/SubCategoryTabs";
import Sidebar from "../../components/Sidebar";
import ProductGrid from "../../components/ProductGrid";

const categories = [
  { name: "Agarbatti", sub: ["Zipper", "Tube", "Medium Packet", "Large Packet", "Masala Agarbatti", "Pouches"] },
  { name: "Camphor", sub: ["Camphor Tablet Pouch", "Camphor Dabbi"] },
  { name: "Dhoop", sub: ["Dry Dhoop", "Wet Dhoop"] },
  { name: "Havan Samagri", sub: [] },
];

export default function Product() {
  const [activeCategory, setActiveCategory] = useState(categories[0].name);
  const [activeSub, setActiveSub] = useState(null);

  const currentCategory = categories.find((c) => c.name === activeCategory);

  return (
    <div className="p-4">
      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        setActiveSub={setActiveSub}
      />

      <SubCategoryTabs
        subCategories={currentCategory.sub}
        activeSub={activeSub}
        setActiveSub={setActiveSub}
      />

      <div className="flex flex-col md:flex-row gap-6 mt-4">
        <Sidebar
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          activeSub={activeSub}
          setActiveSub={setActiveSub}
        />

        <ProductGrid
          activeCategory={activeCategory}
          activeSub={activeSub}
        />
      </div>
    </div>
  );
}
