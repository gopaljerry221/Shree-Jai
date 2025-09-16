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

  const currentCategory = categories.find((c) => c.name === activeCategory);

  return (
    <div className="p-4">
      {/* 🔹 Mobile Category Tabs */}
      <div className="flex gap-3 overflow-x-auto pb-2 md:hidden">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => {
              setActiveCategory(cat.name);
              setActiveSub(null);
            }}
            className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeCategory === cat.name
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* 🔹 Mobile Subcategory Tabs */}
      {currentCategory?.sub.length > 0 && (
        <div className="flex gap-3 overflow-x-auto pb-3 md:hidden mt-2">
          <button
            onClick={() => setActiveSub(null)}
            className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeSub === null
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            All
          </button>
          {currentCategory.sub.map((sub) => (
            <button
              key={sub}
              onClick={() => setActiveSub(sub)}
              className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition ${
                activeSub === sub
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-6 mt-4">
        {/* 🔹 Desktop Sidebar */}
        <div className="hidden md:block md:w-1/4 bg-gray-100 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <ul className="space-y-3">
            {categories.map((cat, i) => (
              <li key={i}>
                <button
                  onClick={() => {
                    setActiveCategory(cat.name);
                    setActiveSub(null);
                  }}
                  className={`w-full text-left font-medium py-2 px-3 rounded transition flex justify-between items-center ${
                    activeCategory === cat.name ? "bg-blue-200" : "hover:bg-gray-200"
                  }`}
                >
                  {cat.name}
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

                {/* Subcategories Accordion */}
                {cat.sub.length > 0 && (
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      activeCategory === cat.name ? "max-h-96 mt-2" : "max-h-0"
                    }`}
                  >
                    <ul className="ml-4 space-y-2">
                      <li>
                        <button
                          onClick={() => setActiveSub(null)}
                          className={`w-full text-left text-sm px-3 py-1 rounded ${
                            activeSub === null
                              ? "bg-blue-500 text-white"
                              : "hover:bg-gray-300"
                          }`}
                        >
                          All
                        </button>
                      </li>
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

        {/* 🔹 Product Grid */}
        <div className="w-full md:w-3/4">
          <h3 className="text-xl font-semibold mb-4">
            {activeSub || activeCategory}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
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
                <p className="text-sm font-medium text-center">
                  {(activeSub || activeCategory)} {p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
