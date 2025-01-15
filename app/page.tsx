import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/Card/card";
import { AutoCarousel } from "@/components/Carousel/AutoCarousel";
import { TestimonialSection } from "@/components/TestimonialSection/TestimonialSection";
import { PawPrint } from "lucide-react";

const features = [
  {
    icon: <PawPrint />,
    title: "Boarding",
    description:
      "We offer dog boarding services where guests can play during the day while sleeping comfortably at night. Each boarding guest has a private kennel that is cozy, clean and climate-controlled.",
  },
  {
    icon: <PawPrint />,
    title: "Training",
    description: (
      <p>
        For years our boarding clients have asked us to provide dog training
        services. Click{" "}
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#e0bf85] hover:text-[#BCA97E]"
        >
          Here
        </a>{" "}
        to find out more about our dog training services for your dog! Training
        can be a game changer!
      </p>
    ),
  },
  {
    icon: <PawPrint />,
    title: "Grooming",
    description:
      "Our grooming services are designed to keep your dog looking and feeling their best. From baths and haircuts to nail trimming and ear cleaning, our experienced groomers provide gentle care tailored to your dog's unique needs. Let us pamper your pup for a fresh, clean, and happy look!",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* Features Section */}
      <section className="w-full lg:w-3/4 mx-auto">
        <h1 className="text-6xl text-center text-[#e0bf85] mt-16">
          Dogs Day Away
        </h1>
        <h3 className="text-2xl text-center mt-2 mb-16 text-[#e0bf85]">
          Dog boarding, training, and grooming in Kyle, TX
        </h3>
        <AutoCarousel className="mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <span className="text-[#e0bf85]">{feature.icon}</span>
                <CardTitle className="text-[#e0bf85] text-2xl">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mx-auto mt-16 w-full text-sm text-gray-500">
          At Dogs Day Away we plan each day to ensure that we deliver the
          highest quality fun to every dog in our care. We strive to take care
          of your dog as we take care of our own. We recognize that staying away
          from home can be a strain on our beloved pets, and can cause stress
          and worry for their parents. It is our goal to make your dog feel “at
          home” and provide the finest care possible. For many, leaving a dog in
          someone else’s care is like leaving a child, and we at Dogs Day Away
          understand this and take that responsibility very seriously.{" "}
          <span className="text-black font-bold">
            All guests must also provide proof of current vaccinations
          </span>{" "}
          including Rabies, DHPP, and Bordetella. This is to ensure the safety
          of all guests.
        </p>
        <h2 className="text-[#e0bf85] text-3xl text-center mt-16 flex items-center justify-center gap-2">
          <PawPrint />
          Proudly serving the Kyle, San Marcos, Buda, and Austin areas.
        </h2>
        {/* Testimonial Section */}
        <TestimonialSection />
      </section>
    </div>
  );
}
