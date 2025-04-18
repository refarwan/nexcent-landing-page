import { useCallback, useEffect, useRef, useState } from "react";

const Hero = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const slides = [1, 2, 3];

	const containerRef = useRef<HTMLDivElement>(null);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	const startX = useRef(0);
	const deltaX = useRef(0);
	const isDragging = useRef(false);

	const stopAutoSlide = useCallback(() => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
	}, []);

	const startAutoSlide = useCallback(() => {
		stopAutoSlide();
		intervalRef.current = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 3000);
	}, [slides.length, stopAutoSlide]);

	useEffect(() => {
		startAutoSlide();
		return () => stopAutoSlide();
	}, [startAutoSlide, stopAutoSlide]);

	const handleDotClick = useCallback(
		(index: number) => {
			setCurrentSlide(index);
			startAutoSlide();
		},
		[startAutoSlide],
	);

	const handleDragStart = useCallback(
		(clientX: number) => {
			stopAutoSlide();
			startX.current = clientX;
			deltaX.current = 0;
			isDragging.current = true;
			if (containerRef.current) {
				containerRef.current.style.transition = "none";
			}
		},
		[stopAutoSlide],
	);

	const handleDragMove = useCallback(
		(clientX: number) => {
			if (!isDragging.current || !containerRef.current) return;

			deltaX.current = clientX - startX.current;
			const offset =
				-currentSlide * containerRef.current.offsetWidth + deltaX.current;

			containerRef.current.style.transform = `translateX(${offset}px)`;
		},
		[currentSlide],
	);

	const handleDragEnd = useCallback(() => {
		if (!isDragging.current || !containerRef.current) return;
		isDragging.current = false;

		const threshold = containerRef.current.offsetWidth * 0.2;
		let newSlide = currentSlide;

		if (deltaX.current < -threshold && currentSlide < slides.length - 1) {
			newSlide = currentSlide + 1;
		} else if (deltaX.current > threshold && currentSlide > 0) {
			newSlide = currentSlide - 1;
		}

		setCurrentSlide(newSlide);

		containerRef.current.style.transition = "transform 0.5s ease";
		containerRef.current.style.transform = `translateX(-${newSlide * 100}%)`;

		startAutoSlide();
	}, [currentSlide, slides.length, startAutoSlide]);

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const onTouchStart = (e: TouchEvent) => {
			handleDragStart(e.touches[0].clientX);
		};
		const onTouchMove = (e: TouchEvent) => {
			handleDragMove(e.touches[0].clientX);
		};
		const onTouchEnd = () => {
			handleDragEnd();
		};

		const onMouseDown = (e: MouseEvent) => {
			e.preventDefault();
			handleDragStart(e.clientX);
		};
		const onMouseMove = (e: MouseEvent) => {
			if (isDragging.current) handleDragMove(e.clientX);
		};
		const onMouseUp = () => {
			if (isDragging.current) handleDragEnd();
		};
		const onMouseLeave = () => {
			if (isDragging.current) handleDragEnd();
		};

		container.addEventListener("touchstart", onTouchStart);
		container.addEventListener("touchmove", onTouchMove);
		container.addEventListener("touchend", onTouchEnd);

		container.addEventListener("mousedown", onMouseDown);
		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("mouseup", onMouseUp);
		container.addEventListener("mouseleave", onMouseLeave);

		return () => {
			container.removeEventListener("touchstart", onTouchStart);
			container.removeEventListener("touchmove", onTouchMove);
			container.removeEventListener("touchend", onTouchEnd);

			container.removeEventListener("mousedown", onMouseDown);
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("mouseup", onMouseUp);
			container.removeEventListener("mouseleave", onMouseLeave);
		};
	}, [
		currentSlide,
		slides.length,
		startAutoSlide,
		stopAutoSlide,
		handleDragEnd,
		handleDragMove,
		handleDragStart,
	]);

	return (
		<div className="bg-silver relative m-auto w-full max-w-[1440px] overflow-hidden pb-[50px] select-none sm:pb-0 xl:h-[599px]">
			<div
				ref={containerRef}
				className="flex w-full cursor-grab transition-transform duration-700 ease-in-out active:cursor-grabbing"
				style={{
					transform: `translateX(-${currentSlide * 100}%)`,
				}}
			>
				{slides.map((_, index) => (
					<div
						key={index}
						className="flex h-auto w-full flex-shrink-0 flex-col-reverse items-center justify-center px-[16px] sm:flex-row sm:gap-[20px] sm:px-[50px] xl:gap-[144px] xl:px-[144px] xl:py-[96px]"
					>
						<div className="flex flex-col items-center gap-[16px] sm:items-start xl:gap-[32px]">
							<div className="flex flex-col gap-[16px]">
								<span className="text-d-grey text-center text-[32px] leading-[40px] font-semibold sm:text-left xl:w-[657px] xl:text-[64px] xl:leading-[76px]">
									Lessons and insights{" "}
									<span className="text-primary">from 8 years</span>
								</span>
								<span className="body-2 text-center sm:text-left">
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
							className="w-[200px] sm:block sm:w-[300px] xl:w-[391px]"
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
