import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react"

export function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-800/20"></div>
      <div className="absolute top-10 left-10 opacity-20">
        <Sparkles className="h-16 w-16 text-white" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <TrendingUp className="h-20 w-20 text-white" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="bg-white/10 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8 shadow-lg border border-white/20">
          <TrendingUp className="h-10 w-10 text-white" />
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
          Ready to Take Control of Your Finances?
        </h2>
        <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-4xl mx-auto">
          Join thousands of users who have transformed their financial habits with Cointracker. Start tracking your
          expenses today and see the beautiful difference it makes in your financial life.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            size="lg"
            variant="secondary"
            className="text-xl px-12 py-4 bg-white text-blue-600 hover:bg-blue-50 font-bold shadow-xl"
          >
            Start Tracking Now
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-xl px-12 py-4 border-white/30 text-white hover:bg-white/10 font-bold bg-transparent"
          >
            Watch Demo
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">50,000+</div>
            <div className="text-blue-100">Happy Users</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">$2M+</div>
            <div className="text-blue-100">Money Saved</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">4.9★</div>
            <div className="text-blue-100">App Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}
