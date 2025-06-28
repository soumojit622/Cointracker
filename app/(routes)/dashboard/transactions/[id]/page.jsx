"use client";

import React, { useEffect, useState, use } from "react";
import { ArrowLeft, Trash } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { eq, sql, getTableColumns, desc } from "drizzle-orm";
import { db } from "@/utils/dbConfig";
import { Budgets, Transactions } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import BudgetItem from "../../budgets/components/BudgetItem";
import TransactionList from "../components/TransactionList";
import AddExpense from "../components/AddExpense";
import EditBudget from "../components/EditBudget";

export default function TransactionIdPage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const { user } = useUser();
  const [budgetInfo, setBudgetInfo] = useState(null);
  const [transactionList, setTransactionList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (user) getBudgetInfo();
  }, [user]);

  // 🔥 Delete budget and all related transactions
  const deleteBudget = async () => {
    const deletedTransactions = await db
      .delete(Transactions)
      .where(eq(Transactions.budgetId, params.id))
      .returning();

    if (deletedTransactions) {
      const deletedBudget = await db
        .delete(Budgets)
        .where(eq(Budgets.id, params.id))
        .returning();

      if (deletedBudget) {
        toast.success("✅ Budget and transactions deleted successfully.");
        router.replace("/dashboard/budgets");
      }
    }
  };

  // 📥 Fetch budget details
  const getBudgetInfo = async () => {
    const result = await db
      .select({
        ...getTableColumns(Budgets),
        totalSpend: sql`sum(${Transactions.amount})`.mapWith(Number),
        totalItem: sql`count(${Transactions.id})`.mapWith(Number),
      })
      .from(Budgets)
      .leftJoin(Transactions, eq(Budgets.id, Transactions.budgetId))
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
      .where(eq(Budgets.id, params.id))
      .groupBy(Budgets.id);

    setBudgetInfo(JSON.parse(JSON.stringify(result[0])));
    getTransactionList(); // also fetch transactions
  };

  // 📥 Fetch transaction history
  const getTransactionList = async () => {
    const result = await db
      .select()
      .from(Transactions)
      .where(eq(Transactions.budgetId, params.id))
      .orderBy(desc(Transactions.id));

    setTransactionList(JSON.parse(JSON.stringify(result)));
  };

  const goBack = () => router.replace("/dashboard/budgets");

  return (
    <div className="min-h-screen px-6 md:px-10 py-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* 🔙 Back & Heading */}
        <div className="flex items-center gap-3 text-blue-600">
          <ArrowLeft
            onClick={goBack}
            className="cursor-pointer hover:text-blue-800 transition"
          />
          <h2 className="text-2xl md:text-3xl font-bold">My Transactions</h2>
        </div>

        {/* 🛠️ Budget Actions */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-3">
            <EditBudget
              budgetInfo={budgetInfo}
              refreshData={getBudgetInfo}
            />
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 transition"
                >
                  <Trash className="h-4 w-4" />
                  <span>Delete</span>
                </Button>
              </AlertDialogTrigger>

              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-red-600">
                    Delete Budget
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    This will delete the budget and all associated transactions. This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="hover:bg-gray-100">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    onClick={deleteBudget}
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    Confirm
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        {/* 📊 Budget Summary + ➕ Add Expense */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {budgetInfo ? (
            <BudgetItem budget={budgetInfo} />
          ) : (
            <div className="h-[150px] bg-slate-200 rounded-lg animate-pulse w-full" />
          )}
          <AddExpense
            budgetId={params.id}
            user={user}
            refreshData={getBudgetInfo}
          />
        </div>

        {/* 📋 Transactions Table */}
        <div>
          <h2 className="text-lg font-semibold text-blue-600 mb-3">
            Latest Transactions
          </h2>
          <TransactionList
            transactionList={transactionList}
            refreshData={getBudgetInfo}
          />
        </div>
      </div>
    </div>
  );
}
