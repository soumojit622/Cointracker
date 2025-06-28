import { ClerkProvider } from "@clerk/nextjs";
import { light } from "@clerk/themes";
import { Mona_Sans, Outfit } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const font = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Cointracker | Smart Expense Tracking for Better Financial Control",
  description:
    "Cointracker is a powerful personal finance app designed to help you track expenses, manage budgets, and gain insights into your spending habits. Make smarter money decisions with real-time tracking and intuitive reports.",
  keywords: [
    "Cointracker",
    "Expense Tracker",
    "Budgeting App",
    "Personal Finance App",
    "Track Spending",
    "Money Management",
    "Financial Insights",
    "Income and Expense Tracker",
    "Finance Tracker",
    "Smart Budget Planner",
  ],
  authors: [{ name: "Soumojit Banerjee" }],
  creator: "Soumojit Banerjee",
  publisher: "Cointracker",
  metadataBase: new URL("https://www.cointracker.com"), // replace with your actual domain
  openGraph: {
    title: "Cointracker | Smart Expense Tracking for Better Financial Control",
    description:
      "Take control of your personal finances with Cointracker. Monitor daily expenses, set budgets, and view insightful reports — all in one place.",
    url: "https://www.cointracker.com", // replace with your actual domain
    siteName: "Cointracker",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: light,
        variables: {
          colorPrimary: "#3b82f6", 
          colorText: "#000", 
        },
        elements: {
          card: "border-blue-500",
          headerTitle: "text-blue-600",
          buttonPrimary: "bg-blue-500 hover:bg-blue-600 text-white",
          input: "focus:ring-blue-500 border-blue-300",
        },
        layout: {
          logoImageUrl: "/favicon.ico",
        },
      }}
    >
      <html lang="en">
        <body className={font.className}>
          {children}
          <Toaster richColors />
          <ScrollToTop />
        </body>
      </html>
    </ClerkProvider>
  );
}
