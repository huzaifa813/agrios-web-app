"use client";

import { Colors } from "@/utils/Colors";
import Image from "next/image";
import SimilarProjects from "./similar-projects";

export default function DetailsofProj() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Image Section */}
      <div className="w-full">
        <Image
          src="/imgbg.png" // Update this with the correct image path
          alt="Healthy Food"
          width={1200}
          height={600}
          className="w-full rounded-lg"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
        {/* Left - Main Content */}
        <div className="lg:col-span-2">
          <h2
            className="text-3xl font-bold mb-4"
            style={{
              color: Colors.black1,
              fontFamily: "manrope",
              fontWeight: "800",
            }}
          >
            Healthy Food
          </h2>
          <p
            style={{
              color: Colors.inactiveGrey,
              fontFamily: "manrope",
            }}
            className="text-gray-600 leading-relaxed"
          >
            Neque porro est qui dolorem ipsum quia quaed inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo. Aelites port
            lacus quis enim var sed efficitur turpis gilla sed sit amet finibus
            eros. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>

          <p
            style={{
              color: Colors.black1,
              fontFamily: "manrope",
              fontWeight: "800",
            }}
            className="mt-6 font-semibold"
          >
            Biophilia is the idea that humans possess an innate tendency to seek
            connections with nature.
          </p>

          <p
            style={{
              color: Colors.inactiveGrey,
              fontFamily: "manrope",
            }}
            className="text-gray-600 leading-relaxed mt-2"
          >
            The term translates When an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Aelites port lacus quis enim var
            sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.
          </p>

          <p
            style={{
              color: Colors.inactiveGrey,
              fontFamily: "manrope",
            }}
            className="text-gray-600 leading-relaxed mt-4"
          >
            Neque porro est qui dolorem ipsum quia quaed inventore veritatis et
            quasi architecto beatae vitae dicta sunt explicabo. Aelltes port
            lacus quis enim var sed efficitur turpis gilla sed sit amet finibus
            eros. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. 
          </p>
          <h2
            className="text-2xl font-bold mb-4 mt-4"
            style={{
              color: Colors.black1,
              fontFamily: "manrope",
              fontWeight: "800",
            }}
          >
            Challanges
          </h2>
          <p
            style={{
              color: Colors.black1,
              fontFamily: "manrope",
              fontWeight: "800",
            }}
            className="mt-1 font-bold"
          >
            Nemo enim ipsam voluptatem quia voluptas.
          </p>
          <p
            style={{
              color: Colors.black1,
              fontFamily: "manrope",
              fontWeight: "800",
            }}
            className="mt-1 font-bold"
          >
            Accusamus et iusto odio dignissimos ducimus.
          </p>
          <p
            style={{
              color: Colors.black1,
              fontFamily: "manrope",
              fontWeight: "800",
            }}
            className="mt-1 font-bold"
          >
            Nam liberto tempore, cum soluta nobis est elidend.
          </p>
          <p
            style={{
              color: Colors.black1,
              fontFamily: "manrope",
              fontWeight: "800",
            }}
            className="mt-1 font-bold"
          >
            Accusamus et iusto odio dignissimos ducimus.
          </p>
          <p
            style={{
              color: Colors.inactiveGrey,
              fontFamily: "manrope",
            }}
            className="text-gray-600 leading-relaxed mt-4"
          >
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
            unchanged.
          </p>
        </div>

        {/* Right - Sidebar */}
        <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-yellow-400">
          <h3
            style={{
              color: Colors.inactiveGrey,
              fontFamily: "manrope",
            }}
            className="text-gray-500 text-sm"
          >
            Services:
          </h3>
          <p
            className="text-lg font-bold"
            style={{
              fontFamily: "manrope",
            }}
          >
            Healthy Food
          </p>

          <h3
            style={{
              color: Colors.inactiveGrey,
              fontFamily: "manrope",
            }}
            className="text-gray-500 text-sm mt-4"
          >
            Farmer:
          </h3>
          <p
            style={{
              fontFamily: "manrope",
            }}
            className="font-bold"
          >
            Mike Hardson
          </p>

          <h3
            style={{
              color: Colors.inactiveGrey,
              fontFamily: "manrope",
            }}
            className="text-gray-500 text-sm mt-4"
          >
            Duration:
          </h3>
          <p
            style={{
              fontFamily: "manrope",
            }}
            className="font-bold"
          >
            4.5 Months
          </p>

          <h3
            style={{
              color: Colors.inactiveGrey,
              fontFamily: "manrope",
            }}
            className="text-gray-500 text-sm mt-4"
          >
            Location:
          </h3>
          <p
            style={{
              fontFamily: "manrope",
            }}
            className="font-bold"
          >
            Brooklyn, New York
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-3 mt-5">
            {["x.png", "fb.png", "pintrest.png", "insta.png"].map(
              (icon, index) => (
                <div
                  key={index}
                  className="w-8 h-8 flex items-center justify-center rounded-full"
                  style={{ backgroundColor: Colors.iconBg }}
                >
                  <Image
                    src={`/${icon}`}
                    alt={icon.split(".")[0]}
                    width={16}
                    height={16}
                    className="cursor-pointer hover:opacity-80"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <SimilarProjects/>
    </section>
  );
}
