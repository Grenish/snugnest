"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Input } from "@nextui-org/input";
import NavBar from "./NavBar";

// Mock data for products
const products = [
  {
    id: 1,
    name: "CaraLes Neo Tree Cardigan",
    image:
      "https://ipfs.filebase.io/ipfs/QmNiHmv1Hk57ywY6Xit5CRMJc8BCSG1Rvt2mszEEPxn8N8",
    isEco: true,
    price: 5.98,
    rating: 4.5,
    MRP: 9.99,
    discountPercentage: 40,
  },
  {
    id: 2,
    name: "Samantha Alvio Lined Sweater",
    image:
      "https://ipfs.filebase.io/ipfs/QmdE3fheNdJRQwonWtMb9nZ5DaGaENic1aL4aw3pJBR4Te",
    isEco: true,
    price: 6.59,
    rating: 4.5,
    MRP: 10.99,
    discountPercentage: 40,
  },
  {
    id: 3,
    name: "H&M Knit Cardigan",
    image:
      "https://ipfs.filebase.io/ipfs/QmNiHmv1Hk57ywY6Xit5CRMJc8BCSG1Rvt2mszEEPxn8N8",
    isEco: false,
    price: 7.99,
    rating: 4.5,
    MRP: 13.32,
    discountPercentage: 40,
  },
  {
    id: 4,
    name: "CaraLes Neo Tree Cardigan",
    image:
      "https://ipfs.filebase.io/ipfs/QmVsS4SJ7BAeNhb7qdxjjX7zSEoY3wQWHs7LR7skRXF7Zx",
    isEco: true,
    price: 5.98,
    rating: 4.5,
    MRP: 9.99,
    discountPercentage: 40,
  },
  {
    id: 5,
    name: "Samantha Alvio Lined Sweater",
    image:
      "https://ipfs.filebase.io/ipfs/QmdE3fheNdJRQwonWtMb9nZ5DaGaENic1aL4aw3pJBR4Te",
    isEco: true,
    price: 6.59,
    rating: 4.5,
    MRP: 10.99,
    discountPercentage: 40,
  },
  {
    id: 6,
    name: "H&M Knit Cardigan",
    image:
      "https://ipfs.filebase.io/ipfs/QmVsS4SJ7BAeNhb7qdxjjX7zSEoY3wQWHs7LR7skRXF7Zx",
    isEco: false,
    price: 7.99,
    rating: 4.5,
    MRP: 13.32,
    discountPercentage: 40,
  },
  {
    id: 7,
    name: "CaraLes Neo Tree Cardigan",
    image:
      "https://ipfs.filebase.io/ipfs/QmNiHmv1Hk57ywY6Xit5CRMJc8BCSG1Rvt2mszEEPxn8N8",
    isEco: true,
    price: 5.98,
    rating: 4.5,
    MRP: 9.99,
    discountPercentage: 40,
  },
  {
    id: 8,
    name: "Samantha Alvio Lined Sweater",
    image:
      "https://ipfs.filebase.io/ipfs/QmdE3fheNdJRQwonWtMb9nZ5DaGaENic1aL4aw3pJBR4Te",
    isEco: true,
    price: 6.59,
    rating: 4.5,
    MRP: 10.99,
    discountPercentage: 40,
  },
  {
    id: 9,
    name: "H&M Knit Cardigan",
    image:
      "https://ipfs.filebase.io/ipfs/QmVsS4SJ7BAeNhb7qdxjjX7zSEoY3wQWHs7LR7skRXF7Zx",
    isEco: false,
    price: 7.99,
    rating: 4.5,
    MRP: 13.32,
    discountPercentage: 40,
  },
  {
    id: 10,
    name: "CaraLes Neo Tree Cardigan",
    image:
      "https://ipfs.filebase.io/ipfs/QmNiHmv1Hk57ywY6Xit5CRMJc8BCSG1Rvt2mszEEPxn8N8",
    isEco: true,
    price: 5.98,
    rating: 4.5,
    MRP: 9.99,
    discountPercentage: 40,
  },
];

interface Product {
  id: number;
  name: string;
  image: string;
  isEco: boolean;
  price: number;
  rating: number;
  MRP: number;
  discountPercentage: number;
}

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  const [pincode, setPincode] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handlePincodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pincodeValue = e.target.value;
    if (pincodeValue.match(/^[0-9]{6}$/)) {
      setPincode(pincodeValue);
      setIsValid(true);
    } else {
      setPincode(pincodeValue);
      setIsValid(false);
    }
  };

  const handleCheck = () => {
    if (isValid) {
      // Call API or perform action with valid pincode
      console.log("Valid pincode:", pincode);
    } else {
      console.log("Invalid pincode");
    }
  };

  useEffect(() => {
    if (typeof id === "string") {
      const foundProduct = products.find(
        (product) => product.id === parseInt(id, 10)
      );
      setProduct(foundProduct || null);
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto sm:h-[650px] object-cover rounded-md"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
            <div className="text-lg font-medium mb-2 flex flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                ${product.price}{" "}
                <span className="text-gray-500 line-through text-sm">
                  MRP ${product.MRP}
                </span>
              </div>
              <span className="bg-green-500 text-white px-2 py-1 rounded-sm text-xs">
                {product.discountPercentage}% OFF
              </span>
            </div>
            <p className="text-gray-600 mb-4 text-xs">inclusive of all taxes</p>
            <div className="mb-4">
              <h2 className="text-xl font-medium mb-2">Select Size</h2>
              <div className="flex gap-2">
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-4 py-2 rounded-full text-sm">
                  XS
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-4 py-2 rounded-full text-sm">
                  S
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-4 py-2 rounded-full text-sm">
                  M
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-4 py-2 rounded-full text-sm">
                  L
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-4 py-2 rounded-full text-sm">
                  XL
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-[#ffcdb2] hover:bg-[#ffb4a2] text-black font-semibold transition-colors duration-250 ease-in-out p-2 w-1/3 rounded-md flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Zm4-74.57A8,8,0,0,1,196.1,136H77.22L65.59,72H214.41Z"></path>
                </svg>
                Add to Cart
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium p-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72h64a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm80,48H40a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16Zm128-40c0,36.52-50.28,62.08-52.42,63.16a8,8,0,0,1-7.16,0C186.28,206.08,136,180.52,136,144a32,32,0,0,1,56-21.14A32,32,0,0,1,248,144Zm-16,0a16,16,0,0,0-32,0,8,8,0,0,1-16,0,16,16,0,0,0-32,0c0,20.18,26.21,39.14,40,46.93C205.79,183.15,232,164.19,232,144Z"></path>
                </svg>
              </button>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-medium mb-2">Delivery Options</h2>
              <div className="flex gap-2">
                <Input
                  type="text"
                  value={pincode}
                  onChange={handlePincodeChange}
                  label="Pincode"
                  maxLength={6}
                  className="w-1/2"
                />
                <button
                  onClick={handleCheck}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-4 py-2 rounded-md"
                >
                  Check
                </button>
              </div>
              {isValid ? (
                <p className="text-green-600 mt-2 text-xs">Pincode is valid</p>
              ) : (
                <p className="text-red-600 mt-2 text-xs">Pincode is invalid</p>
              )}
              <p className="text-gray-600 mt-2 text-xs">
                Please enter PIN code to check delivery time & Pay on Delivery
                Availability
              </p>
              
            </div>
            <div className="mt-4">
              <p className="text-gray-600">100% Original Products</p>
              <p className="text-gray-600">
                Pay on delivery might be available
              </p>
              <p className="text-gray-600">Easy 7 days returns and exchanges</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
