import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/utils/dbConfig";
import { Loader, PlusCircle } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
import { Transactions, Budgets } from "@/utils/schema";

export default function AddExpense({ budgetId, user, refreshData }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const addNewTransaction = async () => {
    const trimmedName = name.trim();
    const parsedAmount = Number(amount);

    if (!trimmedName) {
      toast.error("Transaction name cannot be empty.");
      return;
    }

    if (isNaN(parsedAmount)) {
      toast.error("Amount must be a valid number.");
      return;
    }

    try {
      setLoading(true);
      const result = await db
        .insert(Transactions)
        .values({
          name: trimmedName,
          amount: parsedAmount,
          budgetId,
          createdAt: new Date().toISOString(), // ✅ ISO format for DB
        })
        .returning({ insertedId: Budgets.id });

      if (result) {
        toast.success("Transaction added successfully!");
        refreshData();
        setName("");
        setAmount("");
      }
    } catch (error) {
      toast.error("Failed to add transaction.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border bg-white border-blue-100 p-6 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold text-blue-700 mb-4">
        Add a Transaction
      </h2>

      {/* Transaction Name */}
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-700">
          Transaction Name
        </label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. First Semester"
          className="mt-1"
        />
      </div>

      {/* Transaction Amount */}
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-700">
          Transaction Amount
        </label>
        <Input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="e.g. 200000"
          className="mt-1"
        />
      </div>

      <Button
        onClick={addNewTransaction}
        disabled={!name || !amount || loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <Loader className="h-4 w-4 animate-spin" />
            Adding...
          </span>
        ) : (
          <span className="flex items-center gap-2 justify-center">
            <PlusCircle className="h-4 w-4" />
            Add Transaction
          </span>
        )}
      </Button>
    </div>
  );
}
