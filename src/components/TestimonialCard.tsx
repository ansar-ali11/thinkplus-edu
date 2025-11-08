import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

const TestimonialCard = ({ name, role, content, rating, image }: TestimonialCardProps) => {
  return (
    <Card className="h-full bg-card hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <Quote className="h-8 w-8 text-accent/30" />
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? "text-accent fill-current" : "text-muted"
                }`}
              />
            ))}
          </div>
        </div>

        <p className="text-muted-foreground italic leading-relaxed">{content}</p>

        <div className="flex items-center space-x-4 pt-4 border-t">
          <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
            <span className="text-lg font-bold text-primary-foreground">
              {name.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-semibold text-foreground">{name}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
