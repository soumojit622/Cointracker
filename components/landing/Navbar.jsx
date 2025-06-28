"use client";

import { Button } from "@/components/ui/button";
import {
  UserButton,
  useUser,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";
import {
  ChevronDown,
  DollarSign,
  HelpCircle,
  LayoutList,
  LogIn,
  Menu,
  Rocket,
  Shield,
  Star,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const user = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/favicon.png"
              alt="Cointracker Logo"
              width={52}
              height={52}
              className="object-contain"
            />
            <div className="ml-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Cointracker
              </span>
              <div className="flex items-center mt-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500 ml-2">
                  4.9 • 50k+ users
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              <Link
                href="#features"
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
              >
                <LayoutList className="h-4 w-4" />
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="#pricing"
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
              >
                <DollarSign className="h-4 w-4" />
                Pricing
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>

              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center">
                  Resources
                  <ChevronDown className="h-4 w-4 ml-1 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-blue-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-6 space-y-4">
                    <Link
                      href="#faq"
                      className="flex items-center p-3 rounded-xl hover:bg-blue-50 transition-colors"
                    >
                      <div className="bg-blue-100 rounded-lg p-2 mr-3">
                        <Shield className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">FAQ</div>
                        <div className="text-sm text-gray-500">
                          Common questions
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center p-3 rounded-xl hover:bg-blue-50 transition-colors"
                    >
                      <div className="bg-blue-100 rounded-lg p-2 mr-3">
                        <Users className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          Community
                        </div>
                        <div className="text-sm text-gray-500">
                          Join our users
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <SignedOut>
                <SignInButton>
                  <Button
                    variant="outline"
                    className="text-gray-700 hover:text-blue-600 font-medium flex items-center gap-2"
                  >
                    <LogIn className="h-4 w-4" />
                    Sign In
                  </Button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>

              <Link href={user.isSignedIn ? "/dashboard" : "/sign-up"}>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 flex items-center gap-2">
                  <Rocket className="h-4 w-4" />
                  {user.isSignedIn ? "Dashboard" : "Get Started Free"}
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-blue-100 bg-white/95 backdrop-blur-md">
            <div className="px-4 py-6 space-y-4">
              <Link
                href="#features"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                <LayoutList className="h-4 w-4" />
                Features
              </Link>
              <Link
                href="#pricing"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                <DollarSign className="h-4 w-4" />
                Pricing
              </Link>
              <Link
                href="#faq"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium py-2"
              >
                <HelpCircle className="h-4 w-4" />
                FAQ
              </Link>

              <div className="pt-4 flex flex-col gap-3">
                <SignedOut>
                  <SignInButton>
                    <Button
                      variant="outline"
                      className="w-full text-gray-700 flex items-center justify-center gap-2"
                    >
                      <LogIn className="h-4 w-4" />
                      Sign In
                    </Button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>

                <Link href={user.isSignedIn ? "/dashboard" : "/sign-up"}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2">
                    <Rocket className="h-4 w-4" />
                    {user.isSignedIn ? "Dashboard" : "Get Started Free"}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
