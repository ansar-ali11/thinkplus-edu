import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { BookOpen } from "lucide-react";
import mbaImage from "@/assets/mba-prep.jpg";
import gdpiImage from "@/assets/gdpi-training.jpg";
import catImage from "@/assets/cat-coaching.jpg";
import interviewImage from "@/assets/interview-prep.jpg";

const Courses = () => {
  const courses = [
    {
      title: "MBA Entrance Preparation",
      description: "Comprehensive coaching for CAT, XAT, SNAP, NMAT, and other top MBA entrance exams with proven strategies.",
      image: mbaImage,
      duration: "6 Months",
      students: "2000+",
      rating: "4.9",
      features: [
        "Complete syllabus coverage with concept clarity",
        "Weekly mock tests with detailed analysis",
        "Expert faculty with IIM backgrounds",
        "Comprehensive study materials and notes",
        "Doubt clearing sessions and workshops",
      ],
    },
    {
      title: "GDPI Mastery Program",
      description: "Master Group Discussions and Personal Interviews with industry experts and B-School alumni.",
      image: gdpiImage,
      duration: "2 Months",
      students: "1500+",
      rating: "4.8",
      features: [
        "Mock GD sessions with peer groups",
        "1-on-1 personal interview coaching",
        "Professional resume building",
        "Current affairs and GK preparation",
        "Body language and communication training",
      ],
    },
    {
      title: "CAT Focused Coaching",
      description: "Specialized training for CAT exam with section-wise expertise and shortcut techniques.",
      image: catImage,
      duration: "8 Months",
      students: "3000+",
      rating: "4.9",
      features: [
        "Section-wise detailed training",
        "Daily practice tests and assignments",
        "Time management strategies",
        "Performance tracking and improvement plans",
        "Previous year paper analysis",
      ],
    },
    {
      title: "CMAT Preparation",
      description: "Complete preparation for CMAT exam covering all sections with comprehensive practice tests.",
      image: mbaImage,
      duration: "4 Months",
      students: "1200+",
      rating: "4.7",
      features: [
        "Complete syllabus coverage",
        "Regular mock tests",
        "Expert faculty guidance",
        "Study materials provided",
        "Doubt resolution sessions",
      ],
    },
    {
      title: "Interview Preparation",
      description: "Professional interview coaching for MBA admissions, placements, and corporate interviews.",
      image: interviewImage,
      duration: "1 Month",
      students: "2500+",
      rating: "4.9",
      features: [
        "Industry-specific interview prep",
        "Mock interview sessions",
        "Answer structuring techniques",
        "Confidence building exercises",
        "Case study preparation",
      ],
    },
    {
      title: "Complete MBA Success Package",
      description: "All-inclusive package covering entrance prep, GDPI, and interview training for guaranteed success.",
      image: catImage,
      duration: "10 Months",
      students: "1800+",
      rating: "5.0",
      features: [
        "End-to-end MBA preparation",
        "All courses bundled at special price",
        "Dedicated mentor support",
        "Placement assistance",
        "Lifetime access to materials",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-6">
              <BookOpen className="h-8 w-8 text-accent-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-accent">Courses</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Choose from our comprehensive range of courses designed to help you excel in your MBA journey. Expert faculty, proven methodologies, and personalized attention guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CourseCard {...course} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Courses Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Why Our <span className="text-accent">Courses Stand Out</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-xl shadow-smooth hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Expert Faculty</h3>
                <p className="text-muted-foreground">
                  Learn from IIM/IIT alumni and industry experts with 10+ years of teaching experience.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-smooth hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Proven Track Record</h3>
                <p className="text-muted-foreground">
                  95% success rate with 500+ students in top B-Schools like IIM, XLRI, FMS, and more.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-smooth hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Personalized Attention</h3>
                <p className="text-muted-foreground">
                  Small batch sizes ensuring individual attention and customized learning paths.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-smooth hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Comprehensive Materials</h3>
                <p className="text-muted-foreground">
                  Best-in-class study materials, mock tests, and online resources for complete preparation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
