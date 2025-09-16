"use client";

export default function Sidebar({ categories, activeCategory, setActiveCategory, activeSub, setActiveSub }) {
  return (
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
                activeCategory === cat.name ? "bg-[]" : "hover:bg-gray-200"
              }`}
            >
              {cat.name}
              {cat.sub.length > 0 && (
                <span
                  className={`transform transition-transform duration-300 ${
                    activeCategory === cat.name ? "rotate-90" : "rotate-0"
                  }`}
                >
                  {'>'}
                </span>
              )}
            </button>

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
                        activeSub === null ? "bg-[#f9cf00] text-black" : "hover:bg-gray-300"
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
                          activeSub === sub ? "bg-[#f9cf00] text-black" : "hover:bg-gray-300"
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
  );
}
