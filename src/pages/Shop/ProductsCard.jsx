import React, { useContext } from "react";
import { getImgUrl } from "../../utils/getImgUrl";
import Rating from "../../components/Rating";
import { FiPlus } from "react-icons/fi";
import { CartContext } from "../../context/CartContext";

const ProductsCard = ({ products }) => {
  const { addToCart } = useContext(CartContext); // ✅ use addToCart from context

  return (
    <div className="bg-white dark:bg-stone-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col cursor-pointer">
      {/* Product Image */}
      <div className="bg-[#F9F9F9] relative group dark:bg-stone-900">
        <img
          src={getImgUrl(products.imageUrl)}
          alt={products.name}
          className="w-full h-[220px] object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />

        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>

      {/* Product Info */}
      <div className="flex flex-col justify-between p-5 grow">
        <div>
          <h4 className="text-sm text-gray-500 mb-1 uppercase tracking-wide dark:text-white">
            {products.category}
          </h4>
          <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2 leading-snug dark:text-white">
            {products.name}
          </h3>
          <Rating rating={products.rating} />
        </div>

        <div className="mt-5 flex justify-between items-center">
          <p className="font-bold text-xl text-gray-800 dark:text-white">
            <sup className="text-sm align-top">$</sup>
            {products.price}
          </p>

          {/* ✅ Add to Cart Button */}
          <button
            className="bg-orange-500 text-white rounded-full p-3 hover:bg-orange-600 transition-colors duration-300 shadow-sm hover:shadow-md hover:cursor-pointer"
            aria-label="Add to cart"
            onClick={() => addToCart(products)} // ✅ pass the product
          >
            <FiPlus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
