import { ArrowLeft, Gift, Smile, HeartPulse, Droplet, UserPlus, CheckCircle, MoreVertical } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import { Link } from "react-router-dom";

const Notifications = () => {
  const todayNotifications = [
    {
      icon: Gift,
      title: "Greatful For You!",
      message: "Lorem ipsum is simply dummy test of the printing and typessetting",
    },
    {
      icon: Smile,
      title: "Feel Healthier",
      message: "Lorem ipsum is simply dummy test of the printing and typessetting",
    },
    {
      icon: HeartPulse,
      title: "Health Tips For Donors",
      message: "Lorem ipsum is simply dummy test of the printing and typessetting",
    },
  ];

  const yesterdayNotifications = [
    {
      icon: Droplet,
      title: "B+ Blood Needed In Your Area",
      message: "Lorem ipsum is simply dummy test of the printing and typessetting",
    },
    {
      icon: UserPlus,
      title: "You Have Got Donate Request",
      message: "Lorem ipsum is simply dummy test of the printing and typessetting",
    },
    {
      icon: CheckCircle,
      title: "Account Setup Successful!",
      message: "Lorem ipsum is simply dummy test of the printing and typessetting",
    },
  ];

  const NotificationItem = ({ icon: Icon, title, message }: any) => (
    <div className="flex items-start gap-3 p-4 glass-card rounded-2xl hover:bg-white/80 transition-colors">
      <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div className="flex-1">
        <h3 className="font-heading font-semibold mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{message}</p>
      </div>
      <button className="text-muted-foreground">
        <MoreVertical className="w-5 h-5" />
      </button>
    </div>
  );

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
          <h1 className="font-heading font-bold text-xl flex-1 text-center">Notification</h1>
          <div className="w-10" />
        </div>
      </div>

      {/* Today Section */}
      <div className="px-4 mb-6">
        <h2 className="font-heading font-bold text-lg mb-3">Today</h2>
        <div className="space-y-3">
          {todayNotifications.map((notification, index) => (
            <NotificationItem key={index} {...notification} />
          ))}
        </div>
      </div>

      {/* Yesterday Section */}
      <div className="px-4">
        <h2 className="font-heading font-bold text-lg mb-3">Yesterday</h2>
        <div className="space-y-3">
          {yesterdayNotifications.map((notification, index) => (
            <NotificationItem key={index} {...notification} />
          ))}
        </div>
      </div>

      {/* FAB */}
      <button className="fixed bottom-24 right-4 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
        <span className="text-white text-2xl">+</span>
      </button>

      <BottomNav />
    </div>
  );
};

export default Notifications;
