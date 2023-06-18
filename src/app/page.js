import "./globals.css";
import Header from "./Header";
import Main from "./Main";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col items-center">
			<Header />
			<Main />
		</div>
	);
}
