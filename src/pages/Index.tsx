import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Target, Trophy, TrendingUp, ArrowRight } from "lucide-react";
import mbaImage from "@/assets/mba-prep.jpg";
import gdpiImage from "@/assets/gdpi-training.jpg";
import catImage from "@/assets/cat-coaching.jpg";

const Index = () => {
  const courses = [
    {
      title: "MBA Entrance Prep",
      description: "Comprehensive preparation for CAT, XAT, SNAP, and other MBA entrance exams",
      image: mbaImage,
      duration: "6 Months",
      students: "2000+",
      rating: "4.9",
      features: [
        "Complete syllabus coverage",
        "Mock tests & analysis",
        "Expert faculty guidance",
        "Study materials included"
      ],
    },
    {
      title: "GDPI Training",
      description: "Master Group Discussions and Personal Interviews with industry experts",
      image: gdpiImage,
      duration: "2 Months",
      students: "1500+",
      rating: "4.8",
      features: [
        "Mock GD sessions",
        "1-on-1 PI coaching",
        "Resume building",
        "Current affairs training"
      ],
    },
    {
      title: "CAT Coaching",
      description: "Focused CAT preparation with proven strategies and techniques",
      image: catImage,
      duration: "8 Months",
      students: "3000+",
      rating: "4.9",
      features: [
        "Section-wise training",
        "Daily practice tests",
        "Doubt clearing sessions",
        "Performance tracking"
      ],
    },
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "IIM Ahmedabad - CAT 99.8%ile",
      content: "ThinkPlus transformed my preparation journey. The structured approach and expert guidance helped me achieve my dream percentile.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "IIM Bangalore",
      content: "The GDPI training was exceptional. The mock sessions and personalized feedback boosted my confidence tremendously.",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      role: "XLRI Jamshedpur",
      content: "Best coaching institute I've come across. The faculty's dedication and comprehensive study material made all the difference.",
      rating: 5,
    },
  ];

  const stats = [
    { icon: BookOpen, value: "50+", label: "Expert Faculty" },
    { icon: Target, value: "95%", label: "Success Rate" },
    { icon: Trophy, value: "500+", label: "Top B-School Selections" },
    { icon: TrendingUp, value: "10K+", label: "Students Trained" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="text-accent">ThinkPlus?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine expert faculty, proven methodologies, and personalized attention to help you achieve your MBA dreams.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-2xl shadow-smooth hover:shadow-lg transition-all animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Popular <span className="text-accent">Courses</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive range of courses designed to help you succeed in your MBA journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {courses.map((course, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CourseCard {...course} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/courses">
              <Button size="lg" className="gradient-accent font-semibold group">
                View All Courses
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Success <span className="text-accent">Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our students who achieved their dreams with ThinkPlus.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Ready to Start Your MBA Journey?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in">
            Join thousands of successful students who transformed their careers with ThinkPlus Education.
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-accent font-semibold text-base shadow-lg hover:shadow-xl transition-all animate-scale-in">
              Book Your Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
