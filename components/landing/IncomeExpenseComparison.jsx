import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, PiggyBank } from "lucide-react"

export function IncomeExpenseComparison() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
            FINANCIAL OVERVIEW
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
            Income vs Expenses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Beautiful visual comparison of your financial flow</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-2xl transition-all duration-300">
            <div className="h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
            <CardHeader>
              <CardTitle className="flex items-center text-green-700 text-2xl">
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-full p-3 mr-3 shadow-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                Monthly Income
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-4xl font-bold text-gray-900">$5,000</div>
              <div className="bg-green-200 rounded-xl h-6 flex items-center p-1 shadow-inner">
                <div className="bg-gradient-to-r from-green-500 to-green-600 h-4 w-4/5 rounded-lg shadow-sm"></div>
              </div>
              <p className="text-green-700 font-medium">Salary, freelance, and other income sources</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-red-50 to-red-100 hover:shadow-2xl transition-all duration-300">
            <div className="h-1 bg-gradient-to-r from-red-400 to-red-600"></div>
            <CardHeader>
              <CardTitle className="flex items-center text-red-700 text-2xl">
                <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-full p-3 mr-3 shadow-lg">
                  <TrendingDown className="h-6 w-6 text-white" />
                </div>
                Monthly Expenses
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-4xl font-bold text-gray-900">$3,200</div>
              <div className="bg-red-200 rounded-xl h-6 flex items-center p-1 shadow-inner">
                <div className="bg-gradient-to-r from-red-500 to-red-600 h-4 w-3/5 rounded-lg shadow-sm"></div>
              </div>
              <p className="text-red-700 font-medium">Food, transport, bills, and other expenses</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Card className="border-0 shadow-2xl max-w-md mx-auto bg-gradient-to-br from-blue-600 to-blue-800 text-white">
            <CardContent className="p-8">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <PiggyBank className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold mb-2">$1,800</div>
              <p className="text-blue-100 text-lg font-medium">Monthly Savings</p>
              <div className="mt-4 bg-white/20 rounded-full h-2 overflow-hidden">
                <div className="bg-white h-full rounded-full" style={{ width: "36%" }}></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
