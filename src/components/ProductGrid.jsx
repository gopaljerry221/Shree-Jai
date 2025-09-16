"use client";
import Image from "next/image";

export default function ProductGrid({ activeCategory, activeSub }) {
  const title = activeSub || activeCategory;

  return (
    <div className="w-full md:w-3/4">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6].map((p) => (
          <div
            key={p}
            className="border rounded-lg p-3 flex flex-col items-center hover:shadow-lg transition"
          >
            <Image
              src="/placeholder.png"
              alt={title}
              width={120}
              height={120}
              className="rounded mb-2"
            />
            <p className="text-sm font-medium text-center">{title} {p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
