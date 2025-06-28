import { Button } from "@/components/ui/button";
import { TrendingUp, Play, CheckCircle, Users, Award } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className=" py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Trust Badge */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-full px-6 py-2 flex items-center">
              <Award className="h-4 w-4 text-blue-500 mr-2" />
              <span className="text-blue-700 font-medium text-sm">
                Trusted by 50,000+ users worldwide
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-8 shadow-lg">
            <TrendingUp className="h-10 w-10 text-white" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Take Control of Your
            <span className="text-blue-500 block">Finances</span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            The simple and beautiful expense tracking app that helps you monitor
            spending, set budgets, and achieve your financial goals
            effortlessly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            {/* Start Tracking Free Button */}
            <Link href="/dashboard" passHref>
              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-blue-500 hover:bg-blue-600 shadow-lg font-semibold"
              >
                Start Tracking Free
              </Button>
            </Link>

            {/* Watch Demo Button */}
            <Link href="/dashboard" passHref>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-blue-300 text-blue-600 hover:bg-blue-50 font-semibold bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </Link>
          </div>

          {/* Simple Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Free to Start
              </h3>
              <p className="text-gray-600 text-sm">No credit card required</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Smart Insights
              </h3>
              <p className="text-gray-600 text-sm">
                Understand your spending patterns
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Trusted by Many
              </h3>
              <p className="text-gray-600 text-sm">
                Join thousands of happy users
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
