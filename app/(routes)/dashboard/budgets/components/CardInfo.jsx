import { PiggyBank, ReceiptText, Wallet } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function CardInfo({ budgetList }) {
  const [totalBudget, setTotalBudget] = useState(0);
  const [totalSpent, setTotalSpent] = useState(0);

  const calculateCardInfo = () => {
    let totalBudget_ = 0;
    let totalSpent_ = 0;
    budgetList.forEach((element) => {
      totalBudget_ += Number(element.amount);
      totalSpent_ += element.totalSpend;
    });
    setTotalBudget(totalBudget_);
    setTotalSpent(totalSpent_);
  };

  useEffect(() => {
    if (budgetList) calculateCardInfo();
  }, [budgetList]);

  return (
    <div className="mt-8">
      {budgetList?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard
            title="Total Budgets"
            value={`₹${totalBudget.toLocaleString()}`}
            icon={<PiggyBank className="h-6 w-6" />}
            gradient="from-blue-500 to-blue-600"
          />
          <StatCard
            title="Total Spent"
            value={`₹${totalSpent.toLocaleString()}`}
            icon={<ReceiptText className="h-6 w-6" />}
            gradient="from-indigo-500 to-indigo-600"
          />
          <StatCard
            title="No of Budgets"
            value={budgetList.length}
            icon={<Wallet className="h-6 w-6" />}
            gradient="from-cyan-500 to-cyan-600"
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="h-[120px] w-full bg-slate-200 rounded-xl animate-pulse"
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}

function StatCard({ title, value, icon, gradient }) {
  return (
    <div className="group p-6 bg-white border border-blue-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between cursor-pointer">
        <div>
          <h3 className="text-sm text-gray-500">{title}</h3>
          <p className="text-2xl font-extrabold text-gray-800 mt-1 group-hover:text-blue-600 transition">
            {value}
          </p>
        </div>
        <div
          className={`bg-gradient-to-br ${gradient} text-white p-3 rounded-full shadow-lg transform transition`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}
