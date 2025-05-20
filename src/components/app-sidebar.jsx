import * as React from "react"
import {
  FileText,
  BookOpen,
  Link as LinkIcon,
  Gift,
  Plug,
  CreditCard,
  Users,
  HelpCircle,
  RefreshCw,
  MessageCircle,
  User,
  ChevronDown,
  LayoutDashboard,
  Settings
} from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"
import { NavLink } from "react-router-dom"

const navSections = [
  {
    label: "Articles",
    icon: FileText,
    collapsible: true,
    items: [
      { label: "Create Article", icon: FileText, to: "/articles/create" },
      { label: "Generated Articles", icon: LayoutDashboard, to: "/articles/generated" },
      { label: "Keyword Projects", icon: FileText, to: "/articles/keyword-projects" },
      { label: "AI Keyword to Article", icon: FileText, to: "/articles/ai-keyword" },
      { label: "Steal Competitor Keyword", icon: FileText, to: "/articles/steal-competitor" },
      { label: "Import Keyword from GSC", icon: FileText, to: "/articles/import-gsc" },
      { label: "Manual Keyword to Article", icon: FileText, to: "/articles/manual-keyword" },
      { label: "Bulk Keyword to Article", icon: FileText, to: "/articles/bulk-keyword" },
      { label: "Longtail Keyword to Article", icon: FileText, to: "/articles/longtail-keyword" },
      { label: "Article Settings", icon: Settings, to: "/articles/settings" },
    ]
  },
  { label: "Auto Blog", icon: BookOpen, to: "/auto-blog" },
  { label: "Internal Links", icon: LinkIcon, to: "/internal-links" },
  { label: "Free Backlinks", icon: Gift, to: "/free-backlinks" },
  { label: "Integrations", icon: Plug, to: "/integrations" },
  { label: "Subscription", icon: CreditCard, to: "/subscription" },
  { label: "Affiliate Program", icon: Users, to: "/affiliate-program" },
  { label: "Help Center", icon: HelpCircle, to: "/help-center" },
  { label: "Updates", icon: RefreshCw, to: "/updates" },
  { label: "Live Chat Support", icon: MessageCircle, to: "/live-chat-support" },
  { label: "Profile", icon: User, to: "/profile" }
]

export function AppSidebar(props) {
  const [articlesOpen, setArticlesOpen] = React.useState(true);
  return (
    <Sidebar collapsible="icon" className="h-screen" {...props}>
      <SidebarHeader className="sticky top-0 bg-white z-10">
        <div className="flex items-center gap-2 font-bold text-3xl mb-4 text-blue-700">
          <BookOpen className="w-8 h-8 text-blue-700" />
          abun
        </div>
        <div className="flex items-center justify-between bg-muted px-4 py-3 rounded-md mb-4">
          <span className="text-base font-semibold">amazon.com</span>
          <ChevronDown size={18} />
        </div>
      </SidebarHeader>
      <SidebarContent className="flex-1 overflow-y-auto">
        <nav className="space-y-2 pb-2">
          {navSections.map((section) => (
            <div key={section.label}>
              <div className="flex items-center gap-2 text-sm text-muted-foreground uppercase mb-1 mt-2">
                {section.icon && <section.icon size={18} />}
                {section.collapsible ? (
                  <button
                    className="flex-1 flex items-center gap-2 w-full text-left focus:outline-none"
                    onClick={() => setArticlesOpen((open) => !open)}
                  >
                    <span className="font-semibold">{section.label}</span>
                    <ChevronDown className={`ml-1 transition-transform ${articlesOpen ? "rotate-180" : "rotate-0"}`} size={18} />
                  </button>
                ) : (
                  <NavLink
                    to={section.to}
                    className={({ isActive }) =>
                      `flex items-center gap-2 text-base cursor-pointer rounded-lg px-3 py-2 transition-colors
                      hover:text-blue-600 hover:bg-blue-50
                      ${isActive ? "bg-blue-100 text-blue-700 font-semibold border-l-4 border-blue-500" : ""}`
                    }
                  >
                    <span>{section.label}</span>
                  </NavLink>
                )}
              </div>
              {section.items && (
                <div
                  className={`ml-4 space-y-1 overflow-hidden transition-all duration-300 ${articlesOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
                  style={{ willChange: 'max-height, opacity' }}
                >
                  {section.items.map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.to}
                      className={({ isActive }) =>
                        `flex items-center gap-2 text-base cursor-pointer rounded px-3 py-2 transition-colors
                        hover:text-blue-600 hover:bg-blue-50
                        ${isActive ? "bg-blue-100 text-blue-700 font-semibold border-l-4 border-blue-500" : ""}`
                      }
                    >
                      <item.icon size={18} />
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </SidebarContent>
      <SidebarFooter className="sticky bottom-0 bg-white border-t pt-4">
        <div className="text-sm text-muted-foreground">&copy; 2024 abun</div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
