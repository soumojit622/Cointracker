"use client";

import { UserButton } from "@clerk/nextjs";
import { PiggyBank, ReceiptText, ShieldCheck, LayoutGrid } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function SideNav() {
  const path = usePathname();

  const menuList = [
    { key: 1, name: "Dashboard", icon: LayoutGrid, path: "/dashboard" },
    { key: 2, name: "Budgets", icon: PiggyBank, path: "/dashboard/budgets" },
    {
      key: 3,
      name: "Transactions",
      icon: ReceiptText,
      path: "/dashboard/transactions",
    },
    {
      key: 4,
      name: "Upgrade",
      icon: ShieldCheck,
      path: "/dashboard/upgrade",
    },
  ];

  return (
    <aside className="h-screen w-full max-w-[260px] p-6 bg-white/90 backdrop-blur-md border-r border-blue-100 shadow-xl flex flex-col justify-between ">
      {/* Logo Section */}
      <div>
        <div className="flex items-center gap-3 mb-10">
          <Image
            src="/favicon.png"
            alt="Cointracker Logo"
            width={42}
            height={42}
          />
          <h1 className="text-xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Cointracker
          </h1>
        </div>

        {/* Menu Section */}
        <nav className="flex flex-col space-y-4">
          {menuList.map((menu) => (
            <Link key={menu.key} href={menu.path}>
              <div
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
                ${
                  path === menu.path
                    ? "bg-gradient-to-r from-blue-100 to-blue-50 border-l-4 border-blue-600 text-blue-700 font-semibold"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                <menu.icon className="h-5 w-5" />
                <span className="text-sm">{menu.name}</span>
              </div>
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom Profile Section */}
      <div className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm">
        <UserButton />
        <span className="text-sm font-medium text-gray-700">Profile</span>
      </div>
    </aside>
  );
}
