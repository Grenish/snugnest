"use client";

import Link from "next/link";
import FeaturedProducts from "./FeaturedProducts";
import ProductCard from "./components/ProductCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Products() {
  const FinalItems = [
    {
      id: 1,
      name: "CaraLes Neo Tree Cardigan",
      image:
        "https://ipfs.filebase.io/ipfs/QmNiHmv1Hk57ywY6Xit5CRMJc8BCSG1Rvt2mszEEPxn8N8",
      isEco: true,
      price: 5.98,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Samantha Alvio Lined Sweater",
      image:
        "https://ipfs.filebase.io/ipfs/QmdE3fheNdJRQwonWtMb9nZ5DaGaENic1aL4aw3pJBR4Te",
      isEco: true,
      price: 6.59,
      rating: 4.5,
    },
    {
      id: 3,
      name: "H&M Knit Cardigan",
      image:
        "https://ipfs.filebase.io/ipfs/QmNiHmv1Hk57ywY6Xit5CRMJc8BCSG1Rvt2mszEEPxn8N8",
      isEco: false,
      price: 7.99,
      rating: 4.5,
    },
    {
      id: 4,
      name: "CaraLes Neo Tree Cardigan",
      image:
        "https://ipfs.filebase.io/ipfs/QmVsS4SJ7BAeNhb7qdxjjX7zSEoY3wQWHs7LR7skRXF7Zx",
      isEco: true,
      price: 5.98,
      rating: 4.5,
    },
    {
      id: 5,
      name: "Samantha Alvio Lined Sweater",
      image:
        "https://ipfs.filebase.io/ipfs/QmdE3fheNdJRQwonWtMb9nZ5DaGaENic1aL4aw3pJBR4Te",
      isEco: true,
      price: 6.59,
      rating: 4.5,
    },
    {
      id: 6,
      name: "H&M Knit Cardigan",
      image:
        "https://ipfs.filebase.io/ipfs/QmVsS4SJ7BAeNhb7qdxjjX7zSEoY3wQWHs7LR7skRXF7Zx",
      isEco: false,
      price: 7.99,
      rating: 4.5,
    },
    {
      id: 7,
      name: "CaraLes Neo Tree Cardigan",
      image:
        "https://ipfs.filebase.io/ipfs/QmNiHmv1Hk57ywY6Xit5CRMJc8BCSG1Rvt2mszEEPxn8N8",
      isEco: true,
      price: 5.98,
      rating: 4.5,
    },
    {
      id: 8,
      name: "Samantha Alvio Lined Sweater",
      image:
        "https://ipfs.filebase.io/ipfs/QmdE3fheNdJRQwonWtMb9nZ5DaGaENic1aL4aw3pJBR4Te",
      isEco: true,
      price: 6.59,
      rating: 4.5,
    },
    {
      id: 9,
      name: "H&M Knit Cardigan",
      image:
        "https://ipfs.filebase.io/ipfs/QmVsS4SJ7BAeNhb7qdxjjX7zSEoY3wQWHs7LR7skRXF7Zx",
      isEco: false,
      price: 7.99,
      rating: 4.5,
    },
    {
      id: 10,
      name: "CaraLes Neo Tree Cardigan",
      image:
        "https://ipfs.filebase.io/ipfs/QmNiHmv1Hk57ywY6Xit5CRMJc8BCSG1Rvt2mszEEPxn8N8",
      isEco: true,
      price: 5.98,
      rating: 4.5,
    },
  ];

  return (
    <div className="min-h-screen mb-5">
      <FeaturedProducts />
      <div className="px-4 sm:px-6 md:px-8 lg:px-20 xl:px-16 mt-5">
        <div className="flex flex-col justify-center w-full">
          <h2 className="Vaimek text-4xl md:text-5xl xl:text-6xl">
            Unisex Sweaters and Cardigans
          </h2>
          <p className="text-xs md:text-xs xl:text-md mb-5 w-full md:w-1/2 sm:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic
            vero qui, eius aut nobis? Dicta fugit voluptas atque ad commodi
            vitae in repudiandae voluptatem illum, vel id! Modi harum
            accusantium accusamus.
          </p>
        </div>
        <div className="flex justify-between w-full mx-auto items-center">
          <p className="text-xs md:text-xs xl:text-md">
            Showing 1 to 10 products out of 10 products
          </p>
          <button className="text-xs md:text-xs xl:text-md capitalize w-1/4 pt-2 pb-1 border-b-2 active:bg-[#f7f7f7] transition-colors duration-200 ease-in-out">
            <div className="flex justify-between px-2 items-center">
              <p>Sort by</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-5 w-fit items-center m-auto">
          {FinalItems.map((item, index) => {
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
                <Link href={`/cardigan/${item.id}`}>
                  <ProductCard
                    isEco={item.isEco}
                    title={item.name}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
