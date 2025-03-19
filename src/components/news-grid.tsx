"use client";

import { Colors } from "@/utils/Colors";
import Image from "next/image";

const newsData = [
  {
    id: 1,
    title: "Bringing Food Production Back To Cities",
    author: "Kevin Martin",
    comments: 1,
    date: "05 July 2022",
    image: "/dimg10.png",
  },
  {
    id: 2,
    title: "The Future of Farming, Smart Irrigation Solutions",
    author: "Kevin Martin",
    comments: 0,
    date: "05 July 2022",
    image: "/service-06.webp.png",
  },
  {
    id: 3,
    title: "Agronomy and relation to Other Sciences",
    author: "Kevin Martin",
    comments: 0,
    date: "05 July 2022",
    image: "/dummy1.png",
  },
  {
    id: 4,
    title: "We grow products with the organic farming",
    author: "Kevin Martin",
    comments: 0,
    date: "05 July 2022",
    image: "/service-05.webp.png",
  },
  {
    id: 5,
    title: "A Quick Solution to Low Milk Production in Zimbabwe",
    author: "Kevin Martin",
    comments: 0,
    date: "05 July 2022",
    image: "/dimg8.png",
  },
  {
    id: 6,
    title: "Winter wheat harvest organic gather nice moment",
    author: "Kevin Martin",
    comments: 0,
    date: "05 July 2022",
    image: "/image-02-1.webp.png",
  },
];

export default function NewsGrid() {
  return (
    <div className="flex justify-center">
      <div className="container max-w-screen-lg mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="relative w-full h-56">
                <Image
                  src={news.image}
                  alt={news.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-5 flex flex-col items-center text-center">
                {/* Date Badge */}
                <div className="absolute -mt-8">
                  <span
                    style={{
                      color: Colors.white,
                      fontFamily: "manrope",
                    }}
                    className="bg-green-600 text-white text-xs px-3 py-1 rounded-full"
                  >
                    {news.date}
                  </span>
                </div>
                <div className="text-sm text-gray-500 mt-2 flex items-center space-x-2">
                  <Image
                    src="/user.png"
                    alt="Author"
                    width={14}
                    height={14}
                    className="rounded-full"
                  />
                  <span
                    style={{
                      color: Colors.inactiveGrey,
                      fontFamily: "manrope",
                    }}
                  >
                    {news.author}
                  </span>
                  <Image
                    src="/msg.png"
                    alt="Author"
                    width={14}
                    height={14}
                    className="rounded-full"
                  />
                  <span
                    style={{
                      color: Colors.inactiveGrey,
                      fontFamily: "manrope",
                    }}
                  >
                    {news.comments} Comments
                  </span>
                </div>
                {/* Title */}
                <h3
                  style={{
                    color: Colors.black1,
                    fontFamily: "manrope",
                    fontWeight: "800",
                  }}
                  className="mt-2 text-[22px] text-lg font-semibold text-gray-800"
                >
                  {news.title}
                </h3>

                {/* Author & Comments Section */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
