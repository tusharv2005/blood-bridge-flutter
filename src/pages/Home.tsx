import { Search, SlidersHorizontal, Heart, Gift, Droplet, Building2, HandHeart, HeartPulse, MoreHorizontal, MapPin } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";

const Home = () => {
  const quickActions = [
    { icon: Droplet, label: "Find Donors", color: "bg-red-50" },
    { icon: HandHeart, label: "Donate", color: "bg-red-50" },
    { icon: Building2, label: "Blood Bank", color: "bg-red-50" },
    { icon: HeartPulse, label: "Support", color: "bg-red-50" },
    { icon: Droplet, label: "Blood Request", color: "bg-red-50" },
    { icon: MoreHorizontal, label: "More", color: "bg-red-50" },
  ];

  return (
    <div className="min-h-screen pb-20 max-w-md mx-auto">
      {/* Header */}
      <div className="glass-card rounded-b-3xl p-4 mb-4 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-muted/50 border-0 focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <button className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
            <SlidersHorizontal className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* User Post */}
        <div className="bg-white rounded-2xl p-4 mb-4">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <span className="text-primary font-semibold">F</span>
            </div>
            <div className="flex-1">
              <h3 className="font-heading font-semibold">Faria</h3>
              <p className="text-sm text-muted-foreground">30 mins ago</p>
            </div>
            <button className="text-muted-foreground">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm mb-3">
            Felt good after donating fppd to the needy people,The happiness on their faces.
          </p>
          <div className="flex items-center gap-4 mb-3">
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-primary" />
              <Heart className="w-5 h-5 text-primary" />
            </div>
          </div>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>2 Comments</span>
            <span>4 Share</span>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-3 gap-3">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={index}
                className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white hover:scale-105 transition-transform"
              >
                <div className={`w-12 h-12 rounded-full ${action.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-medium text-center leading-tight">{action.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Blood Seeker Section */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-heading font-bold text-lg">Blood seeker</h2>
          <button className="text-primary text-sm font-semibold">See all</button>
        </div>

        <div className="glass-card rounded-2xl p-4 shadow-sm">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
              <span className="text-primary font-semibold">J</span>
            </div>
            <div className="flex-1">
              <h3 className="font-heading font-semibold">James Peterson</h3>
              <p className="text-sm text-muted-foreground">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
                <MapPin className="w-4 h-4" />
                <span>London, England</span>
              </div>
              <span className="inline-block text-xs bg-red-50 text-primary px-2 py-1 rounded-full mt-2">
                5 Min Ago
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Droplet className="w-6 h-6 text-white fill-white" />
              </div>
              <span className="text-sm font-bold">B+</span>
            </div>
          </div>
          <Button className="w-full rounded-full bg-primary hover:bg-primary/90 text-white font-semibold h-12">
            Donate
          </Button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;
