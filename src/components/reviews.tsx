import ReviewList from "@/components/grid/reviewCardGrid";

export default function Reviews() {
  return (
    <div>
      <div className="text-5xl flex justify-between items-end scale-90 text-gray-900 font-bold  mt-5 m-4">
        <div className="flex flex-col ">
          <span style={{ fontFamily: "Righteous" }}>REVIEWS</span>
        </div>
        <button
          style={{ fontFamily: "Righteous" }}
          className="bg-[#4A69E2] text-white rounded-xl  h-12 w-38 mt-4 text-sm tracking-widest"
        >
          SEE ALL
        </button>
      </div>
      <div>
        <ReviewList />
      </div>
    </div>
  );
}
