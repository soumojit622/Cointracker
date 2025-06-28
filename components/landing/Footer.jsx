import Link from "next/link";
import {
  DollarSign,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
  MapPin,
  Phone,
  Clock,
  Award,
  Shield,
  Users,
  Smartphone,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-800/10 rounded-full blur-3xl"></div>
      </div>

      {/* Trust Bar */}
      <div className="border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 mb-3">
                <Users className="h-6 w-6 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white">50,000+</div>
              <div className="text-blue-200 text-sm">Active Users</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 mb-3">
                <Award className="h-6 w-6 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white">4.9★</div>
              <div className="text-blue-200 text-sm">App Store Rating</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 mb-3">
                <Shield className="h-6 w-6 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white">Bank-Level</div>
              <div className="text-blue-200 text-sm">Security</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 mb-3">
                <Globe className="h-6 w-6 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-blue-200 text-sm">Countries</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              {/* Logo container */}
              <div>
                <Image
                  src="/favicon.png"
                  alt="Cointracker Logo"
                  width={52}
                  height={52}
                  className="object-contain"
                />
              </div>

              {/* App Name and Tagline */}
              <div className="ml-4">
                <span className="text-2xl font-bold">Cointracker</span>
                <div className="text-blue-300 text-sm">Financial Freedom</div>
              </div>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              The most beautiful expense tracking app that helps you take
              control of your finances and achieve your goals with confidence.
            </p>
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                <span>New Delhi, India 🇮🇳</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span>+91 98111 22334</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="h-5 w-5 text-blue-400 mr-3" />
                <span>Mon - Sat • 10 AM to 7 PM IST</span>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, index) => (
                <Link key={index} href={social.href} className="group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 hover:bg-blue-500/20 transition-all duration-300 group-hover:scale-110">
                    <social.icon className="h-5 w-5 text-gray-300 group-hover:text-white" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold mb-6 text-xl text-white flex items-center">
              <Smartphone className="h-5 w-5 mr-2 text-blue-400" />
              Product
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Features", href: "#features" },
                { name: "Pricing", href: "#pricing" },
                { name: "Mobile App", href: "#" },
                { name: "Web App", href: "#" },
                { name: "Integrations", href: "#" },
                { name: "API Documentation", href: "#" },
                { name: "Changelog", href: "#" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors font-medium flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold mb-6 text-xl text-white flex items-center">
              <Award className="h-5 w-5 mr-2 text-blue-400" />
              Company
            </h4>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "#" },
                { name: "Careers", href: "#" },
                { name: "Press Kit", href: "#" },
                { name: "Blog", href: "#" },
                { name: "Partners", href: "#" },
                { name: "Investors", href: "#" },
                { name: "Contact", href: "#" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors font-medium flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Support */}
          <div>
            <h4 className="font-bold mb-6 text-xl text-white flex items-center">
              <Mail className="h-5 w-5 mr-2 text-blue-400" />
              Stay Connected
            </h4>
            <p className="text-gray-300 mb-6">
              Get the latest updates, tips, and exclusive offers delivered to
              your inbox.
            </p>

            {/* Newsletter Signup */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-8">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20">
                  <Mail className="h-5 w-5 text-blue-300 mr-3" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent text-white placeholder-gray-300 flex-1 outline-none"
                  />
                </div>
                <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 font-semibold rounded-xl">
                  <Send className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Support Links */}
            <div>
              <h5 className="font-semibold mb-4 text-white">Support</h5>
              <ul className="space-y-3">
                {[
                  { name: "Help Center", href: "#" },
                  { name: "FAQ", href: "#faq" },
                  { name: "Contact Support", href: "#" },
                  { name: "System Status", href: "#" },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors font-medium flex items-center group"
                    >
                      <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-16 pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
              <p className="text-gray-300 text-lg">
                © {new Date().getFullYear()} Cointracker. All rights reserved.
              </p>

              <div className="flex space-x-6">
                <Link
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>

            {/* App Download Badges */}
            <div className="flex space-x-4">
              {/* App Store Button */}
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
                <Image
                  src="/appstore.png"
                  alt="App Store"
                  width={24}
                  height={24}
                />
                <div>
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="text-sm font-semibold text-white">
                    App Store
                  </div>
                </div>
              </div>

              {/* Google Play Button */}
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
                <Image
                  src="/play.png"
                  alt="Google Play"
                  width={24}
                  height={24}
                />
                <div>
                  <div className="text-xs text-gray-300">Get it on</div>
                  <div className="text-sm font-semibold text-white">
                    Google Play
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ❤️ Made with Love Message */}
          <div className="mt-8 text-center text-sm text-gray-400">
            Made with <span className="text-red-500">❤️</span> by{" "}
            <span className="font-medium text-white">Soumojit Banerjee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
