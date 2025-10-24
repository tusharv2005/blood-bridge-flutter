import { ArrowLeft, Droplet } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Add = () => {
  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  return (
    <div className="min-h-screen pb-20 max-w-md mx-auto">
      {/* Header */}
      <div className="glass-card rounded-b-3xl p-4 mb-4 shadow-sm">
        <div className="flex items-center gap-3">
          <Link to="/home">
            <button className="w-10 h-10 rounded-full hover:bg-muted/50 flex items-center justify-center">
              <ArrowLeft className="w-5 h-5" />
            </button>
          </Link>
          <h1 className="font-heading font-bold text-xl flex-1 text-center">Blood Request</h1>
          <div className="w-10" />
        </div>
      </div>

      <div className="px-4">
        <form className="space-y-4">
          {/* Blood Type Selection */}
          <div>
            <label className="font-heading font-semibold mb-3 block">Select Blood Type</label>
            <div className="grid grid-cols-4 gap-3">
              {bloodTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  className="aspect-square rounded-2xl glass-card flex flex-col items-center justify-center hover:bg-white/80 transition-colors"
                >
                  <Droplet className="w-6 h-6 text-primary mb-1" />
                  <span className="font-heading font-bold">{type}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Units Required */}
          <div>
            <label className="font-heading font-semibold mb-3 block">Units Required</label>
            <input
              type="number"
              placeholder="Enter units"
              className="w-full px-4 py-3 rounded-2xl glass-card border-0 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Urgency Level */}
          <div>
            <label className="font-heading font-semibold mb-3 block">Urgency Level</label>
            <div className="grid grid-cols-3 gap-3">
              {["High", "Medium", "Low"].map((level) => (
                <button
                  key={level}
                  type="button"
                  className="py-3 rounded-2xl glass-card hover:bg-white/80 transition-colors font-medium"
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Hospital Name */}
          <div>
            <label className="font-heading font-semibold mb-3 block">Hospital Name</label>
            <input
              type="text"
              placeholder="Enter hospital name"
              className="w-full px-4 py-3 rounded-2xl glass-card border-0 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* City */}
          <div>
            <label className="font-heading font-semibold mb-3 block">City/Location</label>
            <input
              type="text"
              placeholder="Enter city"
              className="w-full px-4 py-3 rounded-2xl glass-card border-0 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Submit Button */}
          <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-white font-semibold h-12 mt-6">
            Post Request
          </Button>
        </form>
      </div>

      <BottomNav />
    </div>
  );
};

export default Add;
