"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/dbConfig";
import { Budgets, Transactions } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq, getTableColumns, sql } from "drizzle-orm";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BudgetItem from "./budgets/components/BudgetItem";
import CardInfo from "./budgets/components/CardInfo";
import BarchartDash from "./budgets/components/BarchartDash";
import TransactionList from "./transactions/components/TransactionList";

export default function DashboardPage() {
  const [budgetList, setBudgetList] = useState([]);
  const [listofTransactions, setTransactionList] = useState([]);
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    user && getBudgets();
    getAllExpenses();
  }, [user]);

  const goToBudgets = () => {
    router.replace("/dashboard/budgets");
  };

  // Fetch all transactions belonging to the user
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

  // Fetch all budgets with total spend and total items (transactions)
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
        {/* Welcome Section */}
        <div>
          <h2 className="text-3xl font-bold text-blue-600">
            Hi, {user?.fullName} 👋
          </h2>
          <p className="text-gray-600 mt-1 text-sm">
            Here is your dashboard — visualize your budgets and transactions
            with ease.
          </p>
        </div>

        {/* Info Cards */}
        <CardInfo budgetList={budgetList} />

        {/* Main Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Left Side: Chart + Transactions */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
              <h3 className="text-lg font-semibold text-blue-500 mb-4">
                Budget Overview
              </h3>
              <BarchartDash budgetList={budgetList} />
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
              <h3 className="text-lg font-semibold text-blue-500 mb-4">
                Latest Transactions
              </h3>
              <TransactionList
                transactionList={listofTransactions}
                refreshData={() => getBudgets()}
              />
              {/* <p className="text-sm text-gray-500 italic">
                (Coming soon: transaction list display)
              </p> */}
            </div>
          </div>

          {/* Right Side: Budget List */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-500">
              Latest Budgets
            </h3>
            {budgetList.length > 0 ? (
              budgetList.map((budget, index) => (
                <BudgetItem budget={budget} key={index} />
              ))
            ) : (
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 text-blue-500 rounded-lg text-sm font-medium flex items-center justify-center gap-2 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>No budgets yet. Create one to get started!</span>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Only Button */}
        <div className="mt-8 md:hidden flex justify-center">
          {/* Show only on small mobile devices */}
          <Button
            onClick={goToBudgets}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow transition"
          >
            Create New Budget
          </Button>
        </div>
      </div>
    </div>
  );
}
