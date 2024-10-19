import Footer from "@/components/landingPage/Footer";
import HeroSection from "@/components/landingPage/HeroSection";
import Companies from "@/components/landingPage/Companies";
import Functionnalities from "@/components/landingPage/Functionnalities";
import Dashboard from "@/components/landingPage/Dashboard";
import KnowMore from "@/components/landingPage/KnowMore";
import HowItWorks from "@/components/landingPage/HowItWorks";

export default function Home() {
	return (
        <div className=" bg-[#F9FAFC] w-full h-full flex flex-col overflow-y-scroll gap-20">
			<HeroSection />
			<Companies />
			<Functionnalities />
			<Dashboard />
			<div className=" flex flex-col bg-[#12141D]">
				<KnowMore />
				{/* <HowItWorks /> */}
				<Footer />
			</div>
		</div>
	);
}
