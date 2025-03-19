import { Colors } from "@/utils/Colors";
import Image from "next/image";

interface AboutHeaderProps {
  text1: string;
  text2: string;
}

export default function AboutHeader({ text1, text2 }: AboutHeaderProps) {
  return (
    <div className="relative w-full h-64 flex flex-col justify-center items-center text-white bg-cover bg-center">
      {/* Background Image */}
      <Image
        src="/aboutheaderbg.png"
        alt="About Header Background"
        fill={true}
        quality={100}
        className="absolute inset-0 object-cover"
      />

      {/* Breadcrumb */}
      <div className="relative z-10 text-sm uppercase tracking-wide flex gap-2">
        <span
          className="text-[14px]"
          style={{
            color: Colors.lightWhite,
            fontWeight: 500,
            fontFamily: "manrope",
          }}
        >
          Home
        </span>
        <span>/</span>
        <span
          className="text-[14px]"
          style={{
            color: Colors.lightWhite,
            fontWeight: 500,
            fontFamily: "manrope",
          }}
        >
          {text1}
        </span>
      </div>

      {/* Title */}
      <h1
        className="relative z-10 text-3xl font-bold mt-2 text-[50px]"
        style={{ fontWeight: 500, fontFamily: "manrope" }}
      >
        {text2}
      </h1>
    </div>
  );
}
