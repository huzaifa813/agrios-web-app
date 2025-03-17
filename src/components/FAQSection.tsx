import { Colors } from "@/utils/Colors";
import Image from "next/image";
import { useState } from "react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "World’s hottest destinations for vegans",
      answer:
        "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, molestie ullamcorper vulputate vitae sodales commodo nisl. Nulla facilisi.",
    },
    {
      question: "Let’s grow naturally and live naturally",
      answer:
        "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, molestie ullamcorper vulputate vitae sodales commodo nisl. Nulla facilisi.",
    },
    {
      question: "Best vegetables for your healthy hair",
      answer:
        "Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, molestie ullamcorper vulputate vitae sodales commodo nisl. Nulla facilisi.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between px-6 md:px-12 py-10 gap-10 relative">
      {/* Left Side: Background Image */}
      <div className="relative w-full lg:w-1/2">
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/bgImageFAQ.png"
            alt="Fresh Vegetables"
            width={500}
            height={500}
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

        {/* Floating Image Overlapping */}
        <div
          className="absolute right-4 md:right-38 top-16 md:top-22 w-[80%] md:w-[60%] lg:w-[350px] min-h-[350px] md:min-h-[390px] rounded-lg shadow-md bg-cover bg-center flex items-end"
          style={{ backgroundImage: "url('/image-03.webp.png')" }}
        >
          {/* Centered Bottom Content Box */}
          <div
            style={{ backgroundColor: Colors.greenTopBorder3 }}
            className="absolute bottom-0 left-0 right-0 text-white py-4 px-6 md:px-8 rounded-tl-[30px] rounded-tr-[30px] flex flex-col items-center justify-center text-center"
          >
            <p
              className="text-sm md:text-base font-semibold"
              style={{ fontFamily: "manrope" }}
            >
              Call us anytime
            </p>
            <p
              className="text-lg md:text-xl font-bold"
              style={{ fontFamily: "manrope" }}
            >
              666 888 0000
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: FAQ Section */}
      <div className="relative w-full lg:w-1/2">
        {/* FAQ Content */}
        <div className="relative md:-left-40 top-22 lg:ml-20 w-full">
          <Image
            src="/Frequently Asked Questions.png"
            alt="Frequently Asked Questions"
            width={200}
            height={50}
            className="text-yellow-500 text-sm font-semibold"
          />
          <h2
            className="font-bold mt-2 mb-4 text-[28px] md:text-[40px] lg:text-[48px]"
            style={{ fontFamily: "manrope" }}
          >
            You ve Any Questions
          </h2>

          {/* FAQ Items */}
          <div className="space-y-4 w-full">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg w-full">
                {/* Question Box */}
                <div
                  className="flex items-center justify-between rounded-lg p-4 cursor-pointer transition w-full"
                  style={{ backgroundColor: Colors.iconBg }}
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  <p
                    style={{ fontFamily: "manrope" }}
                    className="text-base md:text-lg font-bold"
                  >
                    {faq.question}
                  </p>
                  <div className="w-8 h-8 ml-2 md:ml-10 bg-lime-500 rounded-md flex items-center justify-center">
                    <span
                      style={{ fontFamily: "manrope" }}
                      className="text-white text-lg md:text-xl"
                    >
                      {activeIndex === index ? "−" : "›"}
                    </span>
                  </div>
                </div>

                {/* Show Answer If Active */}
                {activeIndex === index && (
                  <div className="p-4 rounded-b-lg w-full">
                    <p
                      style={{
                        fontFamily: "manrope",
                        color: Colors.inactiveGrey,
                      }}
                      className="text-sm md:text-base"
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
