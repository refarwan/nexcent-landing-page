import { RightIcon } from "./Icons";

const Customers = () => {
	return (
		<div className="bg-silver flex flex-col items-center gap-[20px] px-[16px] py-[32px] xl:flex-row xl:px-[144px]">
			<img
				src="/tesla.png"
				alt="tesla logo"
				className="w-[200px] sm:w-[300px] xl:w-[326px]"
			/>
			<div className="flex flex-col gap-[32px]">
				<div className="flex flex-col gap-[16px]">
					<p className="body-2 font-medium">
						Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
						lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
						enim metus. Vivamus sed libero ornare, tristique quam in, gravida
						enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
						at ligula molestie, nec molestie mi blandit. Suspendisse cursus
						tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
						eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
						Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
						Quisque vulputate odio neque, eget efficitur libero condimentum id.
						Curabitur id nibh id sem dignissim finibus ac sit amet magna.
					</p>
					<div className="flex flex-col gap-[8px]">
						<h4>Tim Smith</h4>
						<span className="body-2">
							British Dragon Boat Racing Association
						</span>
					</div>
				</div>

				<div className="flex flex-col justify-between sm:flex-row">
					<div className="flex flex-wrap gap-x-[41px]">
						<img src="clients-logo/logo-0.svg" alt="logo client 1" />
						<img src="clients-logo/logo-1.svg" alt="logo client 2" />
						<img src="clients-logo/logo-2.svg" alt="logo client 3" />
						<img src="clients-logo/logo-3.svg" alt="logo client 4" />
						<img src="clients-logo/logo-4.svg" alt="logo client 5" />
						<img src="clients-logo/logo-5.svg" alt="logo client 6" />
					</div>
					<a
						href="/"
						className="text-primary link flex h-[44px] w-max items-center gap-[8px] px-[8px]"
					>
						<span>Meet all customers</span>
						<RightIcon />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Customers;
