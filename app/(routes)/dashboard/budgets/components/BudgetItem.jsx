import Link from "next/link";
import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";

export default function BudgetItem({ budget }) {
  const calculateProgress = () => {
    const perc = (budget.totalSpend / budget.amount) * 100;
    return Math.min(100, Math.max(0, perc.toFixed(2)));
  };

  const progress = calculateProgress();
  const remaining = budget?.amount - budget?.totalSpend;
  const exceeded = remaining < 0;

  return (
    <div className="mb-4">
      <Link href={`/dashboard/transactions/${budget?.id}`}>
        <div className="p-6 border border-blue-100 rounded-xl bg-white hover:shadow-md hover:border-blue-300 transition-all duration-300 cursor-pointer h-[190px] flex flex-col justify-between group">
          {/* Top */}
          <div className="flex justify-between items-start">
            <div className="flex gap-3 items-center">
              <div className="text-3xl bg-blue-100 text-blue-600 rounded-full p-2 w-12 h-12 flex items-center justify-center">
                {budget?.icon}
              </div>
              <div>
                <h2 className="font-semibold text-gray-800">{budget?.name}</h2>
                <p className="text-xs text-gray-500">
                  {budget?.totalItem} item{budget?.totalItem > 1 ? "s" : ""}
                </p>
              </div>
            </div>
            <div className="text-right">
              <h2 className="text-lg font-bold text-blue-600">
                ₹{budget?.amount}
              </h2>
            </div>
          </div>

          {/* Progress */}
          <div className="mt-4 space-y-1">
            <div className="flex justify-between text-xs text-gray-500 font-medium">
              <span>₹{budget?.totalSpend || 0} Spent</span>
              <span className={exceeded ? "text-red-600" : "text-gray-600"}>
                {exceeded
                  ? `Exceeded by ₹${Math.abs(remaining)}`
                  : `₹${remaining} Remaining`}
              </span>
            </div>
            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
              <div
                className={`h-2 transition-all duration-500 ${
                  exceeded ? "bg-red-500" : "bg-blue-500"
                }`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* View CTA */}
          <div className="flex justify-end mt-3">
            <span className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:underline">
              View Details
              <FiArrowRightCircle className="ml-1 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
