import React from "react";

interface TestimonialCardProps {
  name: string;
  avatar: string;
  message: string;
  ratings: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  avatar,
  message,
  ratings,
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white border rounded-lg overflow-hidden">
      <div className="flex items-center px-6 pt-4">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src={avatar}
          alt={`${name}'s avatar`}
        />
        <div className="ml-4">
          <h2 className="text-md font-semibold text-gray-800">{name}</h2>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-3 h-3 fill-current ${
                  i < ratings ? "text-yellow-500" : "text-gray-300"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-sm">{message}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
