type LetrasGigantesProps = {
  text1: string;
  text2: string;
  color?: string;
  className?: string;
};

export default function LetrasGigantes({
  text1,
  text2,
  color,
  className = "",
}: LetrasGigantesProps) {
  return (
    <div className={`w-full  ${className}`}>
      <div className="flex justify-center min-w-max m-20">
        <div
          style={{ fontFamily: "Righteous" }}
          className="flex items-baseline whitespace-nowrap gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-12"
        >
          <span
            className="
            text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-[190px] xl:text-[225px]
            font-bold leading-none tracking-tighter text-gray-900
          "
          >
            {text1}
          </span>
          <span
            style={{ color }}
            className="
              text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-[150px] xl:text-[225px]
              font-bold leading-none tracking-tighter
            "
          >
            {text2}
          </span>
        </div>
      </div>
    </div>
  );
}
