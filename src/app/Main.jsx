"use client";
import "./globals.css";
import { FaChevronRight, FaCaretRight } from "react-icons/fa";
import { useState } from "react";

export default function Main() {
	const [image, setImage] = useState("img/image1.png");
	const [activeButton, setActiveButton] = useState(1);

	const handleImageChange = (newImage, buttonIndex) => {
		setImage(newImage);
		setActiveButton(buttonIndex);
	};

	return (
		<main className="relative isolate min-w-full text-center">
			<section className="py-24 sm:pt-28 bg-beige text-dark-brown">
				<div className="w-4/5 mx-auto flex flex-col md:flex-row items-center justify-center gap-y-8 md:gap-x-12">
					<div className="flex flex-col items-start justify-between gap-y-4 w-full md:w-1/3 lg:w-1/2 flex-shrink bg-balloon bg-no-repeat bg-auto bg-blend-darken bg-right-bottom">
						<span className="text-xs md:text-sm font-semibold uppercase rounded-full ring-2 ring-orange-950/70 px-4 py-2">
							Mental Health at 30's
						</span>
						<h1 className="font-gelica text-4xl md:text-5xl lg:text-7xl font-bold flex flex-col items-start">
							<span>Beat your</span>
							<span className="flex gap-x-3">
								<span className="font-gelica-italic bg-underline bg-no-repeat bg-contain bg-bottom pb-1 md:pb-3">
									anxiety
								</span>{" "}
								with
							</span>
							<span className="-translate-y-2 md:-translate-y-4">
								therapy
							</span>
						</h1>
						<p className="text-xs md:text-sm lg:text-base font-semibold flex flex-col items-start">
							<span>To live your life to the fullest, we're</span>
							<span>continuing to find ways.</span>
						</p>
						<div className="flex items-center justify-start gap-x-4">
							<button className="btn btn-sm md:btn-md normal-case font-medium text-gray-50 rounded-full py-2 px-6 flex items-center justify-center transition ease-in-out hover:scale-105 duration-300 shadow-md hover:shadow-dark-brown/60 bg-btn-brown hover:bg-dark-brown">
								Get Help
								<FaChevronRight className="text-orange-500" />
							</button>
							<button className="rounded-2xl font-semibold flex items-center justify-center gap-x-2 transition ease-in-out hover:scale-105 duration-300 hover:bg-btn-yellow pr-4">
								<FaCaretRight className="h-12 w-12 bg-btn-yellow text-btn-brown rounded-2xl p-2" />
								<span className="text-xs md:text-sm">
									Play Reviews
								</span>
							</button>
						</div>
					</div>
					<div className="flex items-center justify-center w-full md:w-2/3 lg:w-1/2 flex-shrink-0">
						<img
							src="img/hero.png"
							className="rounded-3xl mix-blend-darken"
						/>
					</div>
				</div>
			</section>
			<section className="py-24 bg-dark-green text-gray-50 bg-decor bg-no-repeat bg-auto bg-left">
				<div className="w-4/5 mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-y-8 md:gap-x-12">
					<div className="flex items-center justify-center w-full md:w-1/2">
						<div className="flex flex-col items-center justify-center gap-y-3 px-4">
							<button
								onClick={() =>
									handleImageChange("img/image1.png", 1)
								}
								className={`rounded-full w-2 h-16 md:h-24 transition ease-in-out duration-300 hover:bg-gray-50 ${
									activeButton === 1
										? "bg-gray-50"
										: "bg-gray-50/50"
								}`}
							></button>
							<button
								onClick={() =>
									handleImageChange("img/image2.png", 2)
								}
								className={`rounded-full w-2 h-16 md:h-24 transition ease-in-out duration-300 hover:bg-gray-50 ${
									activeButton === 2
										? "bg-gray-50"
										: "bg-gray-50/50"
								}`}
							></button>
						</div>
						<figure className="w-3/4 aspect-w-4 aspect-h-3 relative object-cover rounded-3xl overflow-hidden">
							<img src={image} className="w-full h-full" />
						</figure>
					</div>
					<div className="flex flex-col items-start justify-between w-full md:w-1/3 lg:w-1/2 flex-shrink">
						<span className="text-xs md:text-sm font-semibold tracking-wide uppercase rounded-full ring-1 ring-gray-50/60 px-5 py-2">
							Caring is always free
						</span>
						<h1 className="font-gelica text-3xl lg:text-5xl font-semibold flex flex-col items-start gap-y-2 bg-decor2 bg-no-repeat bg-contain bg-right pr-6 pt-6">
							<span>We help you to</span>
							<span className="font-gelica text-yellow-200 bg-underline2 bg-no-repeat bg-contain bg-bottom pb-2">
								grow confidence
							</span>
							<span>at any age</span>
						</h1>
					</div>
				</div>
				<img
					src="img/sunflower.png"
					className="absolute h-32 w-auto -m-0 bottom-0 right-10 lg:right-24"
				/>
			</section>
		</main>
	);
}
