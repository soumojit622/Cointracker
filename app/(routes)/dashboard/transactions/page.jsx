"use client";
import React, { useEffect, useState } from "react";
import { desc, eq, getTableColumns, sql } from "drizzle-orm";
import { db } from "@/utils/dbConfig";
import { useUser } from "@clerk/nextjs";
import { Budgets, Transactions } from "@/utils/schema";
import TransactionList from "./components/TransactionList";

export default function TransactionPage() {
  const [listofTransactions, setTransactionList] = useState([]);
  const [budgetList, setBudgetList] = useState([]);
  const { user } = useUser();
  useEffect(() => {
    user && getBudgets();
    getAllExpenses();
  }, [user]);

  const getAllExpenses = async () => {
    const result = await db
      .select({
        id: Transactions.id,
        name: Transactions.name,
        amount: Transactions.amount,
        createdAt: Transactions.createdAt,
      })
      .from(Budgets)
      .rightJoin(Transactions, eq(Budgets.id, Transactions.budgetId))
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(Transactions.id));
    setTransactionList(result);
  };
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
    <div className="min-h-screen p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold text-blue-600">
            Latest Transactions
          </h2>
          <p className="text-gray-600 mt-1 text-sm">
            Track all your recent expenses across budgets here.
          </p>
        </div>

        {/* Transaction List */}
        <div>
          <TransactionList
            transactionList={listofTransactions}
            refreshData={() => getBudgets()}
          />
        </div>
      </div>
    </div>
  );
}
