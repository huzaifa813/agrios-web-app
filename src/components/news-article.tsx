"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const articles = [
  {
    id: 1,
    mainImage: "/dimg4.png",
    overlayImage: "/oimg1.png",
  },
  {
    id: 2,
    mainImage: "/dimg5.png",
    overlayImage: "/oimg2.png",
  },
  {
    id: 3,
    mainImage: "/dimg6.png",
    overlayImage: "/oimg3.png",
  },
];

export default function NewsArticles2() {
  return (
    <section className="py-10 px-4 lg:px-12">
      {/* Heading */}
      <div className="text-center mb-8">
        <Image
          src="/from-the-blog.png"
          alt="Our Recent Work"
          width={150}
          height={30}
          className="mx-auto"
        />
        <h2
          className="text-3xl md:text-4xl font-bold text-gray-900"
          style={{ fontFamily: "manrope",fontWeight:'800' }}
        >
          News & Articles
        </h2>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {articles.map((article) => (
          <motion.div
            key={article.id}
            className="relative w-full sm:w-[300px] md:w-[350px] lg:w-[369px] h-[480px] md:h-[514px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: article.id * 0.1 }}
          >
            {/* Main Image */}
            <Image
              src={article.mainImage}
              alt="Article Image"
              width={369}
              height={514}
              className="w-full h-full object-cover"
            />

            {/* Overlay Image */}
            <div className="absolute bottom-0 right-0">
              <Image
                src={article.overlayImage}
                alt="Overlay Image"
                width={150}
                height={100}
                className="w-[140px] h-[200px] md:w-[169px] md:h-[214px] shadow-lg"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
