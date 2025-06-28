import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle, PieChart, Target, BarChart3, Calendar, Bell } from "lucide-react"

const features = [
  {
    icon: PlusCircle,
    title: "Log Expenses",
    description: "Quickly record your daily spending with just a few taps",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: PieChart,
    title: "Category Tracking",
    description: "Organize expenses into categories like food, transport, and bills",
    color: "from-blue-600 to-blue-700",
  },
  {
    icon: Target,
    title: "Budget Limits",
    description: "Set spending limits for each category and stay on track",
    color: "from-blue-400 to-blue-500",
  },
  {
    icon: BarChart3,
    title: "Financial Reports",
    description: "View detailed summaries and insights about your spending",
    color: "from-blue-700 to-blue-800",
  },
  {
    icon: Calendar,
    title: "Monthly Overview",
    description: "Track your progress with monthly and yearly breakdowns",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Get notified when you're approaching your budget limits",
    color: "from-blue-600 to-blue-700",
  },
]

export function FeaturesGrid() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
            POWERFUL FEATURES
          </div>
          <h2 className="text-4xl pb-2 md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
            Everything You Need to Track Expenses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to make expense tracking simple, beautiful, and effective
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white hover:scale-105"
            >
              <CardHeader className="pb-4">
                <div
                  className={`bg-gradient-to-r ${feature.color} rounded-xl w-16 h-16 flex items-center justify-center mb-4 shadow-lg`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
