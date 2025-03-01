"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { motion, AnimatePresence } from "framer-motion";

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
      "5GB storage",
    ],
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
      "API access",
    ],
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
      "SSO authentication",
    ],
  },
  {
    name: "Premium",
    description: "A premium plan for growing businesses",
    priceMonthly: 20,
    priceYearly: 200,
    features: [
      "Advanced AI insights",
      "Priority support",
      "Unlimited projects",
      "Access to all AI tools",
      "Custom integrations",
    ],
    customStyle: true,
  },
];

// Price display with letter-by-letter animation
function AnimatedPrice({ price, isAnimating }: { price: number, isAnimating: boolean }): number {
  const [displayPrice, setDisplayPrice] = useState<number>(price);
  
  useEffect(() => {
    if (!isAnimating) {
      setDisplayPrice(price);
      return;
    }
    
    const targetDigits = price.toString().split('');
    const currentDigits = displayPrice.toString().split('');
    const maxLength = Math.max(targetDigits.length, currentDigits.length);
    
    let step = 0;
    const interval = setInterval(() => {
      if (step >= maxLength) {
        clearInterval(interval);
        setDisplayPrice(price);
        return;
      }
      
      // Update one digit at a time
      setDisplayPrice((prev: number) => {
        const prevDigits = prev.toString().split('');
        const newDigits = [...prevDigits];
        if (step < targetDigits.length) {
          newDigits[step] = targetDigits[step];
        }
        step++;
        return parseInt(newDigits.join('') || '0');
      });
    }, 100); // 100ms per digit for a roughly 1s total animation
    
    return () => clearInterval(interval);
  }, [price, isAnimating]);
  
  return displayPrice;
}

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleBillingToggle = (checked: boolean) => {
    setIsAnimating(true);
    setIsAnnual(checked);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <section
      id="pricing"
      className="relative py-20 pt-40 bg-black" /* added extra top padding (pt-40) */
    >
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-14 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h4 className="text-xl font-bold tracking-tight text-white">
            Pricing
          </h4>
          <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
          Simple pricing for everyone.
          </h2>
          <p className="mt-6 text-xl leading-8 text-white/80">
          Choose an affordable plan that&apos;s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
          </p>
        </div>

        <div className="flex items-center justify-center space-x-2">
          <span className={`mr-2 text-white ${!isAnnual ? "font-medium" : "text-white/70"}`}>
            Monthly
          </span>
          <Switch
            checked={isAnnual}
            onCheckedChange={handleBillingToggle}
            id="billing-toggle"
            className="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50"
          />
          <span className={`ml-2 text-white ${isAnnual ? "font-medium" : "text-white/70"}`}>
            Annual <span className="inline-block whitespace-nowrap rounded-full bg-black px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white dark:bg-white dark:text-black border border-white/20">2 MONTHS FREE ✨</span>
          </span>
        </div>

        <div className="mx-auto grid w-full justify-center sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pricingPlans.map((plan, index) => {
            // Special styling for Pro card
            const isPro = plan.name === "Pro";
            
            const containerClasses = plan.customStyle
              ? "relative flex max-w-[400px] flex-col gap-6 rounded-2xl p-3.5 text-black dark:text-white overflow-hidden border-[1px] border-white/30"
              : isPro 
                ? "relative flex max-w-[400px] flex-col gap-6 rounded-2xl p-3.5 text-white overflow-hidden border-2" 
                : "relative flex max-w-[400px] flex-col gap-6 rounded-2xl p-3.5 text-white overflow-hidden border-[1px] border-white/30";

            const currentPrice = isAnnual ? plan.priceYearly : plan.priceMonthly;

            return (
              <div 
                key={index} 
                className={containerClasses} 
                style={isPro 
                  ? {border: "2px solid #facc15", borderRadius: "1rem"} 
                  : {borderRadius: "1rem"}
                }
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Popular
                    </span>
                  </div>
                )}
                <div className="flex items-center">
                  <div className="ml-4">
                    <h2 className="text-base font-semibold leading-7">{plan.name}</h2>
                    <p className="h-10 text-sm leading-5 text-white/70">
                      {plan.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-row gap-1">
                  <AnimatePresence mode="wait">
                    <motion.span 
                      key={isAnnual ? "annual" : "monthly"}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="text-4xl font-bold text-white"
                    >
                      $<AnimatedPrice price={currentPrice} isAnimating={isAnimating} />
                      <span className="text-xs"> / month</span>
                    </motion.span>
                  </AnimatePresence>
                </div>

                <Button className="inline-flex items-center justify-center whitespace-nowrap rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2">
                  <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black"></span>
                  <p>Subscribe</p>
                </Button>

                <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0" />

                <ul className="flex flex-col gap-2 font-normal">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-xs font-medium text-white"
                    >
                      <svg 
                        width="15" 
                        height="15" 
                        viewBox="0 0 15 15" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white"
                      >
                        <path 
                          d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" 
                          fill="currentColor" 
                          fillRule="evenodd" 
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="flex">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
  #pricing {
    position: relative;
    background: black;
    overflow: hidden; /* Hide any part of the radial gradient that extends above */
  }
  #pricing::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 140px; /* Adjust height as needed */
    pointer-events: none;
    background: radial-gradient(
      circle at top center,
      rgb(30, 30, 30) 0%,
      transparent 80%
    );
    z-index: -1;
  }
`}</style>
    </section>
  );
}