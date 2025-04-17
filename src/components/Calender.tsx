const Calender = () => {
	return (
		<div className="flex flex-col gap-[30px] px-[16px] sm:flex-row xl:justify-center">
			<img
				src="/mobile-login-pana.svg"
				alt="illustration"
				className="m-auto w-[200px] sm:w-[300px] xl:w-[441px]"
			/>
			<div className="flex flex-col gap-[32px] xl:w-[661px]">
				<div className="w-[601px]">
					<h2>How to design your site footer like we did</h2>
					<p className="body-3">
						Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
						augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
						elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
						habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
						facilisis finibus. In euismod augue vitae nisi ultricies, non
						aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
						efficitur quis massa. Praesent felis est, finibus et nisi ac,
						hendrerit venenatis libero. Donec consectetur faucibus ipsum id
						gravida.
					</p>
				</div>
				<a href="/" className="button primary-button medium-button">
					Learn More
				</a>
			</div>
		</div>
	);
};

export default Calender;
