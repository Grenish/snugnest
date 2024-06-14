export default function ProductDetail() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <img
            src="https://ipfs.filebase.io/ipfs/QmNiHmv1Hk57ywY6Xit5CRMJc8BCSG1Rvt2mszEEPxn8N8"
            alt="Product Image"
            className="w-full h-auto sm:h-[650px] object-cover rounded-md"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4">
            MANGO Self-Design Cardigan
          </h1>
          <div className="text-lg font-medium mb-2">
            ₹2511 <span className="text-gray-500 line-through">MRP ₹2790</span>
            <span className="bg-green-500 text-white px-2 py-1 rounded-sm">
              10% OFF
            </span>
          </div>
          <p className="text-gray-600 mb-4">inclusive of all taxes</p>
          <div className="mb-4">
            <h2 className="text-xl font-medium mb-2">Select Size</h2>
            <div className="flex gap-2">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-4 py-2 rounded-md">
                XS
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-4 py-2 rounded-md">
                S
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-4 py-2 rounded-md">
                M
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-4 py-2 rounded-md">
                L
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-4 py-2 rounded-md">
                XL
              </button>
            </div>
          </div>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-md">
            Add to Bag
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-4 py-2 rounded-md">
            Wishlist
          </button>
          <div className="mt-6">
            <h2 className="text-xl font-medium mb-2">Delivery Options</h2>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter pincode"
                className="border border-gray-300 rounded-md px-3 py-2"
              />
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-4 py-2 rounded-md">
                Check
              </button>
            </div>
            <p className="text-gray-600 mt-2">
              Please enter PIN code to check delivery time & Pay on Delivery
              Availability
            </p>
          </div>
          <div className="mt-4">
            <p className="text-gray-600">100% Original Products</p>
            <p className="text-gray-600">Pay on delivery might be available</p>
            <p className="text-gray-600">Easy 7 days returns and exchanges</p>
          </div>
        </div>
      </div>
    </div>
  );
}
