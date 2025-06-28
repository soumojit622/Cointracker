import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, Server } from "lucide-react"

const securityFeatures = [
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Your financial data is protected with industry-standard encryption and security protocols",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Lock,
    title: "Secure Authentication",
    description: "Multi-factor authentication and biometric login keeps your account completely safe",
    color: "from-blue-600 to-blue-700",
  },
  {
    icon: Eye,
    title: "Privacy First",
    description: "We never share your personal financial information with third parties, guaranteed",
    color: "from-blue-400 to-blue-500",
  },
  {
    icon: Server,
    title: "Secure Storage",
    description: "All data is stored on encrypted servers with regular backups and 99.9% uptime",
    color: "from-blue-700 to-blue-800",
  },
]

export function SecurityPrivacy() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
            SECURITY & PRIVACY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
            Your Data is Safe & Secure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We take your privacy and security seriously with enterprise-grade protection and beautiful transparency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {securityFeatures.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-blue-50"
            >
              <div className={`h-1 bg-gradient-to-r ${feature.color}`}></div>
              <CardHeader className="pb-4">
                <div
                  className={`bg-gradient-to-r ${feature.color} rounded-2xl w-16 h-16 flex items-center justify-center mb-4 shadow-lg`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-2xl">
            <Shield className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Trusted by 50,000+ Users</h3>
            <p className="text-blue-100 text-lg">Join thousands who trust us with their financial data every day</p>
          </div>
        </div>
      </div>
    </section>
  )
}
