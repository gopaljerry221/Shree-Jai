"use client";
import { useState } from "react";
import Image from "next/image";

const categories = [
  {
    name: "Agarbatti",
    sub: ["Zipper", "Tube", "Medium Packet", "Large Packet", "Masala Agarbatti", "Pouches"],
  },
  {
    name: "Camphor",
    sub: ["Camphor Tablet Pouch", "Camphor Dabbi"],
  },
  {
    name: "Dhoop",
    sub: ["Dry Dhoop", "Wet Dhoop"],
  },
  {
    name: "Havan Samagri",
    sub: [], // no subcategories
  },
];

export default function Product() {
  const [activeCategory, setActiveCategory] = useState(categories[0].name);
  const [activeSub, setActiveSub] = useState(null);

  return (
    <div className="flex flex-col md:flex-row p-4 gap-6">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-100 rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <ul className="space-y-3">
          {categories.map((cat, i) => (
            <li key={i}>
              {/* Category Button */}
              <button
                onClick={() => {
                  setActiveCategory(cat.name);
                  setActiveSub(null); // reset sub filter → show all in category
                }}
                className={`w-full text-left font-medium py-2 px-3 rounded transition flex justify-between items-center ${
                  activeCategory === cat.name ? "bg-blue-200" : "hover:bg-gray-200"
                }`}
              >
                {cat.name}

                {/* Show arrow only if subcategories exist */}
                {cat.sub.length > 0 && (
                  <span
                    className={`transform transition-transform duration-300 ${
                      activeCategory === cat.name ? "rotate-90" : "rotate-0"
                    }`}
                  >
                    ▶
                  </span>
                )}
              </button>

              {/* Subcategory Accordion */}
              {cat.sub.length > 0 && (
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeCategory === cat.name ? "max-h-96 mt-2" : "max-h-0"
                  }`}
                >
                  <ul className="ml-4 space-y-2">
                    {cat.sub.map((sub, j) => (
                      <li key={j}>
                        <button
                          onClick={() => setActiveSub(sub)}
                          className={`w-full text-left text-sm px-3 py-1 rounded ${
                            activeSub === sub
                              ? "bg-blue-500 text-white"
                              : "hover:bg-gray-300"
                          }`}
                        >
                          {sub}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Product Display */}
      <div className="w-full md:w-3/4">
        <h3 className="text-xl font-semibold mb-4">
          {activeSub || activeCategory}
        </h3>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6].map((p) => (
            <div
              key={p}
              className="border rounded-lg p-3 flex flex-col items-center hover:shadow-lg transition"
            >
              <Image
                src="/placeholder.png"
                alt={activeSub || activeCategory}
                width={120}
                height={120}
                className="rounded mb-2"
              />
              <p className="text-sm font-medium">
                {(activeSub || activeCategory)} {p}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
