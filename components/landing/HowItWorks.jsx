import { Card, CardContent } from "@/components/ui/card";
import { Plus, Tag, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Plus,
    title: "Log Your Expenses",
    description:
      "Quickly add your daily expenses with amount, description, and date in seconds",
    color: "from-blue-500 to-blue-600",
  },
  {
    number: "2",
    icon: Tag,
    title: "Categorize Spending",
    description:
      "Organize expenses into beautiful categories like food, transport, and entertainment",
    color: "from-blue-600 to-blue-700",
  },
  {
    number: "3",
    icon: BarChart3,
    title: "Analyze & Improve",
    description:
      "Review your spending patterns with stunning visuals and make informed financial decisions",
    color: "from-blue-700 to-blue-800",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
            HOW IT WORKS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
            Start in Three Simple Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Begin tracking your expenses with our beautifully simple process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-blue-300 to-blue-400 transform -translate-y-1/2 z-0"></div>
          <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-blue-400 to-blue-500 transform -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl text-center relative z-10 hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-blue-50"
            >
              <CardContent className="p-10">
                <div
                  className={`bg-gradient-to-r ${step.color} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg relative`}
                >
                  <span className="text-2xl font-bold text-white">
                    {step.number}
                  </span>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-blue-400" />
                    </div>
                  )}
                </div>
                <div
                  className={`bg-gradient-to-r ${step.color} rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
