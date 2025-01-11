'use client'
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";

export default  function Products() {

    interface Product {
        id: number;
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
      }
      
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);


    
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch(' https://fakestoreapi.com/products')
            const data = await res.json();
            setProducts(data);
            setLoading(false);
        };

        fetchProducts();
    }, []);
    return (
        <div>
            <Navbar/>
            <div className="container mx-auto p-4">
            <h1 className="font-bold text-3xl mb-6">Products</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                        key={product.id}
                        className="bg-white p-4 rounded-lg shadow hover:shadow-xl"
                        >
                        <Image 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-40 object-contain mb-4"
                        />

                        <h2 className="text-lg font-bold">{product.title}</h2>
                        <p className="text-gray-500">{product.description}</p>
                        <p className="text-green-600 font-bold  mt-2">
                            ${product.price}</p>
                        </div>
                        ))}
                </div>
            )}
        </div>
        </div>
    );
} ;