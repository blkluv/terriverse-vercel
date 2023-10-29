import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "HealXYZ 🔴 Live",
	description: "HealXYZ TikTok subscribers!? live????",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
