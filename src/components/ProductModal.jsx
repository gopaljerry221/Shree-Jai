"use client";

export default function ProductModal({ product, isOpen, onClose }) {
  if (!isOpen || !product) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center z-50"
      onClick={onClose} // close on overlay click
    >
      <div
        className="bg-white rounded-lg p-6 max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-xl"
        >
          ×
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-lg font-medium text-blue-600">₹ {product.price}</p>
      </div>
    </div>
  );
}
