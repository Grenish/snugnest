import { Cardigan3, Cardigan4, HNM1 } from "../assets";
import ProductCard from "./components/ProductCard";

export default function FeaturedProducts() {
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
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-[#f7f7f7] py-5">
      <div className="mb-5 px-10 sm:px-4">
        <h2 className="Vaimek text-5xl">Our Latest Collection</h2>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-4">
        {featuredItems.map((item) => (
          <ProductCard
            key={item.id}
            isEco={item.isEco}
            title={item.name}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <button className="mt-5 p-2 bg-[#ffcdb2] hover:bg-[#ffb4a2] transition-color duration-200 ease-in-out capitalize ">
        See more
      </button>
    </div>
  );
}
