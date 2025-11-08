import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Students learning together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground space-y-8 animate-slide-in-left">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold">
                🎓 India's Leading MBA Prep Platform
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your
              <span className="text-accent block mt-2">Career Journey</span>
              with ThinkPlus
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
              Master MBA entrance exams with expert guidance. From CAT to GDPI, we provide comprehensive training that gets results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/courses">
                <Button size="lg" className="gradient-accent font-semibold text-base group shadow-lg hover:shadow-xl transition-all">
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-base"
                >
                  Book Free Demo
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl md:text-3xl font-bold">10K+</div>
                <div className="text-sm text-primary-foreground/80">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl md:text-3xl font-bold">95%</div>
                <div className="text-sm text-primary-foreground/80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <div className="text-2xl md:text-3xl font-bold">500+</div>
                <div className="text-sm text-primary-foreground/80">Top B-School Selections</div>
              </div>
            </div>
          </div>

          {/* Right Content - Optional Additional Visual */}
          <div className="hidden lg:block animate-slide-in-right">
            <div className="relative">
              {/* Floating Cards */}
              <div className="absolute top-10 right-10 p-6 bg-card rounded-2xl shadow-2xl animate-scale-in">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center">
                    <Award className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Top Ranker</div>
                    <div className="font-bold text-foreground">99.8 Percentile</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
