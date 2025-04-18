import { useState } from "react";
import { BurgerIcon } from "./Icons";

const Header = () => {
	const [showMobileNavbar, setShowMobileNavbar] = useState<boolean>(false);

	return (
		<header className="bg-silver flex h-[84px] items-center">
			<div className="m-auto flex w-full items-center justify-between px-[16px] xl:w-[1200px]">
				<a
					href="/"
					className="focus:border-l-grey focus:rounded-[2px] focus:border"
				>
					<img src="/logo.svg" className="h-[24px]" alt="Logo" />
				</a>
				<div
					className={`${showMobileNavbar ? "visible" : "invisible"} fixed top-0 left-0 z-10 flex h-dvh w-screen gap-[50px] bg-black/50 xl:visible xl:relative xl:top-[unset] xl:left-[unset] xl:h-max xl:w-max xl:bg-[unset]`}
					onClick={() => setShowMobileNavbar(false)}
				>
					<nav
						onClick={(event) => {
							event.stopPropagation();
						}}
						className={
							"bg-silver fixed flex h-dvh w-[280px] flex-col overflow-x-hidden overflow-y-auto px-[8px] py-[8px] pb-[20px] duration-75 xl:relative xl:h-max xl:w-max xl:flex-row xl:bg-[unset] xl:p-0" +
							(showMobileNavbar ? " right-0" : " right-[-280px] xl:right-0")
						}
					>
						<div className="flex flex-col gap-[8px] xl:flex-row xl:items-center xl:gap-[50px]">
							<a
								href="/"
								className="focus:border-l-grey hover:underlineblock h-[40px] px-[16px] leading-[40px] font-medium hover:underline focus:rounded-[2px] focus:border focus:underline active:border-0 xl:h-max xl:px-0 xl:leading-[unset]"
							>
								Home
							</a>
							<a
								href="/"
								className="focus:border-l-grey block h-[40px] px-[16px] leading-[40px] hover:underline focus:rounded-[2px] focus:border focus:underline active:border-0 xl:h-max xl:px-0 xl:leading-[unset]"
							>
								Service
							</a>
							<a
								href="/"
								className="focus:border-l-grey block h-[40px] px-[16px] leading-[40px] hover:underline focus:rounded-[2px] focus:border focus:underline active:border-0 xl:h-max xl:px-0 xl:leading-[unset]"
							>
								Feature
							</a>
							<a
								href="/"
								className="focus:border-l-grey block h-[40px] px-[16px] leading-[40px] hover:underline focus:rounded-[2px] focus:border focus:underline active:border-0 xl:h-max xl:px-0 xl:leading-[unset]"
							>
								Product
							</a>
							<a
								href="/"
								className="focus:border-l-grey block h-[40px] px-[16px] leading-[40px] hover:underline focus:rounded-[2px] focus:border focus:underline active:border-0 xl:h-max xl:px-0 xl:leading-[unset]"
							>
								Testimonial
							</a>
							<a
								href="/"
								className="focus:border-l-grey block h-[40px] px-[16px] leading-[40px] hover:underline focus:rounded-[2px] focus:border focus:underline active:border-0 xl:h-max xl:px-0 xl:leading-[unset]"
							>
								FAQ
							</a>
						</div>
						<div className="mt-auto flex justify-center gap-[14px] xl:mt-[unset] xl:ml-[125px]">
							<a
								href="/"
								className="text-primary active:bg-tint-5 focus:border-d-grey flex h-[40px] w-[77px] items-center justify-center rounded-[6px] focus:border-2"
							>
								Login
							</a>
							<a
								href="/"
								className="bg-primary focus:border-d-grey active:bg-shade-2 flex h-[40px] w-[91px] items-center justify-center rounded-[6px] text-white focus:border-2"
							>
								Sign up
							</a>
						</div>
					</nav>
				</div>

				<button
					type="button"
					className="cursor-pointer xl:hidden"
					onClick={() => {
						setShowMobileNavbar(true);
					}}
				>
					<BurgerIcon size={24} />
				</button>
			</div>
		</header>
	);
};

export default Header;
