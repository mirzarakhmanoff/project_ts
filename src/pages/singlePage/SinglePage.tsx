import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Импортируем useParams для получения параметров маршрута
import axios from "axios";
import { Header } from "../../components/header/Header";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string;
}

const SingleProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <div>Загрузка...</div>; // Показать загрузку, если товар еще не загружен

  return (
    <div className="container mx-auto p-4">
      <Header />
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-96 object-contain"
          src={product.images[0]}
          alt={product.title}
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <span className="text-gray-900 font-bold text-lg block mt-4">
            ${product.price.toFixed(2)}
          </span>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition-colors">
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
