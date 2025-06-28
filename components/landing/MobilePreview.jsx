import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Plus, PieChart, BarChart3 } from "lucide-react"

export function MobilePreview() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
            MOBILE EXPERIENCE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
            Track Expenses On The Go
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access your financial data anywhere with our beautiful mobile-friendly design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-blue-50">
            <CardContent className="p-8">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 h-80 flex flex-col items-center justify-center border border-blue-300">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl w-20 h-20 flex items-center justify-center mb-6 shadow-lg">
                  <Smartphone className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-3 w-full">
                  <div className="bg-white rounded-xl p-3 flex items-center shadow-md border border-blue-200">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full p-1 mr-3">
                      <Plus className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Add Expense</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-3 text-center shadow-md">
                    <span className="text-sm text-white font-semibold">$25.50 - Lunch</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mt-6 text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Quick Entry
              </h3>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-blue-50">
            <CardContent className="p-8">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 h-80 flex flex-col items-center justify-center border border-blue-300">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl w-20 h-20 flex items-center justify-center mb-6 shadow-lg">
                  <PieChart className="h-10 w-10 text-white" />
                </div>
                <div className="grid grid-cols-2 gap-3 w-full">
                  <div className="bg-white rounded-xl p-3 text-center shadow-md border border-blue-200">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-2"></div>
                    <span className="text-xs font-medium text-gray-700">Food</span>
                  </div>
                  <div className="bg-white rounded-xl p-3 text-center shadow-md border border-blue-200">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mx-auto mb-2"></div>
                    <span className="text-xs font-medium text-gray-700">Transport</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mt-6 text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Categories
              </h3>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-blue-50">
            <CardContent className="p-8">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 h-80 flex flex-col items-center justify-center border border-blue-300">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl w-20 h-20 flex items-center justify-center mb-6 shadow-lg">
                  <BarChart3 className="h-10 w-10 text-white" />
                </div>
                <div className="flex items-end space-x-2 w-full justify-center">
                  <div className="bg-gradient-to-t from-blue-600 to-blue-500 w-4 h-12 rounded-t-lg shadow-md"></div>
                  <div className="bg-gradient-to-t from-blue-500 to-blue-400 w-4 h-16 rounded-t-lg shadow-md"></div>
                  <div className="bg-gradient-to-t from-blue-400 to-blue-300 w-4 h-8 rounded-t-lg shadow-md"></div>
                  <div className="bg-gradient-to-t from-blue-500 to-blue-400 w-4 h-14 rounded-t-lg shadow-md"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold mt-6 text-center bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Analytics
              </h3>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
