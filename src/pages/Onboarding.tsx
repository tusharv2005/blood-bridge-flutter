import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 max-w-md mx-auto">
      {/* Illustration Area */}
      <div className="w-full mb-8 flex items-center justify-center">
        <div className="relative w-72 h-72">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                {/* Simple illustration representation */}
                <circle cx="60" cy="100" r="30" fill="hsl(var(--secondary))" />
                <circle cx="140" cy="100" r="30" fill="hsl(var(--accent))" />
                <path d="M 80 90 Q 100 70 120 90" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" />
                <circle cx="100" cy="120" r="40" fill="hsl(var(--primary))" opacity="0.2" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center mb-12">
        <h1 className="font-heading font-bold text-4xl mb-4">
          Discover Donar Based{" "}
          <span className="relative inline-block">
            Blood
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="12"
              viewBox="0 0 100 12"
              fill="none"
            >
              <path
                d="M2 10C20 2, 80 2, 98 10"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          Lorem ipsum is simple dummy text of the printing and typesetting
        </p>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between w-full max-w-xs">
        <button className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary/5 transition-colors">
          <ArrowLeft className="w-6 h-6 text-primary" />
        </button>

        {/* Pagination Dots */}
        <div className="flex gap-2">
          <div className="w-10 h-2 rounded-full bg-primary" />
          <div className="w-2 h-2 rounded-full bg-muted" />
          <div className="w-2 h-2 rounded-full bg-muted" />
        </div>

        <button
          onClick={() => navigate("/home")}
          className="w-14 h-14 rounded-full bg-primary flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
        >
          <ArrowRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
