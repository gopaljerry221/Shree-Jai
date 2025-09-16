"use client";
import { useState } from "react";
import { productsData } from "./productsData";
import ProductModal from "./ProductModal";

export default function ProductGrid({ activeCategory, activeSub }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get category object
  const category = productsData.find((c) => c.category === activeCategory);

  // Get products from subcategory or all
  let products = [];
  if (category) {
    if (activeSub) {
      const subcat = category.subcategories.find((s) => s.name === activeSub);
      if (subcat) products = subcat.products;
    } else {
      // all products in category
      products = category.subcategories.flatMap((s) => s.products);
    }
  }

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {products.map((p) => (
          <div
            key={p.id}
            onClick={() => openModal(p)}
            className="border rounded-lg p-3 flex flex-col items-center hover:shadow-lg transition cursor-pointer"
          >
            <img
              src={p.image}
              alt={p.name}
              className="rounded mb-2 w-32 h-32 object-cover"
            />
            <p className="text-sm font-medium text-center">{p.name}</p>
            <p className="text-sm font-semibold text-blue-600">₹ {p.price}</p>
          </div>
        ))}
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
