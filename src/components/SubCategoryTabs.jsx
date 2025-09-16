"use client";

export default function SubCategoryTabs({ subCategories, activeSub, setActiveSub }) {
  if (!subCategories || subCategories.length === 0) return null;

  return (
    <div className="flex gap-3 overflow-x-auto pb-3 md:hidden mt-2">
      <button
        onClick={() => setActiveSub(null)}
        className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition ${
          activeSub === null ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        All
      </button>
      {subCategories.map((sub) => (
        <button
          key={sub}
          onClick={() => setActiveSub(sub)}
          className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition ${
            activeSub === sub ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {sub}
        </button>
      ))}
    </div>
  );
}
