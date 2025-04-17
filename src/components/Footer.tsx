import { RightIcon, SendIcon } from "./Icons";

const Footer = () => {
	return (
		<footer className="bg-silver mt-[95px]">
			<div className="flex flex-col items-center justify-center gap-[32px] p-[32px]">
				<span className="text-d-grey text-center text-[20px] font-semibold sm:text-[64px] sm:leading-[76px] xl:w-[887px]">
					Pellentesque suscipit fringilla libero eu.
				</span>
				<button type="button" className="button primary-button medium-button">
					Get a Demo <RightIcon />
				</button>
			</div>
			<div className="flex flex-col gap-[50px] bg-black px-[16px] py-[64px] sm:flex-row sm:justify-between sm:px-[50px] xl:px-[165px]">
				<div className="flex flex-col gap-[40px]">
					<img src="/footer-logo.svg" className="w-[191px]" alt="Logo" />
					<div className="flex flex-col gap-[8px] text-[14px] text-white">
						<span>Copyright &copy; 2020 Nexcent ltd.</span>
						<span>All rights reserved</span>
					</div>
					<div className="flex gap-[16px]">
						<a
							href="https://www.instagram.com"
							className="grid h-[32px] w-[32px] place-content-center rounded-full bg-white/10"
						>
							<img src="/social-icons/instagram.svg" alt="instagram icon" />
						</a>
						<a
							href="https://www.dribble.com"
							className="grid h-[32px] w-[32px] place-content-center rounded-full bg-white/10"
						>
							<img src="/social-icons/dribble.svg" alt="dribble icon" />
						</a>
						<a
							href="https://www.twitter.com"
							className="grid h-[32px] w-[32px] place-content-center rounded-full bg-white/10"
						>
							<img src="/social-icons/twitter.svg" alt="twitter icon" />
						</a>
						<a
							href="https://www.youtube.com"
							className="grid h-[32px] w-[32px] place-content-center rounded-full bg-white/10"
						>
							<img src="/social-icons/youtube.svg" alt="youtube icon" />
						</a>
					</div>
				</div>

				<div className="flex flex-wrap gap-x-[16px] gap-y-[30px] text-white sm:w-[350px] xl:w-max">
					<div className="flex w-[160px] flex-col gap-[24px]">
						<h4 className="text-white">Company</h4>
						<div className="flex flex-col gap-[12px]">
							<a href="/" className="text-[14px] hover:underline">
								About us
							</a>
							<a href="/" className="text-[14px] hover:underline">
								Blog
							</a>
							<a href="/" className="text-[14px] hover:underline">
								Contact us
							</a>
							<a href="/" className="text-[14px] hover:underline">
								Pricing
							</a>
							<a href="/" className="text-[14px] hover:underline">
								Testimonials
							</a>
						</div>
					</div>
					<div className="flex w-[160px] flex-col gap-[24px]">
						<h4 className="text-white">Support</h4>
						<div className="flex flex-col gap-[12px]">
							<a href="/" className="text-[14px] hover:underline">
								Help Center
							</a>
							<a href="/" className="text-[14px] hover:underline">
								Terms of service
							</a>
							<a href="/" className="text-[14px] hover:underline">
								Legal
							</a>
							<a href="/" className="text-[14px] hover:underline">
								Privacy policy
							</a>
							<a href="/" className="text-[14px] hover:underline">
								Status
							</a>
						</div>
					</div>
					<div className="flex w-[255px] flex-col gap-[24px]">
						<h4 className="text-white">Stay up to date</h4>
						<div className="hu flex h-[40px] w-full items-center rounded-[8px] bg-white/20">
							<input
								type="email"
								name="email"
								placeholder="Your email address"
								className="h-[40px] px-[16px] outline-none"
							/>
							<button
								type="button"
								className="grid h-[40px] w-[40px] place-content-center"
							>
								<SendIcon />
							</button>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
