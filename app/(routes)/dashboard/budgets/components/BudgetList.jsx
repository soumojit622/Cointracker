"use client";

import React, { useEffect, useState } from "react";
import BudgetItem from "./BudgetItem";
import { useUser } from "@clerk/nextjs";
import { db } from "@/utils/dbConfig";
import { Budgets, Transactions } from "@/utils/schema";
import { desc, eq, getTableColumns, sql } from "drizzle-orm";
import CreateBudget from "./CreateBudget";

export default function BudgetList() {
  const [budgetList, setBudgetList] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    user && getBudgets();
  }, [user]);

  // Fetch budgets with total spend and total items
  const getBudgets = async () => {
    const result = await db
      .select({
        ...getTableColumns(Budgets),
        totalSpend: sql`sum(${Transactions.amount})`.mapWith(Number),
        totalItem: sql`count(${Transactions.id})`.mapWith(Number),
      })
      .from(Budgets)
      .leftJoin(Transactions, eq(Budgets.id, Transactions.budgetId))
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
      .groupBy(Budgets.id)
      .orderBy(desc(Budgets.id));

    setBudgetList(result);
  };

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Create Budget Card */}
        <CreateBudget refreshData={getBudgets} />

        {/* Budget List or Loading State */}
        {budgetList.length > 0 ? (
          budgetList.map((budget, index) => (
            <BudgetItem key={index} budget={budget} />
          ))
        ) : (
          [1, 2, 3, 4, 5].map((_, index) => (
            <div
              key={index}
              className="w-full h-[150px] bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 rounded-xl animate-pulse shadow-inner"
            />
          ))
        )}
      </div>
    </div>
  );
}
