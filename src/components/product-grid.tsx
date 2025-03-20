"use client";

import { useState } from "react";
import Image from "next/image";
import { Slider } from "@mui/material";
import { Colors } from "@/utils/Colors";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Apples",
    price: 50,
    category: "Organic Food",
    image: "/apples-370x410.jpg.png",
  },
  {
    id: 2,
    name: "Bananas",
    price: 20,
    category: "Organic Food",
    image: "/bananas-370x410.jpg.png",
  },
  {
    id: 3,
    name: "Carrot",
    price: 50,
    category: "Fresh Vegetables",
    image: "/carrot-370x410.jpg.png",
  },
  {
    id: 4,
    name: "Garlic",
    price: 20,
    category: "Fresh Vegetables",
    image: "/garlic-370x410.jpg.png",
  },
  {
    id: 5,
    name: "Grapes",
    price: 100,
    category: "Organic Food",
    image: "/grapes-370x410.jpg.png",
  },
  {
    id: 6,
    name: "Lettuce",
    price: 30,
    category: "Fresh Vegetables",
    image: "/lettuce-370x410.jpg.png",
  },
  {
    id: 7,
    name: "Onions",
    price: 120,
    category: "Fresh Vegetables",
    image: "/onions-370x410.jpg.png",
  },
  {
    id: 8,
    name: "Potatoes",
    price: 150,
    category: "Fresh Vegetables",
    image: "/potatos-370x410.jpg.png",
  },
  {
    id: 9,
    name: "Red Grapes",
    price: 30,
    category: "Organic Food",
    image: "/red-grapes-370x410.jpg.png",
  },
];

const categories = [
  "All",
  "Agriculture",
  "Farming",
  "Fresh Vegetables",
  "Harvest",
  "Organic Food",
];

export default function ProductGrid() {
  const [priceRange, setPriceRange] = useState<number[]>([20, 200]);
  const [tempPriceRange, setTempPriceRange] = useState<number[]>([20, 200]); // Temporary price range
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("default");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleApplyPriceFilter = () => {
    setPriceRange(tempPriceRange); // Apply price filter when button is pressed
  };

  const filteredProducts = products
    .filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    )
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (product) =>
        selectedCategory === "All" || product.category === selectedCategory
    );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "low-high") {
      return a.price - b.price;
    }
    if (sortOrder === "high-low") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row gap-6">
      <div className="md:w-1/4 w-full space-y-6">
        <input
          type="text"
          placeholder="Search products..."
          style={{ backgroundColor: Colors.greenTopBorder3 }}
          className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div
          style={{
            borderWidth: 1,
            borderColor: Colors.borderGrey,
            borderRadius: 10,
          }}
          className="p-4 rounded-md"
        >
          <h3
            style={{
              fontFamily: "manrope",
            }}
            className="font-semibold mb-3"
          >
            Price
          </h3>
          <Slider
            value={tempPriceRange}
            onChange={(_, newValue) => setTempPriceRange(newValue as number[])}
            min={20}
            max={200}
            valueLabelDisplay="auto"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span
              style={{
                fontFamily: "manrope",
              }}
            >
              ${tempPriceRange[0]}
            </span>
            <span
              style={{
                fontFamily: "manrope",
              }}
            >
              ${tempPriceRange[1]}
            </span>
          </div>
          <button
            className="mt-3 bg-green-600 text-white px-4 py-2 rounded-md w-full hover:bg-green-700 transition"
            style={{
              fontFamily: "manrope",
            }}
            onClick={handleApplyPriceFilter} // Apply filter on button press
          >
            Apply
          </button>
        </div>

        <div
          style={{
            borderWidth: 1,
            borderColor: Colors.borderGrey,
            borderRadius: 10,
          }}
          className="p-4 rounded-md"
        >
          <h3
            style={{
              fontFamily: "manrope",
            }}
            className="font-semibold mb-3"
          >
            Categories
          </h3>
          <ul
            style={{
              fontFamily: "manrope",
            }}
            className="space-y-2 text-gray-700"
          >
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex justify-between items-center cursor-pointer"
              >
                <li
                  style={{
                    fontFamily: "manrope",
                  }}
                  className={`hover:text-green-600 ${
                    selectedCategory === category
                      ? "text-green-600 font-bold"
                      : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </li>
                <Image
                  src="/Vector (7).png"
                  alt="Search"
                  width={8}
                  height={8}
                  className="cursor-pointer"
                />
              </div>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <span
            style={{
              fontFamily: "manrope",
            }}
            className="text-gray-600"
          >
            Showing {filteredProducts.length} of {products.length} results
          </span>
          <select
            style={{
              fontFamily: "manrope",
              borderWidth: 1,
              borderColor: Colors.borderGrey,
              borderRadius: 10,
              color: Colors.inactiveGrey,
            }}
            className="p-2 rounded-md py-6 px-4"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option
              style={{
                fontFamily: "manrope",
              }}
              value="default"
            >
              Default sorting
            </option>
            <option
              style={{
                fontFamily: "manrope",
              }}
              value="low-high"
            >
              Price: Low to High
            </option>
            <option
              style={{
                fontFamily: "manrope",
              }}
              value="high-low"
            >
              Price: High to Low
            </option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-lg transition cursor-pointer hover:shadow-lg hover:scale-105"
            >
              <Link href={"Product-Details"}>
                <div className="relative w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="mx-auto object-contain rounded-lg"
                  />
                </div>
                <div className="mt-4 mx-4">
                  <div className="flex justify-between items-center">
                    <h3
                      style={{
                        fontFamily: "manrope",
                      }}
                      className="text-lg font-semibold"
                    >
                      {product.name}
                    </h3>
                    <span
                      style={{
                        fontFamily: "manrope",
                      }}
                      className="text-yellow-500 text-lg"
                    >
                      ⭐
                    </span>
                  </div>
                  <div className="text-green-600 font-medium">
                    ${product.price}.00
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p
            style={{
              fontFamily: "manrope",
            }}
            className="text-left text-gray-500 mt-6"
          >
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}
