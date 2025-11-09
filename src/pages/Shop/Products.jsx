import React, { useState } from "react";
import {products} from "../../utils/products.js";
import ProductsCard from "./ProductsCard.jsx";
import btnIcon from "../../assets/button-icon.png";

const Products = ({ headline }) => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];
  const [selectedCategory,setSelectedCategory]=useState("Chair");
  const [visibleProduct,setVisibleProduct]=useState(4);
  const loadMore=()=>{
        setVisibleProduct((prev)=>prev+4)
  }
  const filteredProducts=products.filter(
    (product)=>product.category === selectedCategory
  )
  return (
    <div>
      <div className="max-w-screen container mx-auto py-6 px-8 min-[400px]:px-16">
        <h2 className="text-4xl font-bold text-center my-8">{headline}</h2>

        {/* category tabs */}
        <div className="bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16 dark:bg-stone-800">
          <div className="flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4">
            {categories.map((category, index) => (
              <button
                onClick={()=>{
                  setSelectedCategory(category);
                  setVisibleProduct(4);
                }}
                key={index}
                className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-orange-300 hover:text-white cursor-pointer dark:bg-stone-600 dark:text-white transition-colors
                  ${selectedCategory === category ?'bg-white text-orange-400':'text-stone-800'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
          {filteredProducts.slice(0,visibleProduct).map((product, index) => (
            <ProductsCard key={index} products={product}></ProductsCard>
          ))}
        </div>

        {/* view more product */}
        {
          visibleProduct<filteredProducts.length&&(
            <div className="flex items-center justify-center mt-8">
              <button 
              onClick={loadMore}
              
              className="text-base font-semibold text-orange-300 flex items-center gap-1 cursor-pointer">
                      View More
                      <img src={btnIcon} alt="button-icon" className="w-8 mt-[5px]" />
                    </button>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Products;
