import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, DollarSign, TrendingUp } from "lucide-react";

export function BudgetPreview() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
            BUDGET MANAGEMENT
          </div>
          <h2 className="text-4xl pb-2 md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
            Set Your Budget Limits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take control of your spending with beautiful, customizable budget
            limits
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-blue-50 overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800"></div>
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <CardTitle className="flex items-center text-2xl">
                <div className="bg-white rounded-full p-2 mr-3">
                  <Settings className="h-6 w-6 text-blue-600" />
                </div>
                Budget Setup Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Monthly Income
                  </label>
                  <div className="flex items-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full p-2 mr-3">
                      <DollarSign className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">
                      $5,000
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Food Budget
                  </label>
                  <div className="flex items-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full p-2 mr-3">
                      <DollarSign className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">
                      $600
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
                <div className="flex items-center mb-3">
                  <TrendingUp className="h-6 w-6 mr-2" />
                  <span className="font-semibold">Budget Status</span>
                </div>
                <p className="text-blue-100 text-lg">
                  {"You're on track! 75% of your monthly budget remaining."}
                </p>
                <div className="mt-4 bg-white/20 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-white h-full rounded-full"
                    style={{ width: "25%" }}
                  ></div>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg py-3 shadow-lg">
                Save Budget Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
