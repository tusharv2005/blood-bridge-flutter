import { ArrowLeft, Bell, Edit, Droplet, Star, Info, LogOut, ChevronRight } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import { Link } from "react-router-dom";
import { Switch } from "@/components/ui/switch";

const Profile = () => {
  const menuItems = [
    { icon: Bell, label: "My notifications", hasToggle: true },
    { icon: Edit, label: "Edit Profile", hasArrow: true },
    { icon: Droplet, label: "Blood Request", hasArrow: true },
    { icon: Star, label: "Rate Us", hasArrow: true },
    { icon: Info, label: "About Us", hasArrow: true },
  ];

  return (
    <div className="min-h-screen pb-20 max-w-md mx-auto">
      {/* Header */}
      <div className="glass-card rounded-b-3xl p-4 mb-4 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/home">
            <button className="w-10 h-10 rounded-full hover:bg-muted/50 flex items-center justify-center">
              <ArrowLeft className="w-5 h-5" />
            </button>
          </Link>
          <h1 className="font-heading font-bold text-xl flex-1 text-center">Profile</h1>
          <div className="w-10" />
        </div>

        {/* Profile Info */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mb-3 overflow-hidden">
            <span className="text-primary font-bold text-3xl">D</span>
          </div>
          <h2 className="font-heading font-bold text-xl mb-1">David Jonson</h2>
          <p className="text-sm text-muted-foreground mb-4">Last Donation: November, 2024</p>

          {/* Stats */}
          <div className="flex gap-8 mb-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Donations</p>
              <p className="font-heading font-bold text-2xl">05</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Requests</p>
              <p className="font-heading font-bold text-2xl">03</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Life Saved</p>
              <p className="font-heading font-bold text-2xl">06</p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 space-y-3">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              className="w-full flex items-center gap-3 p-4 glass-card rounded-2xl hover:bg-white/80 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <span className="flex-1 text-left font-heading font-medium">{item.label}</span>
              {item.hasToggle && <Switch defaultChecked />}
              {item.hasArrow && <ChevronRight className="w-5 h-5 text-muted-foreground" />}
            </button>
          );
        })}
      </div>

      {/* Sign Out Button */}
      <div className="px-4 mt-6 flex flex-col items-center">
        <button className="flex items-center gap-2 px-6 py-3 rounded-full hover:bg-muted/50 transition-colors mb-4">
          <LogOut className="w-5 h-5 text-primary" />
          <span className="font-heading font-semibold text-primary">Sign Out</span>
        </button>

        {/* FAB */}
        <button className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
          <span className="text-white text-2xl">+</span>
        </button>
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;
