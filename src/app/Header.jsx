"use client";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
	Bars3Icon,
	XMarkIcon,
	ChevronDownIcon,
} from "@heroicons/react/24/solid";
import "./globals.css";
import { BsFillCaretDownFill } from "react-icons/bs";
import { GiStarShuriken } from "react-icons/gi";
import { HiBars2 } from "react-icons/hi2";
import { RxDividerVertical } from "react-icons/rx";

const navigation = [
	{ name: "Services", href: "#" },
	{ name: "Clinics", href: "#" },
	{ name: "Treatments", href: "#" },
];

const languages = [
	{
		name: "EN",
		href: "#",
	},
	{
		name: "HI",
		href: "#",
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="fixed inset-x-0 m-0 mx-auto top-0 z-50 w-5/6 bg-gray-50 rounded-3xl rounded-t-none shadow">
			<nav
				className="flex items-center justify-between p-4"
				aria-label="Global"
			>
				<a
					href="/"
					className="flex gap-x-2 lg:px-4 rounded-lg text-dark-brown transition ease-in-out hover:scale-110 duration-300"
				>
					<span className="sr-only">Healpoint</span>
					<GiStarShuriken className="h-4/5 w-4/5 lg:h-8 lg:w-8 p-1 rounded-full bg-orange-500 text-gray-50" />
					<h1 className="text-xl font-medium font-gelica lg:text-2xl leading-6">
						Healpoint
					</h1>
				</a>
				<div className="flex items-center justify-between lg:gap-x-6">
					<div className="hidden lg:flex lg:gap-x-4 items-center justify-between">
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-base font-bold leading-6 p-2 rounded-lg text-dark-brown transition ease-in-out hover:scale-110 duration-300"
							>
								{item.name}
							</a>
						))}
						<RxDividerVertical className="text-gray-500 scale-150" />
						<Popover className="relative ">
							<Popover.Button className="flex items-center text-base font-bold leading-6 p-2 rounded-lg text-dark-brown transition ease-in-out hover:scale-110 duration-300">
								<span>EN</span>
								<BsFillCaretDownFill
									className="h-3 w-3 mx-1"
									aria-hidden="true"
								/>
							</Popover.Button>

							<Transition
								as={Fragment}
								enter="transition ease-out duration-200"
								enterFrom="opacity-0 translate-y-1"
								enterTo="opacity-100 translate-y-0"
								leave="transition ease-in duration-150"
								leaveFrom="opacity-100 translate-y-0"
								leaveTo="opacity-0 translate-y-1"
							>
								<Popover.Panel className="absolute left-1/2 z-10 mt-4 flex w-screen max-w-max -translate-x-1/2 px-2">
									<div className="w-auto max-w-sm flex-auto overflow-hidden rounded-lg bg-gray-50 text-base leading-6 shadow-lg ring-1 ring-dark-brown p-2">
										{languages.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className="relative rounded-lg p-2 font-bold text-dark-brown hover:bg-gray-300 transition ease-in-out duration-300"
											>
												{item.name}
												<span className="absolute inset-0" />
											</a>
										))}
									</div>
								</Popover.Panel>
							</Transition>
						</Popover>
					</div>
					<button className="hidden scale-125 text-dark-brown transition ease-in-out hover:scale-150 duration-300 lg:flex lg:mx-2">
						<HiBars2 className="scale-150" />
					</button>
					<a
						href="#"
						className="hidden text-base text-dark-brown font-bold px-4 py-2 rounded-full ring-2 ring-dark-brown leading-6 transition ease-in-out hover:scale-110 duration-300 lg:flex mx-4"
					>
						Need Help ?
					</a>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-dark-brown"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
			</nav>

			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className="fixed inset-0 z-50" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-beige px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-dark-brown/60 text-dark-brown">
					<div className="flex items-center justify-between rounded-xl bg-gray-50 py-4 px-3 shadow-md border border-dark-brown">
						<a
							href="/"
							className="-m-1.5 p-1.5 flex gap-x-1 items-center"
						>
							<span className="sr-only">Healpoint</span>
							<GiStarShuriken className="h-6 w-6 p-1 rounded-full bg-orange-500 text-gray-50" />
							<h1 className="text-xl font-medium font-gelica leading-6">
								Healpoint
							</h1>
						</a>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-dark-brown/60">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition ease-in-out duration-300 hover:ring-1 ring-dark-brown/50 hover:shadow-md bg-gray-50 border border-dark-brown"
									>
										{item.name}
									</a>
								))}
								<Disclosure as="div" className="-mx-3">
									{({ open }) => (
										<>
											<Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 transition ease-in-out duration-300 hover:ring-1 ring-dark-brown/50 hover:shadow-md bg-gray-50 border border-dark-brown">
												Language
												<ChevronDownIcon
													className={classNames(
														open
															? "rotate-180"
															: "",
														"h-5 w-5 flex-none transition ease-in-out duration-300"
													)}
													aria-hidden="true"
												/>
											</Disclosure.Button>
											<Disclosure.Panel className="mt-2 space-y-2">
												{languages.map((item) => (
													<Disclosure.Button
														key={item.name}
														as="a"
														href={item.href}
														className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 transition ease-in-out duration-300 hover:ring-1 ring-dark-brown/50 hover:shadow-md bg-gray-50 border border-dark-brown"
													>
														{item.name}
													</Disclosure.Button>
												))}
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>
							</div>
							<div className="py-6">
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 transition ease-in-out duration-300 hover:ring-1 ring-dark-brown/50 hover:shadow-md bg-gray-50 border border-dark-brown"
								>
									Need Help ?
								</a>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
