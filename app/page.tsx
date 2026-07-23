import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Collaborations from "@/components/collaborations/Collaborations";
import Showcase from "@/components/home/Showcase";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Collaborations />
      <Showcase />
    </>
  );
}