import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  students: string;
  rating: string;
  features: string[];
}

const CourseCard = ({ title, description, image, duration, students, rating, features }: CourseCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card">
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
          <Star className="h-4 w-4 fill-current" />
          <span>{rating}</span>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-accent" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-accent" />
            <span>{students}</span>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground">Key Features:</p>
          <ul className="space-y-1">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start">
                <span className="text-accent mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter>
        <Link to="/contact" className="w-full">
          <Button className="w-full gradient-primary font-semibold hover:shadow-lg transition-all">
            Learn More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
