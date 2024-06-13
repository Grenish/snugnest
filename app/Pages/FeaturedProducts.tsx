"use client";

// Importing necessary assets and components
import { Cardigan3, Cardigan4, HNM1 } from "../assets";
import ProductCard from "./components/ProductCard";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Main component for Featured Products
export default function FeaturedProducts() {
  // Array of featured items with their details
  const featuredItems = [
    {
      id: 1,
      name: "CaraLes Neo Tree Cardigan",
      image: Cardigan3,
      isEco: true,
      price: 5.98,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Samantha Alvio Lined Sweater",
      image: Cardigan4,
      isEco: true,
      price: 6.59,
      rating: 4.5,
    },
    {
      id: 3,
      name: "Linked seam-detail jumper",
      image: HNM1,
      isEco: true,
      price: 8.38,
      rating: 4,
    },
    {
      id: 4,
      name: "Linked seam-detail jumper",
      image: HNM1,
      isEco: true,
      price: 8.38,
      rating: 4,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-[#f7f7f7] py-5">
      {/* Section title */}
      <div className="mb-5 px-10 sm:px-4">
        <h2 className="Vaimek text-4xl md:text-5xl xl:text-6xl">Our Latest Collection</h2>
      </div>
      {/* Grid of featured items */}
      <div className="w-fit grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center gap-4">
        {featuredItems.map((item, index) => {
          // Hook to handle element visibility
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          return (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ delay: index * 0.1 }}
              key={item.id}
            >
              {/* Product card component */}
              <ProductCard
                isEco={item.isEco}
                title={item.name}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            </motion.div>
          );
        })}
      </div>
      {/* Button to see more products */}
      <button className="mt-5 p-2 bg-[#ffcdb2] hover:bg-[#ffb4a2] transition-color duration-200 ease-in-out capitalize ">
        See more
      </button>
    </div>
  );
}
