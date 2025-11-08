import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Heart, Award, Users, TrendingUp } from "lucide-react";
import teamImage from "@/assets/team-about.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from teaching to student support.",
    },
    {
      icon: Heart,
      title: "Student-Centric",
      description: "Every decision we make prioritizes our students' success and growth.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive community of learners, mentors, and achievers.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "Constantly evolving our methods to deliver the best learning experience.",
    },
  ];

  const stats = [
    { value: "2015", label: "Founded" },
    { value: "10K+", label: "Students Trained" },
    { value: "50+", label: "Expert Faculty" },
    { value: "500+", label: "Top B-School Placements" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-accent">ThinkPlus</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Empowering students to achieve their MBA dreams through expert guidance, proven methodologies, and unwavering support.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Our <span className="text-accent">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2015, ThinkPlus Education was born from a simple vision: to make quality MBA preparation accessible to every aspiring student. What started as a small coaching center in Pune has now grown into one of India's most trusted EdTech platforms.
                </p>
                <p>
                  Our journey has been marked by thousands of success stories, countless hours of dedicated teaching, and an unwavering commitment to student excellence. We've helped over 10,000 students achieve their dreams of getting into top B-Schools across India.
                </p>
                <p>
                  Today, ThinkPlus stands as a testament to what passionate educators and motivated students can achieve together. We continue to evolve, innovate, and adapt to ensure every student gets the best possible preparation for their MBA journey.
                </p>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <img
                src={teamImage}
                alt="ThinkPlus Team"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-2xl shadow-smooth hover:shadow-lg transition-all animate-scale-in">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide world-class MBA entrance preparation that empowers students with knowledge, skills, and confidence to excel in their chosen careers. We aim to bridge the gap between aspiration and achievement through personalized guidance and innovative teaching methodologies.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-smooth hover:shadow-lg transition-all animate-scale-in">
              <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
              <p className="text-muted-foreground">
                To become India's most trusted and comprehensive MBA preparation platform, recognized for transforming students into successful professionals. We envision a future where every motivated student has access to quality education that shapes their career trajectory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Core <span className="text-accent">Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at ThinkPlus Education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-card rounded-2xl shadow-smooth hover:shadow-lg transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Why Students Choose <span className="text-accent">ThinkPlus</span>
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-smooth">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Proven Success Rate</h3>
                  <p className="text-muted-foreground">
                    95% of our students successfully clear their target exams and secure admissions in top B-Schools.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-smooth">
                <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Expert Faculty</h3>
                  <p className="text-muted-foreground">
                    Learn from IIM/IIT alumni and industry experts with 10+ years of teaching experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-smooth">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Comprehensive Support</h3>
                  <p className="text-muted-foreground">
                    From entrance prep to final placements, we provide end-to-end support throughout your MBA journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
