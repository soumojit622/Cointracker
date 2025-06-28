"use client";

import React, { useEffect, useState } from "react";
import { eq } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";
import { db } from "@/utils/dbConfig";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import EmojiPicker from "emoji-picker-react";
import { Edit } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Budgets } from "@/utils/schema";
import { Save } from "lucide-react";

export default function EditBudget({ budgetInfo, refeshData }) {
  const [emoji, setEmoji] = useState("💰");
  const [openPicker, setOpenPicker] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const { user } = useUser();

  useEffect(() => {
    if (budgetInfo) {
      setEmoji(budgetInfo.icon || "💰");
      setName(budgetInfo.name || "");
      setAmount(budgetInfo.amount || "");
    }
  }, [budgetInfo]);

  const onUpdateBudget = async () => {
    const result = await db
      .update(Budgets)
      .set({
        name,
        amount: Number(amount),
        icon: emoji,
      })
      .where(eq(Budgets.id, budgetInfo.id))
      .returning();

    if (result) {
      toast.success("Budget updated successfully!");
      refeshData();
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-500 hover:bg-green-600 text-white font-medium flex items-center gap-2 px-4 py-2">
          <Edit size={18} />
          Edit
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-blue-600">
            Edit Budget
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500 mt-1">
            Modify your budget name, icon, or amount.
          </DialogDescription>
        </DialogHeader>

        {/* Emoji Picker */}
        <div className="mt-4 relative">
          <label className="text-sm pr-2 font-medium text-gray-700 mb-1 inline-block">
            Choose Icon
          </label>
          <Button
            className="text-xl border border-gray-300"
            variant="outline"
            onClick={() => setOpenPicker(!openPicker)}
          >
            {emoji}
          </Button>
          {openPicker && (
            <div className="absolute z-30 mt-2">
              <EmojiPicker
                onEmojiClick={(e) => {
                  setEmoji(e.emoji);
                  setOpenPicker(false);
                }}
              />
            </div>
          )}
        </div>

        {/* Input Fields */}
        <div className="mt-4">
          <label className="text-sm font-medium text-gray-700">
            Budget Name
          </label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Groceries"
            className="mt-1"
          />
        </div>

        <div className="mt-4">
          <label className="text-sm font-medium text-gray-700">Amount</label>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g. 3000"
            className="mt-1"
          />
        </div>

        <DialogFooter className="mt-6">
          <DialogClose asChild>
            <Button
              onClick={onUpdateBudget}
              disabled={!(name && amount)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center justify-center gap-2"
            >
              <Save size={16} />
              Update Budget
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
