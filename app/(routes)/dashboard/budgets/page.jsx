import React from "react";
import BudgetList from "./components/BudgetList";

export default function Budgetpage() {
  return (
    <div className="min-h-screen p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold text-blue-600">My Budgets</h2>
          <p className="text-gray-600 mt-1 text-sm">
            View and manage all your financial plans in one place.
          </p>
        </div>

        {/* Budget List */}
        <div>
          <BudgetList />
        </div>
      </div>
    </div>
  );
}
