import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import Header from "@/components/Header"
import ArticlesPage from "@/pages/ArticlesPage"
import AutoBlogPage from "@/pages/AutoBlogPage"
import InternalLinksPage from "@/pages/InternalLinksPage"
import FreeBacklinksPage from "@/pages/FreeBacklinksPage"
import IntegrationsPage from "@/pages/IntegrationsPage"
import SubscriptionPage from "@/pages/SubscriptionPage"
import AffiliateProgramPage from "@/pages/AffiliateProgramPage"
import HelpCenterPage from "@/pages/HelpCenterPage"
import UpdatesPage from "@/pages/UpdatesPage"
import LiveChatSupportPage from "@/pages/LiveChatSupportPage"
import ProfilePage from "@/pages/ProfilePage"
import CreateArticlePage from "@/pages/CreateArticlePage"
import KeywordProjectsPage from "@/pages/KeywordProjectsPage"
import AIKeywordPage from "@/pages/AIKeywordPage"
import StealCompetitorPage from "@/pages/StealCompetitorPage"
import ImportGSCPage from "@/pages/ImportGSCPage"
import ManualKeywordPage from "@/pages/ManualKeywordPage"
import BulkKeywordPage from "@/pages/BulkKeywordPage"
import LongtailKeywordPage from "@/pages/LongtailKeywordPage"
import ArticleSettingsPage from "@/pages/ArticleSettingsPage"

export default function App() {
  return (
    <Router>
      <SidebarProvider>
        <div className="flex min-h-screen w-full bg-gray-50">
          <AppSidebar />
          <div className="flex-1 flex flex-col min-h-screen w-full">
            <Header />
            <main className="flex-1 w-full p-6 overflow-auto">
              <div className="max-w-[1600px] mx-auto">
                <Routes>
                  <Route path="/" element={<ArticlesPage />} />
                  <Route path="/auto-blog" element={<AutoBlogPage />} />
                  <Route path="/internal-links" element={<InternalLinksPage />} />
                  <Route path="/free-backlinks" element={<FreeBacklinksPage />} />
                  <Route path="/integrations" element={<IntegrationsPage />} />
                  <Route path="/subscription" element={<SubscriptionPage />} />
                  <Route path="/affiliate-program" element={<AffiliateProgramPage />} />
                  <Route path="/help-center" element={<HelpCenterPage />} />
                  <Route path="/updates" element={<UpdatesPage />} />
                  <Route path="/live-chat-support" element={<LiveChatSupportPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  {/* Article subpages */}
                  <Route path="/articles/create" element={<CreateArticlePage />} />
                  <Route path="/articles/generated" element={<ArticlesPage />} />
                  <Route path="/articles/keyword-projects" element={<KeywordProjectsPage />} />
                  <Route path="/articles/ai-keyword" element={<AIKeywordPage />} />
                  <Route path="/articles/steal-competitor" element={<StealCompetitorPage />} />
                  <Route path="/articles/import-gsc" element={<ImportGSCPage />} />
                  <Route path="/articles/manual-keyword" element={<ManualKeywordPage />} />
                  <Route path="/articles/bulk-keyword" element={<BulkKeywordPage />} />
                  <Route path="/articles/longtail-keyword" element={<LongtailKeywordPage />} />
                  <Route path="/articles/settings" element={<ArticleSettingsPage />} />
                </Routes>
              </div>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </Router>
  )
}
