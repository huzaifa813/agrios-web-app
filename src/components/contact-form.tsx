"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message Sent!"); // Replace with actual submission logic
  };

  return (
    <>
      <section className="w-full max-w-6xl mx-auto py-8 px-4 lg:px-6 flex flex-col lg:flex-row bg-white shadow-md rounded-lg">
        {/* Left Side - Google Map */}
        <div className="w-full lg:w-1/2 h-64 lg:h-auto">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.9737478125636!2d-0.12085082372065198!3d51.50329741325865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c3c0b9a1c1%3A0xe3131a8c0af49c7b!2sLondon%20Eye!5e0!3m2!1sen!2sus!4v1644234642351!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Right Side - Contact Form with Background Image */}
        <div className="w-full lg:w-1/2 bg-[#f8f6eb] bg-[url('/dimgbg.png')] bg-cover bg-center p-5 lg:p-10 rounded-lg">
          {/* Heading */}
          <Image
            src="/Contact us.png"
            alt="Contact Us"
            width={80}
            height={20}
            className="mb-2"
          />
          <h2
            className="text-2xl lg:text-3xl font-bold text-gray-900"
            style={{ fontFamily: "Manrope", fontWeight: "800" }}
          >
            Write a Message
          </h2>

          <form onSubmit={handleSubmit} className="mt-4 space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                style={{ fontFamily: "Manrope", paddingLeft: 16 }}
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full sm:w-1/2 p-2.5 rounded-md  border-gray-300 focus:outline-none bg-white bg-opacity-80"
              />
              <input
                style={{ fontFamily: "Manrope", paddingLeft: 16 }}
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full sm:w-1/2 p-2.5 rounded-md  border-gray-300 focus:outline-none bg-white bg-opacity-80"
              />
            </div>

            <textarea
              style={{ fontFamily: "Manrope", paddingLeft: 16 }}
              name="message"
              placeholder="Write a Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full p-2.5 rounded-md  border-gray-300 focus:outline-none bg-white bg-opacity-80"
            ></textarea>

            <button
              type="submit"
              className="w-full sm:w-auto bg-green-600 text-white py-2.5 px-5 rounded-md hover:bg-green-700 transition text-sm lg:text-base"
              style={{ fontFamily: "Manrope", paddingLeft: 16 }}
            >
              Send a Message
            </button>
          </form>
        </div>
      </section>
      <Image
        src={"/LogoBanner.png"}
        alt="Logo Banner"
        layout="responsive"
        width={1920} // Set a high width to ensure full width
        height={300} // Adjust height to match the design
        className="w-full h-auto"
      />
    </>
  );
}
