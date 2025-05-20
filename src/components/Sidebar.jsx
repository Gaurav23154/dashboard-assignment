import {
    Home,
    FileText,
    LayoutDashboard,
    Settings,
    BookOpen,
    HelpCircle,
    MessageCircle,
    User,
    ChevronDown,
    Book
  } from "lucide-react"
  import { Button } from "@/components/ui/button"
  import { Separator } from "@/components/ui/separator"
  import { SidebarProvider } from "@/components/ui/sidebar"
  
  
  const navLinks = [
    { name: "Articles", icon: Home },
    { name: "AI Blog", icon: Book },
    { name: "Profile", icon: User },
    { name: "Settings", icon: Settings },
  ];
  
  export default function Sidebar() {
    return (
      <aside className="w-64 min-h-screen bg-white border-r p-4 flex flex-col">
        {/* Logo */}
        <h1 className="text-2xl font-bold mb-6">abun</h1>
  
        {/* Domain Selector */}
        <div className="flex items-center justify-between bg-muted px-3 py-2 rounded-md mb-6">
          <span className="text-sm font-medium">amazon.com</span>
          <ChevronDown size={16} />
        </div>
  
        {/* Nav Groups */}
        <div className="space-y-6">
          {/* ARTICLES */}
          <div>
            <p className="text-xs text-muted-foreground uppercase mb-2">Articles</p>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start text-blue-600">
                <LayoutDashboard size={16} className="mr-2" /> Generated Articles
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <FileText size={16} className="mr-2" /> Create Article
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <FileText size={16} className="mr-2" /> Keyword Projects
              </Button>
            </div>
          </div>
  
          {/* AI TOOLS */}
          <div>
            <p className="text-xs text-muted-foreground uppercase mb-2">AI Tools</p>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start">
                <BookOpen size={16} className="mr-2" /> AI Blog
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Settings size={16} className="mr-2" /> Keyword Tools
              </Button>
            </div>
          </div>
  
          {/* SUPPORT */}
          <div>
            <p className="text-xs text-muted-foreground uppercase mb-2">Support</p>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start">
                <HelpCircle size={16} className="mr-2" /> Help Center
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <MessageCircle size={16} className="mr-2" /> Live Chat Support
              </Button>
            </div>
          </div>
  
          {/* ACCOUNT */}
          <div>
            <p className="text-xs text-muted-foreground uppercase mb-2">Account</p>
            <Button variant="ghost" className="w-full justify-start">
              <User size={16} className="mr-2" /> Profile
            </Button>
          </div>
        </div>
  
        <Separator className="mt-auto" />
      </aside>
    )
  }