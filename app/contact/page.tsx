import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Phone } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const planes = Array.from({ length: 20 }, () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    rotate: `${Math.random() * 360}deg`,
  }));

  return (
    <div className="min-h-screen p-4 sm:p-8 lg:p-16 flex items-center justify-center relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {planes.map((plane, i) => (
          <div
            key={i}
            className="absolute text-muted-foreground/20 text-xs"
            style={{
              left: plane.left,
              top: plane.top,
              transform: `rotate(${plane.rotate})`,
            }}
          >
            ✈
          </div>
        ))}
        <div className="absolute top-20 left-1/2 text-blue-400 text-2xl transform -rotate-45">
          📧
        </div>
        <div className="absolute top-24 right-1/3 text-pink-400 text-2xl transform rotate-12">
          ✉️
        </div>
      </div>

      <div className="max-w-2xl w-full space-y-8 relative z-10 animate-fade-in">
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Contact
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            If you're building in / excited about AI or just wanna chat, say hi
            on Linkedin!
          </p>
        </div>

        {/* Linkedin Card */}
        <Card className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0 justify-between border shadow-sm hover:shadow-md hover-lift">
          <div className="flex items-center gap-3">
            <X className="w-6 h-6 flex-shrink-0" />
            <span className="text-xs sm:text-sm">
              Connect with me on Linkedin for Software engineering insights &
              more
            </span>
          </div>
          <Link href="https://linkedin.com/in/your-profile" target="_blank">
            <Button
              variant="default"
              className="hover:bg-primary/90 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Connect
            </Button>
          </Link>
        </Card>

        {/* Book a call button */}
        <div className="flex">
          <Link href="https://cal.com/your-link" target="_blank">
            <Button
              size="lg"
              className="gap-2 hover:bg-primary/90 hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Book a call
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
