import React from "react";
import { Tooltip } from "@nextui-org/react";

// Define the properties expected by the ProductCard component
interface ProductCardProps {
  title: string; // Title of the product
  image: string; // URL of the product image
  price: number; // Price of the product
  isEco: boolean; // Indicates if the product is eco-friendly
  rating?: number; // Optional rating of the product
}

// ProductCard component definition
const ProductCard: React.FC<ProductCardProps> = ({
  title,
  image,
  price,
  isEco,
  rating,
}) => {
  return (
    <div className="border rounded-lg overflow-hidden sm:w-[250px] w-[180px] sm:h-[370px] h-[350px] bg-white flex flex-col">
      {/* Product image */}
      <img
        src={image}
        alt={title}
        className="w-full sm:h-64 h-56 object-cover"
      />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex justify-between items-center">
            {/* Product title */}
            <h2 className="font-bold sm:text-md text-sm mb-2 capitalize ">
              {title}
            </h2>
            {/* Eco-friendly icon with tooltip */}
            {isEco && (
              <Tooltip content="Eco Friendly" className="text-xs">
                <span className="text-green-500 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M198.1,62.59a76,76,0,0,0-140.2,0A71.71,71.71,0,0,0,16,127.8C15.9,166,48,199,86.14,200A72.09,72.09,0,0,0,120,192.47V232a8,8,0,0,0,16,0V192.47A72.17,72.17,0,0,0,168,200l1.82,0C208,199,240.11,166,240,127.8A71.71,71.71,0,0,0,198.1,62.59ZM169.45,184a56.08,56.08,0,0,1-33.45-10v-41l43.58-21.78a8,8,0,1,0-7.16-14.32L136,115.06V88a8,8,0,0,0-16,0v51.06L83.58,120.84a8,8,0,1,0-7.16,14.32L120,156.94v17a56,56,0,0,1-33.45,10C56.9,183.23,31.92,157.52,32,127.84A55.77,55.77,0,0,1,67.11,76a8,8,0,0,0,4.53-4.67,60,60,0,0,1,112.72,0A8,8,0,0,0,188.89,76,55.79,55.79,0,0,1,224,127.84C224.08,157.52,199.1,183.23,169.45,184Z"></path>
                  </svg>
                </span>
              </Tooltip>
            )}
          </div>
        </div>
        <div className="flex justify-between ">
          {/* Product rating */}
          <span className="flex items-center gap-2 sm:text-md text-xs">
            <p>{rating ? rating : 0}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="gold"
              viewBox="0 0 256 256"
              className="w-4 h-4 sm:w-6 sm:h-6 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-4 2xl:h-4"
            >
              <path
                d="M229.06,108.79l-48.7,42,14.88,62.79a8.4,8.4,0,0,1-12.52,9.17L128,189.09,73.28,222.74a8.4,8.4,0,0,1-12.52-9.17l14.88-62.79-48.7-42A8.46,8.46,0,0,1,31.73,94L95.64,88.8l24.62-59.6a8.36,8.36,0,0,1,15.48,0l24.62,59.6L224.27,94A8.46,8.46,0,0,1,229.06,108.79Z"
                opacity="0.2"
              ></path>
              <path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"></path>
            </svg>
          </span>
          {/* Product price */}
          <p className="text-gray-700 sm:text-md text-xs">
            ${price.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
