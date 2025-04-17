import { useCallback, useEffect, useRef, useState } from "react";

const Hero = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const slides = [1, 2, 3];
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	const startAutoSlide = useCallback(() => {
		if (intervalRef.current) clearInterval(intervalRef.current);

		intervalRef.current = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 3000);
	}, [slides.length]);

	useEffect(() => {
		startAutoSlide();
		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, [startAutoSlide]);

	const handleDotClick = useCallback(
		(index: number) => {
			setCurrentSlide(index);
			startAutoSlide();
		},
		[startAutoSlide],
	);

	return (
		<div className="bg-silver relative m-auto w-full max-w-[1440px] overflow-hidden pb-[50px] sm:pb-0 xl:h-[599px]">
			<div
				className="flex transition-transform duration-700 ease-in-out"
				style={{ transform: `translateX(-${currentSlide * 100}%)` }}
			>
				{slides.map((_, index) => (
					<div
						key={index}
						id="corusel"
						className="flex h-auto w-full flex-shrink-0 flex-col items-center justify-center px-[16px] sm:flex-row sm:gap-[20px] sm:px-[50px] xl:gap-[144px] xl:px-[144px] xl:py-[96px]"
					>
						<div className="flex flex-col items-center gap-[16px] sm:items-start xl:gap-[32px]">
							<div className="flex flex-col gap-[16px]">
								<span className="text-d-grey text-center text-[32px] leading-[40px] font-semibold sm:text-left xl:w-[657px] xl:text-[64px] xl:leading-[76px]">
									Lessons and insights{" "}
									<span className="text-primary">from 8 years</span>
								</span>
								<span className="text-grey text-center sm:text-left">
									Where to grow your business as a photographer: site or social
									media?
								</span>
							</div>

							<button
								type="button"
								className="button primary-button medium-button h-[52px]"
							>
								Register
							</button>
						</div>
						<img
							src="Illustration.svg"
							className="hidden w-screen sm:block sm:w-[300px] xl:w-[391px]"
							alt={`Illustration ${index + 1}`}
						/>
					</div>
				))}
			</div>

			<div className="absolute bottom-[10px] left-1/2 flex -translate-x-1/2 gap-[8px]">
				{slides.map((_, index) => (
					<div
						key={index}
						onClick={() => handleDotClick(index)}
						className={`h-[10px] w-[10px] cursor-pointer rounded-full transition-colors ${
							currentSlide === index
								? "bg-primary"
								: "bg-primary/30 hover:bg-primary/60"
						}`}
					></div>
				))}
			</div>
		</div>
	);
};

export default Hero;
