import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Utensils, Car, Home, ShoppingBag, Gamepad2, Heart } from "lucide-react"

const categories = [
  { icon: Utensils, name: "Food & Dining", amount: "$450", color: "from-blue-400 to-blue-500", bg: "bg-blue-50" },
  { icon: Car, name: "Transportation", amount: "$280", color: "from-blue-500 to-blue-600", bg: "bg-blue-100" },
  { icon: Home, name: "Utilities", amount: "$320", color: "from-blue-600 to-blue-700", bg: "bg-blue-50" },
  { icon: ShoppingBag, name: "Shopping", amount: "$180", color: "from-blue-400 to-blue-500", bg: "bg-blue-100" },
  { icon: Gamepad2, name: "Entertainment", amount: "$120", color: "from-blue-500 to-blue-600", bg: "bg-blue-50" },
  { icon: Heart, name: "Healthcare", amount: "$90", color: "from-blue-600 to-blue-700", bg: "bg-blue-100" },
]

export function ExpenseCategories() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
            EXPENSE CATEGORIES
          </div>
          <h2 className="text-4xl pb-2 md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
            Organize Your Spending
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Categorize your expenses beautifully and track where your money goes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
              <CardHeader className={`${category.bg} pb-4`}>
                <div className="flex items-center justify-between">
                  <div
                    className={`bg-gradient-to-r ${category.color} rounded-xl w-12 h-12 flex items-center justify-center shadow-lg`}
                  >
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    {category.amount}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <CardTitle className="text-lg text-gray-900">{category.name}</CardTitle>
                <div className={`mt-3 h-2 bg-gray-200 rounded-full overflow-hidden`}>
                  <div
                    className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                    style={{ width: `${Math.random() * 60 + 40}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
