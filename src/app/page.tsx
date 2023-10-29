import LiveWidget from "./LiveWidget";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-24">
			<h2 className="text-3xl font-extrabold">HealXYZ TikTok Live</h2>
			<LiveWidget />
           		<a className="hover:underline text-blue-900" href="https://discord.com/channels/1165931081564946443/role-subscriptions">Join the discord</a>
		</main>
	);
}
