import React from "react";
import { eq } from "drizzle-orm";
import { Trash2 } from "lucide-react";
import { db } from "@/utils/dbConfig";
import { Transactions } from "@/utils/schema";
import { toast } from "sonner";

export default function TransactionList({ transactionList, refreshData }) {
  const deleteTransaction = async (trasac) => {
    const result = await db
      .delete(Transactions)
      .where(eq(Transactions.id, trasac.id))
      .returning();

    if (result) {
      toast.success("Transaction deleted successfully!");
      refreshData();
    }
  };

  return (
    <div className="mt-6">
      {/* Table Header */}
      <div className="grid grid-cols-4 p-3 bg-blue-50 rounded-md font-semibold text-sm text-blue-700 border border-blue-100 text-center">
        <span>Name</span>
        <span>Amount</span>
        <span>Date</span>
        <span>Action</span>
      </div>

      {/* Table Rows */}
      <div className="divide-y divide-gray-100 border border-t-0 rounded-b-md">
        {transactionList.map((trasac, index) => (
          <div
            key={index}
            className="grid grid-cols-4 items-center px-3 py-3 text-sm bg-white hover:bg-blue-50 transition text-center"
          >
            <span className="truncate">{trasac.name}</span>
            <span className="text-green-700 font-medium">₹{trasac.amount}</span>
            <span className="text-gray-500">
              {new Date(trasac.createdAt).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
            <div>
              <Trash2
                size={18}
                className="text-red-500 hover:text-red-700 cursor-pointer inline"
                onClick={() => deleteTransaction(trasac)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {transactionList.length === 0 && (
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
          <span>No transactions to display.</span>
        </div>
      )}
    </div>
  );
}
