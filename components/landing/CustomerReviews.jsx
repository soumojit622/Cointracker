import { Card, CardContent } from "@/components/ui/card";
import { Star, User, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    rating: 5,
    comment:
      "Cointracker has completely transformed how I manage my finances. The interface is so intuitive and beautiful!",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Mike Chen",
    role: "Software Developer",
    rating: 5,
    comment:
      "Finally found an expense tracker that actually works. The budget alerts are a game-changer for my savings.",
    color: "from-blue-600 to-blue-700",
  },
  {
    name: "Emily Davis",
    role: "Small Business Owner",
    rating: 5,
    comment:
      "Love the detailed reports and category breakdowns. It's helped me save $500 per month consistently!",
    color: "from-blue-400 to-blue-500",
  },
];

export function CustomerReviews() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
            CUSTOMER REVIEWS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied users who trust Cointracker with their
            financial journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden"
            >
              <div className={`h-1 bg-gradient-to-r ${review.color}`}></div>
              <CardContent className="p-8 relative">
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-12 w-12 text-blue-600" />
                </div>

                <div className="flex items-center mb-6">
                  <div
                    className={`bg-gradient-to-r ${review.color} rounded-full w-14 h-14 flex items-center justify-center mr-4 shadow-lg`}
                  >
                    <User className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {review.name}
                    </h4>
                    <p className="text-blue-600 font-medium text-sm">
                      {review.role}
                    </p>
                    <div className="flex mt-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 italic leading-relaxed text-lg">
                  "{review.comment}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-2xl inline-block">
            <div className="flex items-center justify-center space-x-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <p className="text-2xl font-bold">4.9/5 Average Rating</p>
            <p className="text-blue-100">Based on 2,500+ reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
