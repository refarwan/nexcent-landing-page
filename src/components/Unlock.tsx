const Unlock = () => {
	return (
		<div className="m-auto flex flex-col items-center px-[16px] py-[24px] sm:flex-row sm:gap-[40px] sm:px-0 sm:py-0 xl:w-max">
			<img
				src="mobile-login.svg"
				alt="mobile login llustration"
				className="w-[200px] sm:w-[300px] xl:w-[442px]"
			/>
			<div className="flex flex-col gap-[20px] sm:w-[400px] xl:w-[661px]">
				<div className="flex flex-col gap-[10px]">
					<h2>The unseen of spending three years at Pixelgrade</h2>
					<p className="body-3">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
						amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
						Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
						tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
						Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
						elementum pulvinar odio.
					</p>
				</div>
				<a href="/" className="button primary-button medium-button">
					Learn More
				</a>
			</div>
		</div>
	);
};

export default Unlock;
