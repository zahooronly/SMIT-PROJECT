import CardComponent from "@/components/CardComponent/CardComponent";
import ComponentCarousel from "@/components/Carousel/Carousel";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="container flex gap-5 flex-wrap">
        <CardComponent />
      </div>
    </div>
  );
}
