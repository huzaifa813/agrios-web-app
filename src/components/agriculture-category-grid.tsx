"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  { id: 1, title: "Easy Harvesting", image: "/project-06-370x570.webp.png" },
  { id: 2, title: "Agriculture Farming", image: "/project-05-370x570.webp.png" },
  { id: 3, title: "Ecological Farming", image: "/project-04-370x570.webp.png" },
  { id: 4, title: "Organic Solutions", image: "/project-03-370x570.webp.png" },
  { id: 5, title: "Fresh Products", image: "/project-02-370x570.webp.png" },
  { id: 6, title: "Healthy Food", image: "/project-01-370x570.webp.png" },
];

export default function AgricultureCategoryGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link href={`/project-details`} key={category.id} passHref>
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
              {/* Background Image Covering Full Area */}
              <div className="absolute inset-0">
                <Image
                  src={category.image}
                  alt={category.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "manrope",
                  fontWeight: "800",
                }}
                className="absolute bottom-4 left-4 text-white text-xl font-semibold z-10"
              >
                {category.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
