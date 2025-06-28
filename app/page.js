import { BudgetPreview } from "@/components/landing/BudgetPreview";
import { CallToAction } from "@/components/landing/CallToAction";
import { CustomerReviews } from "@/components/landing/CustomerReviews";
import { ExpenseCategories } from "@/components/landing/ExpenseCategories";
import { FAQSection } from "@/components/landing/export function FAQSection() {";
import { FeaturesGrid } from "@/components/landing/FeaturesGrid";
import { Footer } from "@/components/landing/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { IncomeExpenseComparison } from "@/components/landing/IncomeExpenseComparison";
import { MobilePreview } from "@/components/landing/MobilePreview";
import { Navbar } from "@/components/landing/Navbar";
import { SecurityPrivacy } from "@/components/landing/SecurityPrivacy";
import { WhyChoose } from "@/components/landing/WhyChoose";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesGrid />
      <WhyChoose />
      <ExpenseCategories />
      <BudgetPreview />
      <IncomeExpenseComparison />
      <MobilePreview />
      <HowItWorks />
      <SecurityPrivacy />
      <CustomerReviews />
      <FAQSection />
      <CallToAction />
      <Footer />
    </div>
  );
}
