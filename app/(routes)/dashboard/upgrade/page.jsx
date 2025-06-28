"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Crown, Rocket, AlertCircle } from "lucide-react";

export default function UpgradePage() {
  return (
    <div className=" py-16 px-6 flex flex-col items-center">
      {/* 🛠 Info Banner */}
      <div className="mb-12 w-full max-w-3xl backdrop-blur-md bg-white/70 border border-blue-200 shadow-lg px-6 py-5 rounded-2xl relative">
        <div className="absolute -top-3 left-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          ⚠️ Info
        </div>
        <div className="flex items-center gap-3 text-blue-800">
          <AlertCircle className="h-6 w-6 text-blue-600" />
          <div className="text-sm sm:text-base">
            <p className="font-semibold">
              Upgrade is <span className="underline">under development</span>
            </p>
            <p className="mt-1">
              Until then, enjoy <strong>all premium features</strong> for free
              🎉
            </p>
          </div>
        </div>
      </div>

      {/* 💳 Plans */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        <PlanCard
          title="Free Plan"
          icon={<Rocket className="h-5 w-5 text-blue-500" />}
          description="Start managing your finances with essential tools."
          features={[
            "Track expenses and income",
            "Basic budgeting tools",
            "Secure account access",
          ]}
          buttonText="Current Plan"
          buttonStyle="outline"
        />

        <PlanCard
          highlight="Most Popular ★"
          title="Premium Plan"
          icon={<Crown className="h-5 w-5 text-yellow-300" />}
          description="Unlock advanced features and gain financial mastery."
          features={[
            "Unlimited budgets & transactions",
            "AI-powered insights (Coming Soon)",
            "Priority customer support",
            "Advanced security & backup",
          ]}
          buttonText="Enjoying Free Access"
          featured
        />
      </div>
    </div>
  );
}

function PlanCard({
  title,
  icon,
  description,
  features,
  buttonText,
  highlight,
  buttonStyle = "solid",
  featured = false,
}) {
  return (
    <div
      className={`relative rounded-3xl p-8 transition-all duration-300 border shadow-xl ${
        featured
          ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white border-blue-600"
          : "bg-white text-gray-800 border-blue-500"
      }`}
    >
      {/* Highlight Badge */}
      {highlight && (
        <div className="absolute -top-4 left-4 bg-yellow-400 text-xs font-bold text-gray-900 px-3 py-1 rounded-full shadow">
          {highlight}
        </div>
      )}

      {/* Header */}
      <div className="flex items-center gap-3 mb-4 text-2xl font-extrabold tracking-tight">
        {icon}
        {title}
      </div>

      {/* Description */}
      <p
        className={`text-sm mb-6 ${
          featured ? "text-blue-100" : "text-gray-600"
        }`}
      >
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-4 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <CheckCircle2
              className={`h-5 w-5 ${featured ? "text-white" : "text-blue-600"}`}
            />
            <span className={`${featured ? "text-white" : "text-gray-800"}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <Button
        disabled
        className={`w-full text-sm font-semibold rounded-xl shadow flex items-center justify-center gap-2 cursor-not-allowed opacity-80 ${
          featured
            ? "bg-white text-blue-700 hover:bg-blue-100"
            : "border border-blue-500 text-blue-600 hover:bg-blue-50"
        }`}
        variant={buttonStyle === "outline" ? "outline" : "default"}
      >
        <span>🔒</span>
        {buttonText}
      </Button>
    </div>
  );
}
