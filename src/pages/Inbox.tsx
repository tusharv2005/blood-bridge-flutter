import { Search, SlidersHorizontal, ArrowLeft } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import { Link } from "react-router-dom";

const Inbox = () => {
  const chats = [
    { name: "Henry Jack", message: "Lorem ipsum is simply...", time: "9:31", avatar: "H" },
    { name: "Felix Ethan", message: "Lorem ipsum is simply...", time: "6:45", avatar: "F", isImportant: true },
    { name: "Cole William", message: "Lorem ipsum is simply...", time: "9:50", avatar: "C" },
    { name: "Alexender Oliver", message: "Lorem ipsum is simply...", time: "3:20", avatar: "A" },
    { name: "Mateo Asher", message: "Lorem ipsum is simply...", time: "1:40", avatar: "M" },
    { name: "Liam Benjamin", message: "Lorem ipsum is simply...", time: "4:31", avatar: "L" },
    { name: "Michel Atticus", message: "Lorem ipsum is simply...", time: "8:15", avatar: "M" },
  ];

  return (
    <div className="min-h-screen pb-20 max-w-md mx-auto">
      {/* Header */}
      <div className="glass-card rounded-b-3xl p-4 mb-4 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Link to="/home">
            <button className="w-10 h-10 rounded-full hover:bg-muted/50 flex items-center justify-center">
              <ArrowLeft className="w-5 h-5" />
            </button>
          </Link>
          <h1 className="font-heading font-bold text-xl flex-1 text-center">Inbox</h1>
          <div className="w-10" />
        </div>

        <div className="flex items-center gap-2">
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
      </div>

      {/* Active Section */}
      <div className="px-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-heading font-semibold text-lg">Active</h2>
          <button className="text-muted-foreground">
            <span className="text-sm">•••</span>
          </button>
        </div>
        <div className="glass-card rounded-2xl p-3 mb-4 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm">Save food NGO Volunteer</span>
            <span className="ml-auto text-xs bg-primary text-white px-3 py-1 rounded-full font-medium">
              7am - 9am
            </span>
          </div>
        </div>
      </div>

      {/* Chat List */}
      <div className="px-4 space-y-2">
        {chats.map((chat, index) => (
          <button
            key={index}
            className="w-full flex items-center gap-3 p-3 rounded-2xl glass-card hover:bg-white/80 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-semibold">{chat.avatar}</span>
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-heading font-semibold">{chat.name}</h3>
              <p className="text-sm text-muted-foreground truncate">{chat.message}</p>
            </div>
            <span className={`text-sm ${chat.isImportant ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
              {chat.time}
            </span>
          </button>
        ))}
      </div>

      {/* FAB */}
      <button className="fixed bottom-24 right-4 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
        <span className="text-white text-2xl">+</span>
      </button>

      <BottomNav />
    </div>
  );
};

export default Inbox;
