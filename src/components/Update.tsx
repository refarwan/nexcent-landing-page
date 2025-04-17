import { RightIcon } from "./Icons";

const Update = () => {
	return (
		<div className="flex flex-col gap-[16px] px-[16px]">
			<div className="flex flex-col gap-[8px]">
				<h2 className="text-center">Caring is the new marketing</h2>
				<p className="body-2 m-auto text-center xl:w-[628px]">
					The Nexcent blog is the best place to read about the latest membership
					insights, trends and more. See who's joining the community, read about
					how our community are increasing their membership income and lot's
					more.​
				</p>
			</div>
			<div className="flex flex-col items-center gap-[30px] sm:flex-row sm:flex-wrap sm:justify-center sm:gap-[50px] xl:justify-between xl:px-[100px]">
				<div className="relative h-[300px] w-[300px] xl:h-[366px] xl:w-[368px]">
					<img
						src="/update/image-1.png"
						alt="woman with laptop"
						className="w-full rounded-[8px] xl:h-[286px] xl:w-[368px]"
					/>
					<div className="bg-silver shadow-8px absolute bottom-0 left-[25px] flex w-[250px] flex-col gap-[16px] rounded-[8px] p-[16px] xl:h-[176px] xl:w-[317px]">
						<h4 className="text-grey text-center">
							Creating Streamlined Safeguarding Processes with OneRen
						</h4>
						<a
							href="/"
							className="text-primary link flex h-[28px] w-full items-center justify-center gap-[8px] px-[8px] text-[20px]"
						>
							<span>Readmore</span>
							<RightIcon />
						</a>
					</div>
				</div>
				<div className="relative h-[300px] w-[300px] xl:h-[366px] xl:w-[368px]">
					<img
						src="/update/image-1.png"
						alt="woman with laptop"
						className="w-full rounded-[8px] xl:h-[286px] xl:w-[368px]"
					/>
					<div className="bg-silver shadow-8px absolute bottom-0 left-[25px] flex w-[250px] flex-col gap-[16px] rounded-[8px] p-[16px] xl:h-[176px] xl:w-[317px]">
						<h4 className="text-grey text-center">
							Creating Streamlined Safeguarding Processes with OneRen
						</h4>
						<a
							href="/"
							className="text-primary link flex h-[28px] w-full items-center justify-center gap-[8px] px-[8px] text-[20px]"
						>
							<span>Readmore</span>
							<RightIcon />
						</a>
					</div>
				</div>
				<div className="relative h-[300px] w-[300px] xl:h-[366px] xl:w-[368px]">
					<img
						src="/update/image-1.png"
						alt="woman with laptop"
						className="w-full rounded-[8px] xl:h-[286px] xl:w-[368px]"
					/>
					<div className="bg-silver shadow-8px absolute bottom-0 left-[25px] flex w-[250px] flex-col gap-[16px] rounded-[8px] p-[16px] xl:h-[176px] xl:w-[317px]">
						<h4 className="text-grey text-center">
							Creating Streamlined Safeguarding Processes with OneRen
						</h4>
						<a
							href="/"
							className="text-primary link flex h-[28px] w-full items-center justify-center gap-[8px] px-[8px] text-[20px]"
						>
							<span>Readmore</span>
							<RightIcon />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Update;
