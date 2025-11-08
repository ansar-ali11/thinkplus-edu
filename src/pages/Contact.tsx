import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Instagram, Youtube, Facebook, Linkedin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Have questions about our courses? We're here to help you start your MBA journey. Reach out to us anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <div className="bg-card p-8 rounded-2xl shadow-smooth">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="course" className="block text-sm font-medium mb-2 text-foreground">
                      Interested Course
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={(e) => handleChange(e as any)}
                      className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select a course</option>
                      <option value="mba-prep">MBA Entrance Preparation</option>
                      <option value="gdpi">GDPI Training</option>
                      <option value="cat">CAT Coaching</option>
                      <option value="cmat">CMAT Preparation</option>
                      <option value="interview">Interview Preparation</option>
                      <option value="complete">Complete MBA Package</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your goals and how we can help..."
                      rows={5}
                      className="w-full"
                    />
                  </div>

                  <Button type="submit" className="w-full gradient-accent font-semibold text-base group">
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-right">
              {/* Contact Details */}
              <div className="bg-card p-8 rounded-2xl shadow-smooth">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        ThinkPlus Education Center<br />
                        Pune, Maharashtra<br />
                        India - 411001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground">
                        +91 98765 43210<br />
                        Mon - Sat: 9:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        info@thinkplus.edu<br />
                        support@thinkplus.edu
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-card p-8 rounded-2xl shadow-smooth">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Connect With Us</h2>
                <p className="text-muted-foreground mb-6">
                  Follow us on social media for updates, tips, and success stories from our students.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.instagram.com/thinkpluseducation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all hover:scale-105"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="font-medium">Instagram</span>
                  </a>
                  <a
                    href="https://www.youtube.com/@ThinkplusMBA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:shadow-lg transition-all hover:scale-105"
                  >
                    <Youtube className="h-5 w-5" />
                    <span className="font-medium">YouTube</span>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg transition-all hover:scale-105"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="font-medium">Facebook</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-lg hover:shadow-lg transition-all hover:scale-105"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-card p-8 rounded-2xl shadow-smooth">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Office Hours</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium text-foreground">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium text-foreground">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium text-foreground">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Visit Our Campus</h2>
            <div className="bg-card rounded-2xl shadow-smooth overflow-hidden h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04360786449!2d73.79969792957326!3d18.52456577294733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ThinkPlus Location"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
