"use client";

export default function CategoryTabs({ categories, activeCategory, setActiveCategory, setActiveSub }) {
  return (
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
  );
}
