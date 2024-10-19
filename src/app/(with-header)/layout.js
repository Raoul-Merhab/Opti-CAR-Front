import Header from "@/components/Header";

export default function HeaderLayout({ children }) {
	return (
		<div className=" w-full md:h-full md:py-5 md:px-10 px-3 py-5">
			<Header />
			<div className=" md:h-[93%]">
				{children}
			</div>
		</div>
	);
}
