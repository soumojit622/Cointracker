"use client";
import React, { useEffect } from "react";
import SideNav from "./components/SideNav";
import DashboardHeader from "./components/DashboardHeader";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { db } from "@/utils/dbConfig";
import { eq } from "drizzle-orm";
import { Budgets } from "@/utils/schema";

export default function DashboardLayout({ children }) {
  const { user } = useUser();
  const router = useRouter();
  useEffect(() => {
    user && checkUserBudgets();
  }, [user]);

  const checkUserBudgets = async () => {
    const result = await db
      .select()
      .from(Budgets)
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress));
    // console.log(result);
    if (result?.length == 0) {
      router.replace("/dashboard/budgets");
    }
  };
  return (
    <>
      <div className="fixed md:w-64 hidden md:block">
        <SideNav />
      </div>

      <div className="md:ml-64">
        <DashboardHeader />
        {children}
      </div>
    </>
  );
}
