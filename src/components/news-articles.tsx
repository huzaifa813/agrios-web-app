"use client";

import Image from "next/image";

const articles = [
  {
    id: 1,
    title: "Bringing Food Production Back To Cities",
    date: "05 July 2022",
    author: "Kevin Martin",
    comments: 1,
    image: "/newsImg2.png",
  },
  {
    id: 2,
    title: "Agronomy and relation to Other Sciences",
    date: "05 July 2022",
    author: "Kevin Martin",
    comments: 0,
    image: "/newsImg1.png",
  },
  {
    id: 3,
    title: "Agronomy and relation to Other Sciences",
    date: "05 July 2022",
    author: "Kevin Martin",
    comments: 0,
    image: "/newsImg1.png",
  },
];

export default function NewsArticles() {
  return (
    <section className="container mx-auto px-4 py-12 text-center">
      {/* Blog Section Icon (Replaces 'From The Blog' text) */}
      <div className="flex justify-center">
        <Image
          src="/from-the-blog.png" // Replace this with the actual path
          alt="Blog Icon"
          width={150} // Adjust size as needed
          height={200}
        />
      </div>

      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
        News & Articles
      </h2>

      {/* Articles Grid */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {articles.map((article) => (
          <div
            key={article.id}
            className="relative bg-white rounded-[10px] shadow-md overflow-hidden w-[370px] transition-transform duration-300 transform hover:scale-105"
          >
            {/* Image Container */}
            <div className="relative w-full h-[200px]">
              {/* Date Positioned Below Image */}
              <div className="absolute top-[190px] left-1/2 -translate-x-1/2 bg-green-600 text-white text-sm px-3 py-1 rounded-md shadow-md z-10">
                {article.date}
              </div>

              <Image
                src={article.image}
                alt={article.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-[10px]"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Author & Comments (Centered with Gap) */}
              <div className="flex items-center justify-center text-gray-500 text-sm mt-2 gap-6">
                {/* Author */}
                <div className="flex items-center gap-2">
                  <Image
                    src={"/user.png"}
                    alt={"user"}
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <span>{article.author}</span>
                </div>

                {/* Comments */}
                <div className="flex items-center gap-2">
                  <Image
                    src={"/msg.png"}
                    alt={"msg"}
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <span>{article.comments} Comments</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-3 text-lg font-semibold text-gray-900">
                {article.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
