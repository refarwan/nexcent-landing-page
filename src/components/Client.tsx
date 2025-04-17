const Client = () => {
	return (
		<div className="flex w-full max-w-[1200px] flex-col gap-[16px] px-[16px] sm:px-[100px] xl:px-0">
			<div className="flex flex-col gap-[8px]">
				<h2 className="text-center">Our Clients</h2>
				<span className="body-2 text-center">
					We have been working with some Fortune 500+ clients
				</span>
			</div>
			<div className="flex w-full flex-wrap items-center justify-center gap-[30px] sm:justify-between">
				<img src="clients-logo/logo-0.svg" alt="logo client 1" />
				<img src="clients-logo/logo-1.svg" alt="logo client 2" />
				<img src="clients-logo/logo-2.svg" alt="logo client 3" />
				<img src="clients-logo/logo-3.svg" alt="logo client 4" />
				<img src="clients-logo/logo-4.svg" alt="logo client 5" />
				<img src="clients-logo/logo-5.svg" alt="logo client 6" />
			</div>
		</div>
	);
};

export default Client;
