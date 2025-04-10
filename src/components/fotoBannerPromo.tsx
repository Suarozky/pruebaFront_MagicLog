/* eslint-disable @next/next/no-img-element */
type FotoBannerPromoProps = {
  image1: string;
  image2: string;
  image3: string;
  title?: string;
  descriptionText1: string;
  descriptionText2: string;
};

export default function FotoBannerPromo({
  image1,
  image2,
  image3,
  title,
  descriptionText1,
  descriptionText2,
}: FotoBannerPromoProps) {
  return (
    <div className="flex justify-center items-center mt-5 px-4 scale-95">
      <div
        className="w-full max-w-[1200px] h-[500px] md:h-[600px] lg:h-[700px] bg-cover bg-center shadow-sm rounded-3xl flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="flex flex-col items-start justify-start h-full w-full">
          <div className="w-10 md:w-12 rounded-br-2xl  h-40 md:h-52 rounded-tl-2xl rounded-tr-2xl">
            <div className="bg-black w-full h-full rounded-br-2xl rounded-tl-2xl rounded-tr-2xl"></div>
          </div>
          <div
            style={{ fontFamily: "Righteous" }}
            className="flex flex-col md:flex-row h-full w-full tracking-widest"
          >
            {/* Texto principal */}
            <div className="w-full flex flex-col justify-center px-4 md:px-10">
              <span className="text-3xl md:text-5xl lg:text-6xl font-bold">
                {title}
              </span>
              <div className="flex flex-col mt-2 text-base md:text-xl lg:text-2xl">
                <span>{descriptionText1}</span>
                <span>{descriptionText2}</span>
              </div>
              <button className="bg-[#4A69E2] text-white rounded-lg h-10 md:h-12 w-28 md:w-32 mt-4 text-sm">
                SHOP NOW
              </button>
            </div>

            {/* Imágenes */}
            <div className="w-full flex justify-center md:justify-end items-center mt-6 md:mt-0 px-4 md:px-0">
              <div className="flex md:flex-col gap-4">
                <img
                  src={image2}
                  alt="Limited Time Offer"
                  className="h-24 w-24 md:h-32 md:w-32 border-2 object-cover border-white rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-300"
                />
                <img
                  src={image3}
                  alt="Limited Time Offer"
                  className="h-24 w-24 md:h-32 md:w-32 border-2 object-cover border-white rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
