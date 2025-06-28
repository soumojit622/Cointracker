"use client";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeftCircle, PanelLeft } from "lucide-react";
import React from "react";

export default function DashboardHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const isDashboard = pathname === "/dashboard";

  const gotoDash = () => {
    router.push("/dashboard");
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center space-x-3">
          {!isDashboard && (
            <Button
              onClick={gotoDash}
              variant="outline"
              className="text-blue-600 hover:text-blue-700 transition-all flex items-center gap-2"
            >
              <ArrowLeftCircle className="h-5 w-5" />
              <span className="font-medium hidden sm:inline">
                Back to Dashboard
              </span>
            </Button>
          )}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-10 h-10",
                userButtonPopoverCard: "shadow-xl",
                userPreviewMainIdentifier: "font-semibold",
              },
            }}
            afterSignOutUrl="/"
          />
        </div>
      </div>
    </header>
  );
}
