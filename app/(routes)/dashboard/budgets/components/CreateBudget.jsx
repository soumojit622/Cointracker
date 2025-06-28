"use client";
import React, { useState } from "react";
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
import { db } from "@/utils/dbConfig";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import EmojiPicker from "emoji-picker-react";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";
import { Budgets } from "@/utils/schema";
import { HiPlusCircle } from "react-icons/hi2";
import { PlusCircle } from "lucide-react";

export default function CreateBudget({ refreshData }) {
  const [emoji, setEmoji] = useState("💰");
  const [openPicker, setOpenPicker] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const { user } = useUser();

  // Create new budget
  const onCreateBudget = async () => {
    const result = await db
      .insert(Budgets)
      .values({
        name,
        amount: Number(amount),
        createdBy: user?.primaryEmailAddress?.emailAddress,
        icon: emoji,
      })
      .returning({ insertedId: Budgets.id });

    if (result) {
      refreshData?.();
      toast.success("Budget created successfully!");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-blue-50 hover:bg-blue-100 transition border border-blue-200 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-blue-600 cursor-pointer shadow-sm hover:shadow-md">
          <h2 className="text-4xl font-bold">+</h2>
          <p className="text-sm mt-1 font-medium">Create New Budget</p>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-blue-600">
            Create New Budget
          </DialogTitle>
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
                open={openPicker}
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
            placeholder="e.g. College Fee"
            className="mt-1"
          />
        </div>

        <div className="mt-4">
          <label className="text-sm font-medium text-gray-700">Amount</label>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g. 200000"
            className="mt-1"
          />
        </div>

        <DialogFooter className="mt-6">
          <DialogClose asChild>
            <Button
              onClick={onCreateBudget}
              disabled={!(name && amount)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center justify-center gap-2"
            >
              <PlusCircle className="h-5 w-5" />
              Create Budget
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
