const Comunity = () => {
	return (
		<div className="flex w-full max-w-[1200px] flex-col gap-[16px] px-[16px] xl:px-0">
			<div className="m-auto flex flex-col gap-[8px] sm:w-[542px]">
				<h2 className="text-center">
					Manage your entire community in a single system{" "}
				</h2>
				<span className="body-2 text-center">
					Who is Nextcent suitable for?
				</span>
			</div>
			<div className="flex w-full max-w-[1200px] flex-wrap px-[16px] sm:justify-center sm:gap-[30px] xl:justify-between xl:px-0">
				<div className="shadow-comunity flex w-[299px] flex-col items-center gap-[8px] rounded-[8px] py-[24px]">
					<div className="flex flex-col gap-[16px]">
						<img
							src="communities-icon/organization.svg"
							alt="organization icon"
							className="m-auto w-[65px]"
						/>
						<h3 className="text-center">Membership Organisations</h3>
					</div>
					<p className="body-3 w-[251px] text-center">
						Our membership management software provides full automation of
						membership renewals and payments
					</p>
				</div>
				<div className="shadow-comunity flex w-[299px] flex-col items-center gap-[8px] rounded-[8px] py-[24px]">
					<div className="flex flex-col gap-[16px]">
						<img
							src="communities-icon/association.svg"
							alt="organization icon"
							className="m-auto w-[65px]"
						/>
						<h3 className="w-[267px] text-center">National Associations</h3>
					</div>
					<p className="body-3 w-[240px] text-center">
						Our membership management software provides full automation of
						membership renewals and payments
					</p>
				</div>
				<div className="shadow-comunity flex w-[299px] flex-col items-center gap-[8px] rounded-[8px] py-[24px]">
					<div className="flex flex-col gap-[16px]">
						<img
							src="communities-icon/group.svg"
							alt="organization icon"
							className="m-auto w-[65px]"
						/>
						<h3 className="w-[230px] text-center">Clubs And Groups</h3>
					</div>
					<p className="body-3 w-[251px] text-center">
						Our membership management software provides full automation of
						membership renewals and payments
					</p>
				</div>
			</div>
		</div>
	);
};

export default Comunity;
