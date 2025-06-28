import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "How secure is my financial data?",
    answer:
      "Your data is protected with bank-level encryption and stored on secure servers. We never share your information with third parties and use multi-factor authentication to keep your account safe.",
  },
  {
    question: "Can I use Cointracker on multiple devices?",
    answer:
      "Yes! Cointracker syncs across all your devices. You can access your expense data on your phone, tablet, and computer with automatic synchronization.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our encrypted payment system.",
  },
  {
    question: "Can I export my expense data?",
    answer:
      "Pro and Premium users can export their data in CSV, Excel, and PDF formats. This makes it easy to share with accountants or import into other financial tools.",
  },
  {
    question: "Is there a mobile app available?",
    answer:
      "Yes! Cointracker is available on iOS and Android. The mobile app includes all the features of the web version, optimized for on-the-go expense tracking.",
  },
  {
    question: "What happens if I cancel my subscription?",
    answer:
      "You can cancel anytime. Your data remains accessible, but you'll be limited to the free plan features. You can always upgrade again to regain full access.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
            Got Questions? We Have Answers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about Cointracker and start your financial journey with confidence
          </p>
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mt-8 shadow-lg">
            <HelpCircle className="h-8 w-8 text-white" />
          </div>
        </div>

        <Accordion type="single" collapsible className="space-y-6">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border-0 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-2 overflow-hidden"
            >
              <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-600 absolute top-0 left-0 right-0"></div>
              <AccordionTrigger className="text-left font-bold text-gray-900 text-lg hover:text-blue-600 py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2 pb-6 text-lg leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-2">Still Have Questions?</h3>
            <p className="text-blue-100 mb-4">Our support team is here to help you 24/7</p>
            <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
