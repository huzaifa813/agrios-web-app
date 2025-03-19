"use client";

import { Colors } from "@/utils/Colors";
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    title: "Bringing Food Production Back To Cities",
    date: "05 July 2022",
    author: "Kevin Martin",
    comments: 1,
    image: "/dimg10.png",
    excerpt:
      "Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you",
    link: "/blog/bringing-food-production",
  },
  {
    title: "The Future of Farming, Smart Irrigation Solutions",
    date: "05 July 2022",
    author: "Kevin Martin",
    comments: 2,
    image: "/dimg11.png",
    excerpt:
      "Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you",
    link: "/blog/future-of-farming",
  },
  {
    title: "The Future of Farming, Smart Irrigation Solutions",
    date: "05 July 2022",
    author: "Kevin Martin",
    comments: 2,
    image: "/dimg12.png",
    excerpt:
      "Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some injected or words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you",
    link: "/blog/future-of-farming",
  },
];

const latestPosts = [
  {
    author: "Kevin Martin",
    title: "Bringing Food Production Back To Cities",
    image: "/dimg10.png",
  },
  {
    author: "Kevin Martin",
    title: "The Future of Farming, Smart Irrigation Solutions",
    image: "/dimg11.png",
  },
  {
    author: "Kevin Martin",
    title: "Agronomy and relation to Other Sciences",
    image: "/dimg12.png",
  },
];

const categories = [
  "Agriculture",
  "Farm",
  "Farming",
  "Fresh Vegetables",
  "Harvest",
  "Organic Food",
];

const tags = ["Agriculture", "Farming", "Harvest", "Organic", "Vegetables"];

export default function BlogListing() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Blog Posts Section */}
      <div className="lg:col-span-2 space-y-10">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white overflow-hidden border-b-4 border-gray-300"
            style={{ borderBottomWidth: 1, borderColor: Colors.borderGrey }}
          >
            {/* Blog Image with Date Overlay */}
            <div className="relative">
              <Image
                src={blog.image}
                alt={blog.title}
                width={800}
                height={400}
                className="w-full h-72 object-cover"
              />
              {/* Date Badge on Image */}
              <span
                style={{
                  fontFamily: "manrope",
                }}
                className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1 rounded-md text-sm"
              >
                {blog.date}
              </span>
            </div>

            {/* Blog Content */}
            <div className="p-6">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                {/* Author */}
                <span className="flex items-center space-x-1">
                  <Image src="/user.png" alt="User" width={16} height={16} />
                  <span
                    style={{
                      fontFamily: "manrope",
                    }}
                  >
                    By {blog.author}
                  </span>
                </span>

                {/* Comments */}
                <span className="flex items-center space-x-1">
                  <Image src="/msg.png" alt="Comments" width={16} height={16} />
                  <span
                    style={{
                      fontFamily: "manrope",
                    }}
                  >
                    {blog.comments} Comment{blog.comments > 1 ? "s" : ""}
                  </span>
                </span>
              </div>

              <h3
                className="text-2xl font-bold mt-3"
                style={{
                  fontFamily: "manrope",
                }}
              >
                {blog.title}
              </h3>
              <p
                className=" mt-2"
                style={{
                  color: Colors.inactiveGrey,
                  fontFamily: "manrope",
                }}
              >
                {blog.excerpt}
              </p>

              <Link
                style={{
                  fontFamily: "manrope",
                }}
                href={blog.link}
                className="font-semibold mt-8 inline-block hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar Section */}
      <aside className="space-y-8">
        {/* Search Box */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full px-4 py-3 rounded-lg  bg-amber-400  focus:ring-2 focus:ring-yellow-500 outline-none"
          />
        </div>

        {/* Latest Posts */}
        <div
          style={{ backgroundColor: Colors.iconBg }}
          className="bg-white rounded-lg p-5"
        >
          <h4
            className="text-xl font-bold mb-4"
            style={{
              color: Colors.black1,
              fontFamily: "manrope",
              fontWeight: "800",
            }}
          >
            Latest Posts
          </h4>
          <div className="space-y-4">
            {latestPosts.map((post, index) => (
              <div key={index} className="flex items-center space-x-4 group">
                {/* Post Image */}
                <Image
                  src={post.image}
                  alt={post.title}
                  width={60}
                  height={60}
                  className="rounded-md object-cover h-[70px] w-[70px]"
                />

                {/* Post Content */}
                <div className="flex flex-col">
                  {/* Author Section */}
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
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
                      By {post.author}
                    </span>
                  </div>

                  {/* Post Title */}
                  <span
                    style={{
                      color: Colors.black1,
                      fontFamily: "manrope",
                      fontWeight: "800",
                    }}
                    className="text-[14px] text-gray-700 group-hover:text-yellow-600 transition"
                  >
                    {post.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div
          style={{ backgroundColor: Colors.iconBg }}
          className="rounded-lg p-5"
        >
          <h4
            className="text-xl font-bold mb-4"
            style={{
              color: Colors.black1,
              fontFamily: "manrope",
              fontWeight: "800",
            }}
          >
            Categories
          </h4>
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li
                key={index}
                style={{
                  color: Colors.inactiveGrey,
                  fontFamily: "manrope",
                  fontWeight: "500",
                }}
                className="text-gray-700 hover:text-yellow-600 transition cursor-pointer"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div
          style={{ backgroundColor: Colors.iconBg }}
          className="rounded-lg p-5"
        >
          <h4
            className="text-xl font-bold mb-4"
            style={{
              color: Colors.black1,
              fontFamily: "manrope",
              fontWeight: "800",
            }}
          >
            Tags
          </h4>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                style={{
                  backgroundColor: Colors.white,
                  color: Colors.black1,
                  fontFamily: "manrope",
                  fontWeight: "700",
                }}
                key={index}
                className="bg-gray-200 px-3 py-1 rounded-lg text-gray-700 text-sm hover:bg-yellow-500 hover:text-white transition"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
}
