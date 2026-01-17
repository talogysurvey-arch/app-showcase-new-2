import { Users, MessageSquare, BookOpen, UserCircle, Briefcase, Award } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Verified Expert Directory",
    description: "Find and connect with verified business psychology professionals across the Middle East.",
  },
  {
    icon: MessageSquare,
    title: "Community & Networking",
    description: "Engage with peers through discussions, events, and shared industry insights.",
  },
  {
    icon: BookOpen,
    title: "Resources & Insights",
    description: "Explore evidence-based tools, articles, and frameworks to elevate performance.",
  },
  {
    icon: UserCircle,
    title: "Professional Profiles",
    description: "Showcase expertise, credentials, and services in one trusted professional profile.",
  },
  {
    icon: Briefcase,
    title: "Jobs & Opportunities",
    description: "Access exclusive roles, tenders, and consulting opportunities in business psychology.",
  },
  {
    icon: Award,
    title: "Recognition & Credibility",
    description: "Build trust and professional standing through platform recognition and visibility.",
  },
];

const Features = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-50" />
      <div className="glow-orb glow-orb-primary w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow opacity-20" />

      <div className="container relative z-10 px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need{' '}
            <span className="text-gradient">In Your Pocket</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Powerful features designed to help you connect with business psychology professionals and grow your career.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group glass-card rounded-3xl p-8 transition-smooth hover:scale-[1.02] hover:border-primary/30"
              style={{ 
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-smooth group-hover:bg-primary/20 group-hover:scale-110">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3 transition-smooth group-hover:text-primary">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
