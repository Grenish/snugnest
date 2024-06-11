import { Cardigan3, Cardigan4, HNM1 } from "../assets";
import FeaturedProducts from "./FeaturedProducts";
import ProductCard from "./components/ProductCard";

export default function Products() {
  const FinalItems = [
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
      name: "H&M Knit Cardigan",
      image: HNM1,
      isEco: false,
      price: 7.99,
      rating: 4.5,
    },
    {
      id: 4,
      name: "CaraLes Neo Tree Cardigan",
      image: Cardigan3,
      isEco: true,
      price: 5.98,
      rating: 4.5,
    },
    {
      id: 5,
      name: "Samantha Alvio Lined Sweater",
      image: Cardigan4,
      isEco: true,
      price: 6.59,
      rating: 4.5,
    },
    {
      id: 6,
      name: "H&M Knit Cardigan",
      image: HNM1,
      isEco: false,
      price: 7.99,
      rating: 4.5,
    },
    {
      id: 7,
      name: "CaraLes Neo Tree Cardigan",
      image: Cardigan3,
      isEco: true,
      price: 5.98,
      rating: 4.5,
    },
    {
      id: 8,
      name: "Samantha Alvio Lined Sweater",
      image: Cardigan4,
      isEco: true,
      price: 6.59,
      rating: 4.5,
    },
    {
      id: 9,
      name: "H&M Knit Cardigan",
      image: HNM1,
      isEco: false,
      price: 7.99,
      rating: 4.5,
    },
    {
      id: 10,
      name: "CaraLes Neo Tree Cardigan",
      image: Cardigan3,
      isEco: true,
      price: 5.98,
      rating: 4.5,
    },
  ];

  return (
    <div className="min-h-screen mb-5">
      <FeaturedProducts />
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-5">
        <div className="flex flex-col justify-center w-full">
          <h2 className="Vaimek text-4xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Unisex Sweaters and Cardigans
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Browse
          </p>
        </div>
        <div className="flex justify-between w-full mx-auto items-center">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Showing 1 to 10 products out of 10 products
          </p>
          <button className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl capitalize w-1/4 pt-2 pb-1 border-b-2 active:bg-[#f7f7f7] transition-colors duration-200 ease-in-out">
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
        <div className="flex flex-wrap gap-2 mt-5 w-fit items-center m-auto pl-2.5 sm:pl-6 md:pl-8 lg:pl-12 xl:pl-16">
          {FinalItems.map((item) => (
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
      </div>
    </div>
  );
}