"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small projects",
    priceMonthly: 29,
    priceYearly: 290,
    features: [
      "Up to 5 projects",
      "Basic analytics",
      "24-hour support response time",
      "1 team member",
      "5GB storage"
    ]
  },
  {
    name: "Pro",
    description: "Ideal for growing businesses and teams",
    priceMonthly: 79,
    priceYearly: 790,
    popular: true,
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "4-hour support response time",
      "10 team members",
      "50GB storage",
      "Custom reporting",
      "API access"
    ]
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex needs",
    priceMonthly: 199,
    priceYearly: 1990,
    features: [
      "Unlimited everything",
      "Real-time analytics",
      "1-hour support response time",
      "Unlimited team members",
      "500GB storage",
      "Custom integrations",
      "Dedicated account manager",
      "SSO authentication"
    ]
  }
];

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the plan that's right for you and start building today.
          </p>
          
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-2 ${!isAnnual ? 'font-medium' : 'text-muted-foreground'}`}>Monthly</span>
            <Switch 
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              id="billing-toggle"
            />
            <span className={`ml-2 ${isAnnual ? 'font-medium' : 'text-muted-foreground'}`}>
              Annual <span className="text-sm text-primary">(Save 20%)</span>
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`border ${plan.popular ? 'border-primary shadow-lg' : 'border-border'}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${isAnnual ? plan.priceYearly : plan.priceMonthly}
                  </span>
                  <span className="text-muted-foreground">
                    {isAnnual ? '/year' : '/month'}
                  </span>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}