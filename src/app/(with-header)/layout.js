import Header from "@/components/Header";

export default function HeaderLayout({ children }) {
	return (
		<div className=" w-full h-full py-5 px-10">
			<Header />
			<div className=" h-[93%]">
				{children}
			</div>
		</div>
	);
}
