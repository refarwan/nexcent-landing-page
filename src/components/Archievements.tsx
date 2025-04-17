const Archievements = () => {
	return (
		<div className="bg-silver flex w-full flex-col gap-[50px] px-[16px] py-[64px] sm:items-center xl:flex-row xl:justify-center">
			<div className="flex flex-col gap-[8px] sm:w-[540px]">
				<h2 className="xl:w-[380px]">
					Helping a local{" "}
					<span className="text-primary">business reinvent itself</span>
				</h2>
				<p className="body-2">
					We reached here with our hard work and dedication
				</p>
			</div>
			<div className="flex flex-col gap-x-[30px] gap-y-[40px] sm:grid sm:grid-cols-2 sm:grid-rows-2">
				<div className="flex gap-[16px]">
					<img
						src="/archievement-icons/member-icon.png"
						alt="member icon"
						className="h-[48px] w-[48px]"
					/>
					<div>
						<h3>2,245,341</h3>
						<span className="body-2">Members</span>
					</div>
				</div>
				<div className="flex gap-[16px]">
					<img
						src="/archievement-icons/club-icon.png"
						alt="member icon"
						className="h-[48px] w-[48px]"
					/>
					<div>
						<h3>46,328</h3>
						<span className="body-2">Clubs</span>
					</div>
				</div>
				<div className="flex gap-[16px]">
					<img
						src="/archievement-icons/event-icon.png"
						alt="member icon"
						className="h-[48px] w-[48px]"
					/>
					<div>
						<h3>828,867</h3>
						<span className="body-2">Event Bookings</span>
					</div>
				</div>
				<div className="flex gap-[16px]">
					<img
						src="/archievement-icons/payment-icon.png"
						alt="payment icon"
						className="h-[48px] w-[48px]"
					/>
					<div>
						<h3>1,926,436</h3>
						<span className="body-2">Payments</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Archievements;
