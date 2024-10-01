import React from "react";
import { Link } from "react-router-dom";

interface Product {
  images: string;
  title: string;
  price: number;
  description: string;
  id: number;
}

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[400px] my-2">
      <Link to={`/product/${data.id}`}>
        <img
          className="w-full h-48 object-contain"
          src={data.images[0]}
          alt={data.title}
        />
      </Link>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{data.title}</h2>
        <p className="text-gray-600 mt-2">{data.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-gray-900 font-bold text-lg">
            ${data.price.toFixed(2)}
          </span>
          <button className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition-colors">
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
