import ReviewCard from "@/components/card/reviewCard";

const reviews = [
  {
    title: "Excellent Support",
    descriptionText1: "Customer service was amazing at",
    descriptionText2: " Kicks Inc.",
    stars: 5,
    image: "/product/zapatoReview.svg",
    imageProfile: "/user/ove.svg",
  },
  {
    title: "Fast Delivery",
    descriptionText1: "My order arrived quickly from",
    descriptionText2: " Kicks World.",
    stars: 4,
    image: "/product/zapatoReview2.svg",
    imageProfile: "/user/cato.svg",
  },
  {
    title: "Great Comfort",
    descriptionText1: "Shoes were super comfy from",
    descriptionText2: " Kicks Store.",
    stars: 3,
    image: "/product/zapatoReview3.svg",
    imageProfile: "/user/tibu.svg",
  },
];

export default function ReviewList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 md:px-12 mt-10">
      {reviews.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
    </div>
  );
}
