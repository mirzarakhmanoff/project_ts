import React, { useEffect, useState } from "react";
import { Header } from "../../components/header/Header";
import Card from "../../components/card/Card";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string;
}

const Home: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setData(res.data.products);
        console.log(res.data.products);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
