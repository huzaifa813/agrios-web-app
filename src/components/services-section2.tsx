import { Colors } from "@/utils/Colors";
import Image from "next/image";

const services = [
  {
    title: "Agriculture Products",
    description:
      "Lorem ipsum is simply free available. Aenean leo quam. Pellentesque semornare vestibulum.",
    image: "/service-05.webp.png",
    icon: "/Vector.png",
  },
  {
    title: "Organic Products",
    description:
      "Lorem ipsum is simply free available. Aenean leo quam. Pellentesque semornare vestibulum.",
    image: "/service-06.webp.png",
    icon: "/Vector (1).png",
  },
  {
    title: "Dairy Products",
    description:
      "Lorem ipsum is simply free available. Aenean leo quam. Pellentesque semornare vestibulum.",
    image: "/service-07.webp.png",
    icon: "/Vector (3).png",
  },
];

export default function ServicesSection() {
  return (
    <div
      className="relative w-full py-12 md:py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/wheats.webp.png')" }}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="flex justify-center">
          <Image
            src="/our-services.png"
            alt="Our Services"
            width={140}
            height={35}
            className="mx-auto"
          />
        </div>

        <h2
          className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold text-gray-900 mt-2 text-center"
          style={{ fontFamily: "manrope" }}
        >
          What We Offer
        </h2>

        {/* Card Section */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 
                w-full sm:w-[350px] md:w-[400px] min-h-[380px] flex flex-col"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={200}
                className="w-full h-[180px] sm:h-[200px] object-cover"
              />

              <div className="p-5 flex-1 relative flex flex-col">
                {/* Background Div for Icon */}
                <div
                  className="absolute -top-8 right-6 w-16 h-16 flex items-center justify-center rounded-lg"
                  style={{ backgroundColor: Colors.greenTopBorder2 }}
                >
                  <Image src={service.icon} alt="Icon" width={36} height={36} />
                </div>

                <h3
                  className="text-md sm:text-lg md:text-xl font-bold text-gray-900"
                  style={{ fontFamily: "manrope" }}
                >
                  {service.title}
                </h3>
                <p
                  className="mt-2 text-sm md:text-[15px] text-gray-600 flex-grow"
                  style={{ fontFamily: "manrope", color: Colors.inactiveGrey }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
