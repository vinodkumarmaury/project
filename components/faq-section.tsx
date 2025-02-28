import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the 14-day free trial work?",
    answer: "You can sign up for a free 14-day trial with no credit card required. You'll have access to all features during the trial period. At the end of the trial, you can choose to subscribe to one of our plans or your account will automatically downgrade to the free tier."
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new pricing will take effect immediately. If you downgrade, the new pricing will take effect at the start of your next billing cycle."
  },
  {
    question: "Do you offer discounts for non-profits or educational institutions?",
    answer: "Yes, we offer special pricing for non-profits, educational institutions, and open-source projects. Please contact our sales team for more information."
  },
  {
    question: "How secure is my data?",
    answer: "We take security very seriously. All data is encrypted in transit and at rest. We use industry-standard security practices and regularly undergo security audits. Your data is backed up daily, and we have strict access controls in place."
  },
  {
    question: "Can I export my data if I decide to cancel?",
    answer: "Absolutely. You own your data, and we make it easy to export everything if you decide to cancel your subscription. You can export your data at any time from your account settings."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer email and chat support for all customers. Response times vary by plan, with our Enterprise customers receiving priority support with guaranteed response times. We also have an extensive knowledge base and community forum."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our platform, pricing, and support.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}