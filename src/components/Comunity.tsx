const Comunity = () => {
	return (
		<div className="flex w-full max-w-[1200px] flex-col gap-[16px] px-[16px] xl:px-0">
			<div className="m-auto flex flex-col gap-[8px] sm:w-[542px]">
				<span className="text-d-grey text-center text-[36px] leading-[44px] font-semibold">
					Manage your entire community in a single system{" "}
				</span>
				<span className="text-grey text-center leading-[24px]">
					Who is Nextcent suitable for?
				</span>
			</div>
			<div className="flex w-full max-w-[1200px] flex-wrap px-[16px] sm:justify-center sm:gap-[30px] xl:justify-between xl:px-0">
				<div className="shadow-3xl flex w-[299px] flex-col items-center gap-[8px] rounded-[8px] py-[24px]">
					<div className="flex flex-col gap-[16px]">
						<img
							src="communities-icon/organization.svg"
							alt="organization icon"
							className="m-auto w-[65px]"
						/>
						<span className="text-d-grey text-center text-[28px] leading-[36px] font-bold">
							Membership Organisations
						</span>
					</div>
					<span className="text-grey w-[251px] text-center text-[14px] leading-[20px] font-normal">
						Our membership management software provides full automation of
						membership renewals and payments
					</span>
				</div>
				<div className="shadow-3xl flex w-[299px] flex-col items-center gap-[8px] rounded-[8px] py-[24px]">
					<div className="flex flex-col gap-[16px]">
						<img
							src="communities-icon/association.svg"
							alt="organization icon"
							className="m-auto w-[65px]"
						/>
						<span className="text-d-grey w-[267px] text-center text-[28px] leading-[36px] font-bold">
							National Associations
						</span>
					</div>
					<span className="text-grey w-[240px] text-center text-[14px] leading-[20px] font-normal">
						Our membership management software provides full automation of
						membership renewals and payments
					</span>
				</div>
				<div className="shadow-3xl flex w-[299px] flex-col items-center gap-[8px] rounded-[8px] py-[24px]">
					<div className="flex flex-col gap-[16px]">
						<img
							src="communities-icon/group.svg"
							alt="organization icon"
							className="m-auto w-[65px]"
						/>
						<span className="text-d-grey w-[230px] text-center text-[28px] leading-[36px] font-bold">
							Clubs And Groups
						</span>
					</div>
					<span className="text-grey w-[251px] text-center text-[14px] leading-[20px] font-normal">
						Our membership management software provides full automation of
						membership renewals and payments
					</span>
				</div>
			</div>
		</div>
	);
};

export default Comunity;
