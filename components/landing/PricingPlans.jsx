import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Crown, Zap } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    icon: Zap,
    features: ["Track up to 50 expenses/month", "Basic categories", "Monthly reports", "Mobile app access"],
    color: "from-blue-400 to-blue-500",
    bgColor: "from-white to-blue-50",
  },
  {
    name: "Pro",
    price: "$9",
    period: "per month",
    icon: Crown,
    features: [
      "Unlimited expense tracking",
      "Custom categories",
      "Advanced reports & analytics",
      "Budget alerts",
      "Export data",
      "Priority support",
    ],
    popular: true,
    color: "from-blue-600 to-blue-700",
    bgColor: "from-blue-50 to-blue-100",
  },
  {
    name: "Premium",
    price: "$19",
    period: "per month",
    icon: Crown,
    features: [
      "Everything in Pro",
      "Multi-account management",
      "Team collaboration",
      "API access",
      "Custom integrations",
      "Dedicated account manager",
    ],
    color: "from-blue-700 to-blue-800",
    bgColor: "from-white to-blue-50",
  },
]

export function PricingPlans() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
            PRICING PLANS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free and upgrade as your financial tracking needs grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`border-0 shadow-xl relative hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br ${plan.bgColor} ${plan.popular ? "ring-2 ring-blue-500 ring-offset-4" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}
              <div className={`h-1 bg-gradient-to-r ${plan.color}`}></div>
              <CardHeader className="text-center pb-4">
                <div
                  className={`bg-gradient-to-r ${plan.color} rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900">{plan.name}</CardTitle>
                <div className="mt-6">
                  <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 text-lg">/{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className={`bg-gradient-to-r ${plan.color} rounded-full p-1 mr-3 shadow-sm`}>
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full bg-gradient-to-r ${plan.color} hover:shadow-lg text-lg py-3 font-semibold`}>
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-2xl inline-block">
            <h3 className="text-2xl font-bold mb-2">30-Day Money Back Guarantee</h3>
            <p className="text-blue-100">Try any paid plan risk-free for 30 days</p>
          </div>
        </div>
      </div>
    </section>
  )
}
