import Hero from "@/components/home/Hero";
import Manifesto from "@/components/home/Manifesto";
import NextRun from "@/components/home/NextRun";
import RunTypes from "@/components/home/RunTypes";
import MovingLagos from "@/components/home/MovingLagos";
import PeopleOfEko from "@/components/home/PeopleOfEko";
import Stats from "@/components/home/Stats";
import RunMap from "@/components/home/RunMap";
import Gallery from "@/components/home/Gallery";
import Partners from "@/components/home/Partners";
import FinalCTA from "@/components/home/FinalCTA";

// Re-evaluate the schedule regularly so a completed event is replaced by the
// next future record without requiring a deployment.
export const revalidate = 60;

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <NextRun />
      <RunTypes />
      <MovingLagos />
      <PeopleOfEko />
      <Stats />
      <RunMap />
      <Gallery />
      <Partners />
      <FinalCTA />
    </>
  );
}
