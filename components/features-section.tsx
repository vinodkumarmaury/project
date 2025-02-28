import { 
  BarChart3, 
  Zap, 
  Shield, 
  Users, 
  Globe, 
  MessageSquare 
} from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "Advanced Analytics",
    description: "Get detailed insights into your business performance with our advanced analytics dashboard."
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Lightning Fast",
    description: "Our platform is optimized for speed, ensuring your users have a seamless experience."
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Secure by Default",
    description: "Enterprise-grade security features to keep your data safe and compliant with regulations."
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Team Collaboration",
    description: "Work together seamlessly with your team members in real-time with our collaboration tools."
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Global Reach",
    description: "Deploy your product globally with our distributed infrastructure for minimal latency."
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
    title: "24/7 Support",
    description: "Our dedicated support team is available around the clock to help you with any issues."
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, launch, and scale your product
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-background p-8 rounded-lg shadow-sm border border-border">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}