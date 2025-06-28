import { CheckCircle, Award } from "lucide-react";

const benefits = [
  "Simple and intuitive interface",
  "Real-time expense tracking",
  "Comprehensive budget management",
  "Detailed financial insights",
  "Secure data protection",
  "Cross-platform synchronization",
];

export function WhyChoose() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-6">
              WHY CHOOSE US
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Cointracker?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Join thousands of users who have transformed their financial
              habits with our comprehensive expense tracking solution designed
              for modern life.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/10 rounded-lg p-4 backdrop-blur-sm"
                >
                  <div className="bg-white rounded-full p-1 mr-4">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 h-96 flex items-center justify-center border border-white/20">
            <div className="text-center">
              <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Award Winning</h3>
              <p className="text-blue-100">
                Trusted by 50,000+ users worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
