import { Button } from "@/components/ui/button";
import { Apple, Play, QrCode } from "lucide-react";

const DownloadCTA = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="glow-orb glow-orb-secondary w-[600px] h-[600px] -bottom-40 left-1/2 -translate-x-1/2 animate-pulse-glow opacity-30" />

      <div className="container relative z-10 px-6">
        <div className="glass-card rounded-[2.5rem] p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto glow-primary">
          {/* Content */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient">Get Started?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto text-balance">
            Join thousands of business psychology professionals already growing
            their careers with BPME
          </p>

          {/* App Store buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="https://apps.apple.com/us/app/business-psychologist-me/id6757138241"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="store" size="lg" className="gap-3">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <span className="block text-xs opacity-80">Download on</span>
                  <span className="block font-semibold text-base">
                    App Store
                  </span>
                </div>
              </Button>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.businesspsychologistme.Business_Psychologist_ME"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="storeOutline" size="lg" className="gap-3">
                <Play className="w-6 h-6 fill-current" />
                <div className="text-left">
                  <span className="block text-xs opacity-80">Get it on</span>
                  <span className="block font-semibold text-base">
                    Google Play
                  </span>
                </div>
              </Button>
            </a>
          </div>

          {/* QR Codes */}
          <div className="border-t border-border/50 pt-10">
            <p className="text-sm text-muted-foreground mb-6 flex items-center justify-center gap-2">
              <QrCode className="w-4 h-4" />
              or scan to download
            </p>
            <div className="flex gap-8 justify-center">
              <div className="text-center">
                <div className="w-28 h-28 glass-card rounded-2xl flex items-center justify-center mb-3 mx-auto p-3">
                  <div className="w-full h-full bg-foreground rounded-lg flex items-center justify-center">
                    <QrCode className="w-12 h-12 text-background" />
                  </div>
                </div>
                <p className="text-sm font-medium">iOS</p>
              </div>
              <div className="text-center">
                <div className="w-28 h-28 glass-card rounded-2xl flex items-center justify-center mb-3 mx-auto p-3">
                  <div className="w-full h-full bg-foreground rounded-lg flex items-center justify-center">
                    <QrCode className="w-12 h-12 text-background" />
                  </div>
                </div>
                <p className="text-sm font-medium">Android</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
