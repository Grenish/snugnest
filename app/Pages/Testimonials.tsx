import TestimonialCard from "./components/TestimonialCard";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "James",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      message:
        "My SnugNest cardigan is a game-changer. It’s perfect for layering during the cooler months, and the fit is just right. The attention to detail and the quality of the knit make it a standout piece in my collection.",
      ratings: 5,
    },
    {
      id: 2,
      name: "Emma",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      message:
        "I absolutely love my SnugNest cardigan! It's incredibly soft and keeps me warm on chilly days. The quality is fantastic, and it pairs perfectly with everything in my wardrobe. I've received so many compliments!",
      ratings: 4,
    },
    {
      id: 3,
      name: "Sophie",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      message:
        "SnugNest cardigans are my go-to for both comfort and style. I can dress them up for a night out or wear them casually at home. The craftsmanship is top-notch, and I feel great every time I wear one.",
      ratings: 4,
    },
    {
      id: 4,
      name: "Michael",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      message:
        "I was looking for a high-quality cardigan and SnugNest delivered beyond my expectations. It's warm, stylish, and incredibly comfortable. It’s become a staple in my wardrobe, and I highly recommend it to anyone.",
      ratings: 5,
    },
  ];

  return (
    <div className="bg-[#f7f7f7] p-5">
      <div className="flex flex-col items-center justify-center mb-5">
        <div className="flex flex-col items-center justify-center">
          <h2 className="Vaimek text-4xl md:text-5xl xl:text-6xl">
            Testimonials
          </h2>
          <p className="text-xs md:text-xs xl:text-md">
            See what our customers have to say about their SnugNest cardigans.
          </p>
        </div>
      </div>
      <div className="  px-2 md:px-2 sm:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            avatar={testimonial.avatar}
            message={testimonial.message}
            ratings={testimonial.ratings}
          />
        ))}
      </div>
    </div>
  );
}
