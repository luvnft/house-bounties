import NavBar from "@/components/NavBar";

import "./globals.css";

export const metadata = {
  title: "Bounty",
  description: "A learner project by extrapockets and bitdern",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative gap-2">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
