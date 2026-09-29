import Hero from "@/components/home/Hero";
import Manifesto from "@/components/home/Manifesto";
import NextRun from "@/components/home/NextRun";
import RunTypes from "@/components/home/RunTypes";
import MovingLagos from "@/components/home/MovingLagos";

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
    </>
  );
}
