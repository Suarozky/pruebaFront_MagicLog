import LetrasGigantes from "../components/letrasGigantes";
import FotoBannerPromo from "../components/fotoBannerPromo";
import ProductList from "../components/grid/productCardGrid";
import Categories from "../components/categories";
import Reviews from "../components/reviews";

export default function HomeView() {
  return (
    <div className="flex flex-col gap-4">
      <LetrasGigantes text1="DO IT" text2="RIGHT" color="#4A69E2" />
      <FotoBannerPromo
        image1="/promo/zapatoPromo.svg"
        image2="/promo/zapatoPromo.svg"
        image3="/promo/zapatoPromo.svg"
        title="NIKE AIR MAX"
        descriptionText1="Nike introducing the new air max for "
        descriptionText2="everyone's comfort"
      />
      <div className="text-5xl flex justify-between items-end scale-90 text-gray-900 font-bold  mt-5 m-4">
        <div className="flex flex-col ">
          <span style={{ fontFamily: "Righteous" }}>DROPS</span>
        </div>
        <button className="bg-[#4A69E2] text-white rounded-xl  h-12 w-38 mt-4 text-sm">
          Shop New Drops
        </button>
      </div>
      <div className="flex justify-center items-center mt-5 px-4">
        <ProductList />
      </div>
      <Categories />
      <Reviews />
    </div>
  );
}
