import Link from "next/link";
import {
  AlertTriangle,
  Home,
  ArrowLeft,
  Search,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>

      <div className="text-center relative z-10 max-w-2xl mx-auto">
        {/* Icon */}
        <div className="bg-blue-500 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8 shadow-lg">
          <AlertTriangle className="h-12 w-12 text-white" />
        </div>

        {/* 404 Number */}
        <h1 className="text-8xl md:text-9xl font-bold text-blue-500 mb-4">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          Sorry, we couldn't find the page you're looking for. It might have
          been moved, deleted, or the URL might be incorrect.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            asChild
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-lg px-8 py-3 shadow-lg font-semibold"
          >
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-lg px-8 py-3 border-blue-300 text-blue-600 hover:bg-blue-50 font-semibold bg-transparent"
          >
            <Link href="javascript:history.back()">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Link>
          </Button>
        </div>

        {/* Help Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-200">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-blue-500 rounded-full p-2 mr-3">
              <HelpCircle className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Need Help?</h3>
          </div>
          <p className="text-gray-600 mb-6">
            While you're here, why not explore what Cointracker can do for your
            finances?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              variant="outline"
              className="border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent"
            >
              <Link href="/#features">
                <Search className="mr-2 h-4 w-4" />
                Explore Features
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-blue-300 text-blue-600 hover:bg-blue-50 bg-transparent"
            >
              <Link href="/#faq">
                <HelpCircle className="mr-2 h-4 w-4" />
                View FAQ
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
