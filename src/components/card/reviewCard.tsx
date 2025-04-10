/* eslint-disable @next/next/no-img-element */
import { BsStarFill } from "react-icons/bs";

type ReviewCardProps = {
  title: string;
  descriptionText1: string;
  descriptionText2: string;
  stars: number;
  image: string;
  imageProfile?: string;
};

export default function ReviewCard({
  title,
  descriptionText1,
  descriptionText2,
  stars,
  imageProfile,
  image,
}: ReviewCardProps) {
  return (
    <div>
      <div   style={{ fontFamily: "Righteous" }} className="flex h-40 w-96 bg-white rounded-t-3xl mt-8 tracking-wider ">
        <div className="m-4">
          <span className="font-bold text-xl text-black">{title}</span>
          <div className="text-gray-500 text-lg">
            <span>{descriptionText1} </span>
            <span>{descriptionText2}</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-gray-500 text-lg">{stars}</span>
            <span className="text-yellow-400 flex">
              {Array.from({ length: stars }, (_, i) => (
                <BsStarFill key={i} />
              ))}
            </span>
          </div>
        </div>
        <div className="h-14 w-16  rounded-full m-4">
          <img
            className="h-14 w-16  object-cover rounded-b-3xl"
            src={imageProfile}
            alt=""
          />
        </div>
      </div>
      <div className="h-64 w-96 bg-white rounded-b-3xl">
        <img
          className="h-64 w-96 object-cover rounded-b-3xl"
          src={image}
          alt=""
        />
      </div>
    </div>
  );
}
